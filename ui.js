//ui.js
// Función para actualizar los contadores en el DOM
let displayed = {
    white: 0,
    blue: 0,
    green: 0,
    purple: 0,
    metal: 0,
    organic: 0,
    plastic: 0
};

function animateValue(element, displayedValue, realValue, prefix = "", suffix = "", step = 1, interval = 20) {
    if (!element) return;
    if (displayedValue === realValue) {
        element.textContent = `${prefix}${realValue}${suffix}`;
        return;
    }
    function update() {
        if (displayedValue < realValue) {
            displayedValue = Math.min(displayedValue + step, realValue);
        } else if (displayedValue > realValue) {
            displayedValue = Math.max(displayedValue - step, realValue);
        }
        element.textContent = `${prefix}${displayedValue}${suffix}`;
        if (displayedValue !== realValue) {
            setTimeout(update, interval);
        }
    }
    update();
}

export function updateCounters(garbageCounts) {
    animateValue(
        document.getElementById('whiteGarbageCount'),
        displayed.white,
        garbageCounts.white,
        "Blanca: "
    );
    animateValue(
        document.getElementById('blueGarbageCount'),
        displayed.blue,
        garbageCounts.blue,
        "Azul: "
    );
    animateValue(
        document.getElementById('greenGarbageCount'),
        displayed.green,
        garbageCounts.green,
        "Verde: "
    );
    animateValue(
        document.getElementById('purpleGarbageCount'),
        displayed.purple,
        garbageCounts.purple,
        "Lila: "
    );
    animateValue(
        document.getElementById('metalCount'),
        displayed.metal,
        garbageCounts.metal ?? 0,
        "Metal: "
    );
    animateValue(
        document.getElementById('organicCount'),
        displayed.organic,
        garbageCounts.organic ?? 0,
        "Orgánico: "
    );
    animateValue(
        document.getElementById('plasticCount'),
        displayed.plastic,
        garbageCounts.plastic ?? 0,
        "Plástico: "
    );

    // Actualiza los valores mostrados para la próxima animación
    displayed.white = garbageCounts.white;
    displayed.blue = garbageCounts.blue;
    displayed.green = garbageCounts.green;
    displayed.purple = garbageCounts.purple;
    displayed.metal = garbageCounts.metal ?? 0;
    displayed.organic = garbageCounts.organic ?? 0;
    displayed.plastic = garbageCounts.plastic ?? 0;
}



export function updateCounters2(garbageCounts) {
    let white = garbageCounts.white;
    let blue = garbageCounts.blue;
    let green = garbageCounts.green;
    let purple = garbageCounts.purple;
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

