let fields = [
    null,
    null,
    "circle",
    null,
    "cross",
    null,
    null,
    null,
    null,
]

function render() {
    let content = '<table class="tictactoe_table">';

    for (let i = 0; i < 3; i++) {
        content += '<tr>';

        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';
            let className = '';

            if (fields[index] === "circle") {
                symbol = 'O';
                className = 'circle';
            } else if (fields[index] === "cross") {
                symbol = 'X';
                className = 'cross';
            }

            content += `<td class="${className}">${symbol}</td>`;
        }

        content += '</tr>';
    }

    content += '</table>';

    document.getElementById("tictactoe_table_id").innerHTML = content;
}