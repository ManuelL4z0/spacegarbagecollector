export function processorLogic(garbageCounts, materialCounts, garbageProcessingRatios, processingSpeed, maximums) {

    let maxPlastic = maximums.plastic;
    let maxMetal  = maximums.metal;

    // Lógica para actualizar los contadores de basura procesada
    let whiteAmountToProcess = garbageProcessingRatios.white * processingSpeed.white;
    let blueAmountToProcess  = Math.round(garbageProcessingRatios.blue  * processingSpeed.blue);
    console.log(whiteAmountToProcess,blueAmountToProcess);
    if (garbageCounts.white < whiteAmountToProcess){whiteAmountToProcess = garbageCounts.white}
    if (garbageCounts.blue  < blueAmountToProcess) {blueAmountToProcess  = garbageCounts.blue}

    if (materialCounts.plastic + whiteAmountToProcess > maxPlastic){whiteAmountToProcess = maxPlastic - materialCounts.plastic}
    garbageCounts.white -= whiteAmountToProcess;
    garbageCounts.blue  -= blueAmountToProcess;
    //materialCounts.metal += Math.min(materialCounts.metal + whiteAmountToProcess, maxWhite);

    materialCounts.plastic = Math.min(materialCounts.plastic+whiteAmountToProcess, maxPlastic);
    materialCounts.metal   = Math.min(materialCounts.metal+blueAmountToProcess, maxMetal);
    
    return garbageCounts,materialCounts;
}

