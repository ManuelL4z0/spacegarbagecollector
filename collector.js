//collector.js
export class Collector {
    constructor() {
        this.level = 1;
        this.collectionSpeed = 1;
        this.whiteCollectionFactor = 1;
        this.blueCollectionFactor = 1;
        this.greenCollectionFactor = 1;
        this.purpleCollectionFactor = 1;
        this.maximums = [10,5,0,0,0]; // [maxWhite, maxBlue, maxGreen, maxPurple]
        this.maxWhiteUpgradeCost = 10;
        this.pasta = []
        // ...otros atributos...
    }

    upgradeMaxWhite() {
        //this.level++;
        this.collectionSpeed += 0.2;
        this.maximums[0] = Math.floor(this.maximums[0]*1.5)
        this.maxWhiteUpgradeCost = Math.floor(this.maxWhiteUpgradeCost * 1.5);
        this.updateUpgradeButtons();
    }

    collect(currentGarbageCloud, planet) {
        // Devuelve los materiales recolectados
    }

    initUIListeners() {
    const maxBtn = document.getElementById('upgradeCollectorMaxWhiteBtn');
    if (maxBtn) {
        maxBtn.addEventListener('click', () => {
            console.log(this.pasta)
            if (this.pasta[0] >= this.maxWhiteUpgradeCost ){
                this.upgradeMaxWhite();
            }
        });
    }

    const speedBtn = document.getElementById('upgradeCollectorSpeedWhiteBtn');
    if (speedBtn) {
        speedBtn.addEventListener('click', () => {
            // this.upgradeWhiteSpeed();
        });
    }
}

    updateUpgradeButtons() {
        const maxBtn = document.getElementById('upgradeCollectorMaxWhiteBtn');
        if (maxBtn) {
            maxBtn.textContent = `Mejora Max Blanca (${this.maxWhiteUpgradeCost})`;
        }
        const speedBtn = document.getElementById('upgradeCollectorSpeedWhiteBtn');
        /*if (speedBtn) {
            speedBtn.textContent = `Mejora Velocidad Blanca (${this.speedWhiteUpgradeCost})`;
        }*/
    }

}