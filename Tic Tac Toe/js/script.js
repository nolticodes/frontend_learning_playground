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

            if (fields[index] === "circle") {
                symbol = generateCircleSVG();
            } else if (fields[index] === "cross") {
                symbol = generateCrossSVG();
            }

            content += `<td>${symbol}</td>`;
        }

        content += '</tr>';
    }

    content += '</table>';

    document.getElementById("tictactoe_table_id").innerHTML = content;
}

function generateCircleSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70">
            <circle
                cx="35"
                cy="35"
                r="30"
                fill="none"
                stroke="#3498db"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="188.5"
                stroke-dashoffset="188.5">
                <animate
                    attributeName="stroke-dashoffset"
                    from="188.5"
                    to="0"
                    dur="0.5s"
                    fill="freeze" />
            </circle>
        </svg>
    `;
}

function generateCrossSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70">
            <line
                x1="20"
                y1="20"
                x2="50"
                y2="50"
                stroke="#e74c3c"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="42.5"
                stroke-dashoffset="42.5">
                <animate
                    attributeName="stroke-dashoffset"
                    from="42.5"
                    to="0"
                    dur="0.25s"
                    fill="freeze" />
            </line>

            <line
                x1="50"
                y1="20"
                x2="20"
                y2="50"
                stroke="#e74c3c"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="42.5"
                stroke-dashoffset="42.5">
                <animate
                    attributeName="stroke-dashoffset"
                    from="42.5"
                    to="0"
                    dur="0.25s"
                    begin="0.25s"
                    fill="freeze" />
            </line>
        </svg>
    `;
}