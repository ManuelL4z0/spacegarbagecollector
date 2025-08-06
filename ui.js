//ui.js
// Función para actualizar los contadores en el DOM
export function updateCounters(white,blue,green,purple) {
    white = white.toString()
    //white = white1[1];
    blue = blue.toString()
    //blue = blue1[1];
    green = green.toString()
    //green = green1[1];
    purple = purple.toString()
    //purple = purple1[1];
    console.log(white)
    document.getElementById('whiteGarbageCount').textContent = `Blanca: ${white}`;
    document.getElementById('blueGarbageCount').textContent = `Azul: ${blue}`;
    document.getElementById('greenGarbageCount').textContent = `Verde: ${green}`;
    document.getElementById('purpleGarbageCount').textContent = `Lila: ${purple}`;
    document.getElementById('metalCount').textContent = `Metal: ${metalCount}`;
    document.getElementById('organicCount').textContent = `Orgánico: ${organicCount}`;
    document.getElementById('plasticCount').textContent = `Plástico: ${plasticCount}`;
}