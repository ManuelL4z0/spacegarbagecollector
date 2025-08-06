//collectionLogic.js
// Función para gestionar la lógica de recolección
function collectGarbage(shipCharacteristics, currentGarbageCloud, planet) {
    // Calcular la velocidad de recolección basada en las características de la nave
    const collectionSpeed = shipCharacteristics.collectionSpeed;

    // Calcular la probabilidad de adquirir cada material
    const whiteProbability = currentGarbageCloud.whiteDensity * planet.whiteDensity * shipCharacteristics.whiteCollectionFactor;
    const blueProbability = currentGarbageCloud.blueDensity * planet.blueDensity * shipCharacteristics.blueCollectionFactor;
    const greenProbability = currentGarbageCloud.greenDensity * planet.greenDensity * shipCharacteristics.greenCollectionFactor;
    const purpleProbability = currentGarbageCloud.purpleDensity * planet.purpleDensity * shipCharacteristics.purpleCollectionFactor;

    // Simular la recolección de basura
    const collectedMaterials = {
        white: Math.random() < whiteProbability ? 1 : 0,
        blue: Math.random() < blueProbability ? 1 : 0,
        green: Math.random() < greenProbability ? 1 : 0,
        purple: Math.random() < purpleProbability ? 1 : 0
    };

    // Retornar los materiales recolectados
    return collectedMaterials;
}




export let whiteGarbageCount = 0;
export let blueGarbageCount = 0;
export let greenGarbageCount = 0;
export let purpleGarbageCount = 0;

export function garbageCollectionLogic(maximums) {
    let maxWhite = maximums.white;
    let maxBlue  = maximums.blue;
    let maxGreen = maximums.green;
    let maxPurple = maximums.purple;
    // Lógica para actualizar los contadores de basura
    whiteGarbageCount += Math.floor(Math.random() * Math.floor(Math.random() * maxWhite));
    blueGarbageCount  += Math.floor(Math.random() * Math.floor(Math.random() * maxBlue));
    greenGarbageCount += Math.floor(Math.random() * Math.floor(Math.random() * maxGreen));
    purpleGarbageCount += Math.floor(Math.random() * Math.floor(Math.random() * maxPurple));

    whiteGarbageCount = Math.min(whiteGarbageCount, maxWhite);
    blueGarbageCount  = Math.min(blueGarbageCount, maxBlue);
    greenGarbageCount = Math.min(greenGarbageCount, maxGreen);
    purpleGarbageCount = Math.min(purpleGarbageCount, maxPurple);
}