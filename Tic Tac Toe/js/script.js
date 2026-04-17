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
let gameOver = false;
let player1Name = "Player 1";
let player2Name = "Player 2";
let gameStarted = false;

function render() {
    let content = `
        <div class="game_container">
            <div class="player_turn_display">
                <div class="player_box">
                    <span id="player1_name_id" class="player_name ${currentPlayer === 'circle' ? 'active_player_name' : ''}">
                        ${player1Name}
                    </span>
                    ${!gameStarted ? `<button onclick="changePlayerName(1)">✏️</button>` : ''}
                </div>

                <div id="turn_circle_id" class="turn_symbol ${currentPlayer === 'circle' ? 'active_turn' : ''}">
                    ${generateCircleSVG()}
                </div>

                <div id="turn_cross_id" class="turn_symbol ${currentPlayer === 'cross' ? 'active_turn' : ''}">
                    ${generateCrossSVG()}
                </div>

                <div class="player_box">
                    <span id="player2_name_id" class="player_name ${currentPlayer === 'cross' ? 'active_player_name' : ''}">
                        ${player2Name}
                    </span>
                    ${!gameStarted ? `<button onclick="changePlayerName(2)">✏️</button>` : ''}
                </div>
            </div>

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
        </div>
    `;

    document.getElementById("tictactoe_table_id").innerHTML = content;
}

function handleClick(index) {
    if (fields[index] !== null || gameOver) {
        return;
    }

    if (!gameStarted) {
        gameStarted = true;
        hideNameButtons();
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
    updateTurnDisplay();

    let winnerInfo = checkWinner();

    if (winnerInfo) {
        gameOver = true;
        drawWinnerLine(winnerInfo.line);

        setTimeout(function () {
            openGameWonDialog(winnerInfo.winner);
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
            return {
                winner: fields[a],
                line: winningCombinations[i].line
            };
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

function openGameWonDialog() {
    document.getElementById("game_won_dialog_id").classList.remove("d_none");
}

function restartGame() {
    fields = [null, null, null, null, null, null, null, null, null];

    currentPlayer = "cross";
    gameOver = false;
    gameStarted = false;

    document.getElementById("game_won_dialog_id").classList.add("d_none");

    render();
}

function updateTurnDisplay() {
    let circleRef = document.getElementById("turn_circle_id");
    let crossRef = document.getElementById("turn_cross_id");
    let player1Ref = document.getElementById("player1_name_id");
    let player2Ref = document.getElementById("player2_name_id");

    circleRef.classList.remove("active_turn");
    crossRef.classList.remove("active_turn");
    player1Ref.classList.remove("active_player_name");
    player2Ref.classList.remove("active_player_name");

    if (currentPlayer === "circle") {
        circleRef.classList.add("active_turn");
        player1Ref.classList.add("active_player_name");
    } else {
        crossRef.classList.add("active_turn");
        player2Ref.classList.add("active_player_name");
    }
}

function changePlayerName(playerNumber) {
    let newName = prompt("Bitte gib einen neuen Namen ein:");

    if (!newName || newName.trim() === "") {
        return;
    }

    if (playerNumber === 1) {
        player1Name = newName.trim(); // ✅ WICHTIG
        document.getElementById("player1_name_id").innerHTML = player1Name;
    } else {
        player2Name = newName.trim(); // ✅ WICHTIG
        document.getElementById("player2_name_id").innerHTML = player2Name;
    }
}

function hideNameButtons() {
    let buttons = document.querySelectorAll(".player_box button");
    buttons.forEach(btn => btn.style.display = "none");
}

function openGameWonDialog(winner) {
    let winnerNameTextRef = document.getElementById("winner_name_text_id");

    let winnerName;

    if (winner === "circle") {
        winnerName = player1Name;
    } else {
        winnerName = player2Name;
    }

    winnerNameTextRef.innerHTML = `${winnerName} hat gewonnen!`;

    document.getElementById("game_won_dialog_id").classList.remove("d_none");
}