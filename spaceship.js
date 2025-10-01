// spaceship.js
class SpaceShip {
    constructor() {
        // Inicializar los módulos de la nave: colector, procesador, herramienta
        this.garbageCollector = new GarbageCollector();
        this.processor = new Processor();
        this.fabricationTool = new FabricationTool();
        // Otras propiedades y métodos relacionados con la nave
        this.numEnergyCores = 1;
    }
}

class GarbageCollector {
    constructor() {
        // Inicializar propiedades del colector de basura
    }

    upgradeCollector() {
        // Método para mejorar el colector de basura
    }

    // Otros métodos relacionados con el colector de basura
}

class Processor{
    constructor(){
        // hola
    }
    upgradeProcessor(){
        // bye bye
    }
}

class FabricationTool{
    constructor(){

    }
    upgradeFabricationTool(){

    }
}
