let fields = [
    null,
    null,
    "circle",
    "circle",
    null,
    "cross",
    null,
    null,
    null,
];

let currentPlayer = "cross";

function render() {
    let content = '<table class="tictactoe_table">';

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

    content += '</table>';

    document.getElementById("tictactoe_table_id").innerHTML = content;
}

function handleClick(index) {
    if (fields[index] !== null) {
        return;
    }

    fields[index] = currentPlayer;

    let cellRef = document.getElementById(`cell_${index}`);

    if (currentPlayer === "circle") {
        cellRef.innerHTML = generateCircleSVG();
        currentPlayer = "cross";
    } else {
        cellRef.innerHTML = generateCrossSVG();
        currentPlayer = "circle";
    }

    cellRef.onclick = null;
}

