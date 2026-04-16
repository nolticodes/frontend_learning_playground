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
                x1="12"
                y1="12"
                x2="58"
                y2="58"
                stroke="#e74c3c"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray="65.1"
                stroke-dashoffset="65.1">
                <animate
                    attributeName="stroke-dashoffset"
                    from="65.1"
                    to="0"
                    dur="0.25s"
                    fill="freeze" />
            </line>

            <line
                x1="58"
                y1="12"
                x2="12"
                y2="58"
                stroke="#e74c3c"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray="65.1"
                stroke-dashoffset="65.1">
                <animate
                    attributeName="stroke-dashoffset"
                    from="65.1"
                    to="0"
                    dur="0.25s"
                    begin="0.25s"
                    fill="freeze" />
            </line>
        </svg>
    `;
}