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

    let white = Number(garbageCounts.white).toFixed(0);
    let blue = Number(garbageCounts.blue).toFixed(0);
    let green = Number(garbageCounts.green).toFixed(0);
    let purple = Number(garbageCounts.purple).toFixed(0);

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
}

export function updateProcessorCounters(materialCounts){
    let metal = Number(materialCounts.metal).toFixed(0);
    let organic = Number(materialCounts.organic).toFixed(0);
    let plastic = Number(materialCounts.plastic).toFixed(0);

    metal = metal.toString()
    organic = organic.toString()
    plastic = plastic.toString()

    document.getElementById('metalCount').textContent = `Metal: ${metal}`;
    document.getElementById('organicCount').textContent = `Orgánico: ${organic}`;
    document.getElementById('plasticCount').textContent = `Plástico: ${plastic}`;

}