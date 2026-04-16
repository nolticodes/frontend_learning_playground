let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = "cross";
let gameOver = false

function render() {
    let content = `
        <div class="tictactoe_wrapper">
            <table class="tictactoe_table">
    `;

    for (let i = 0; i < 3; i++) {
        content += '<tr>';

        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';

            if (fields[index] === "circle") {
                symbol = generateCircleSVG();
            } else if (fields[index] === "cross") {
                symbol = generateCrossSVG();
            }

            content += `<td id="cell_${index}" onclick="handleClick(${index})">${symbol}</td>`;
        }

        content += '</tr>';
    }

    content += `
            </table>
            <div id="winner_line_id" class="winner_line"></div>
        </div>
    `;

    document.getElementById("tictactoe_table_id").innerHTML = content;
}

function handleClick(index) {
    if (fields[index] !== null || gameOver) {
        return;
    }

    let cellRef = document.getElementById(`cell_${index}`);

    if (currentPlayer === "circle") {
        fields[index] = "circle";
        cellRef.innerHTML = generateCircleSVG();
        currentPlayer = "cross";
    } else {
        fields[index] = "cross";
        cellRef.innerHTML = generateCrossSVG();
        currentPlayer = "circle";
    }

    cellRef.onclick = null;

    let winnerInfo = checkWinner();
    if (winnerInfo) {
        gameOver = true;
        drawWinnerLine(winnerInfo);

        setTimeout(function () {
            openGameWonDialog();
        }, 500);
    }
}

function checkWinner() {
    let winningCombinations = [
        { combo: [0, 1, 2], line: "row1" },
        { combo: [3, 4, 5], line: "row2" },
        { combo: [6, 7, 8], line: "row3" },

        { combo: [0, 3, 6], line: "col1" },
        { combo: [1, 4, 7], line: "col2" },
        { combo: [2, 5, 8], line: "col3" },

        { combo: [0, 4, 8], line: "diag1" },
        { combo: [2, 4, 6], line: "diag2" }
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        let a = winningCombinations[i].combo[0];
        let b = winningCombinations[i].combo[1];
        let c = winningCombinations[i].combo[2];

        if (
            fields[a] !== null &&
            fields[a] === fields[b] &&
            fields[a] === fields[c]
        ) {
            return winningCombinations[i].line;
        }
    }

    return null;
}

function drawWinnerLine(line) {
    let lineRef = document.getElementById("winner_line_id");

    if (line === "row1") {
        lineRef.innerHTML = getWinnerLineSVG(5, 16.66, 95, 16.66);
    } else if (line === "row2") {
        lineRef.innerHTML = getWinnerLineSVG(5, 50, 95, 50);
    } else if (line === "row3") {
        lineRef.innerHTML = getWinnerLineSVG(5, 83.33, 95, 83.33);
    } else if (line === "col1") {
        lineRef.innerHTML = getWinnerLineSVG(16.66, 5, 16.66, 95);
    } else if (line === "col2") {
        lineRef.innerHTML = getWinnerLineSVG(50, 5, 50, 95);
    } else if (line === "col3") {
        lineRef.innerHTML = getWinnerLineSVG(83.33, 5, 83.33, 95);
    } else if (line === "diag1") {
        lineRef.innerHTML = getWinnerLineSVG(8, 8, 92, 92);
    } else if (line === "diag2") {
        lineRef.innerHTML = getWinnerLineSVG(92, 8, 8, 92);
    }
}

