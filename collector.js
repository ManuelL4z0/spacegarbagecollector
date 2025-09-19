//collector.js
export class Collector {
    constructor() {
        this.level = 1;
        this.collectionSpeed = 1; // Velocidad inicial muy baja
        this.whiteCollectionFactor = 1;
        this.blueCollectionFactor = 1;
        this.greenCollectionFactor = 1;
        this.purpleCollectionFactor = 1;
        this.maximums = {white:10, blue:5, green:0, purple:0}; // [maxWhite, maxBlue, maxGreen, maxPurple]
        this.maxWhiteUpgradeCost = 9;
        this.speedWhiteUpgradeCost = 5;
        this.pasta = {white:0, blue:0, green:0, purple:0}
        this.collectionSpeed = {white:1,blue:1e-3,green:0,purple:0}
        // ...otros atributos...
    }

    upgradeMaxWhite() {
        //this.level++;
        //this.collectionSpeed += 0.2;
        this.maximums.white = Math.floor(this.maximums.white*1.5)
        this.maxWhiteUpgradeCost = Math.floor(this.maxWhiteUpgradeCost * 1.5);
        this.updateUpgradeButtons();
    }

    upgradeSpeedWhite() {
        this.collectionSpeed.white += 0.5;
        this.speedWhiteUpgradeCost = Number(this.speedWhiteUpgradeCost * 1.05).toFixed(2);
        //this.collectionSpeed.white = Math.log(this.collectionSpeed.white + 1) + 1;
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
                if (this.pasta.white >= this.maxWhiteUpgradeCost ){
                    this.pasta.white -= this.maxWhiteUpgradeCost; // Descuenta el costo
                    console.log(this.pasta)
                    this.upgradeMaxWhite();
                }
            });
        }
        const speedBtn = document.getElementById('upgradeCollectorSpeedWhiteBtn');
        if (speedBtn) {
            speedBtn.addEventListener('click', () => {
                if (this.pasta.white >= this.speedWhiteUpgradeCost ){
                    this.pasta.white -= this.speedWhiteUpgradeCost; // Descuenta el costo
                    this.upgradeSpeedWhite();
                }
            });
        }
    }

    updateUpgradeButtons() {
        const maxBtn = document.getElementById('upgradeCollectorMaxWhiteBtn');
        if (maxBtn) {
            maxBtn.textContent = `Mejora Max Blanca ${this.maxWhiteUpgradeCost}/${this.maximums.white}`;
        }
        const speedBtn = document.getElementById('upgradeCollectorSpeedWhiteBtn');
        if (speedBtn) {
            speedBtn.textContent = `Mejora Velocidad Blanca ${this.speedWhiteUpgradeCost}/${this.collectionSpeed.white.toFixed(1)}`;
        }
    }

}