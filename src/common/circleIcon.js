/**
 * @param color {string}
 * @param radius {number}
 * @param color2 {string}
 * @param radius2 {number}
 */
export function circleIcon(color, radius, color2 = '#000', radius2 = 0) {
    const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="${radius * 2}" height="${
        radius * 2
    }" viewBox="0 0 ${radius * 2} ${radius * 2}">
        <circle fill="${color}" cx="${radius}" cy="${radius}" r="${radius}"/>
        <circle fill="${color2}" cx="${radius}" cy="${radius}" r="${radius2}"/>
    </svg>`;
    return `data:image/svg+xml;base64,${btoa(icon)}`;
}
