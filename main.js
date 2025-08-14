// main.js

import { garbageCollectionLogic} from './collectionLogic.js';
import { updateCounters } from './ui.js';
import { Collector } from './collector.js';
function main() {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer();
    const spaceship = createSpaceShip(scene);

    const collector = new Collector();
    collector.initUIListeners();
    const procesador = "hola";
    const fabricacion = "hola";


    const width = window.innerWidth * 0.25;
    const height = width;
    renderer.setSize(width, height);
    camera.aspect = 1;
    camera.updateProjectionMatrix();

    function onWindowResize() {
        const width = window.innerWidth * 0.25;
        const height = width;
        renderer.setSize(width, height);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onWindowResize);

    addGarbageCloud(scene, 70, 1, 700, 0xffffff);

    // ...event listeners...

    //setupEventListeners(collector,procesador,fabricacion);
    let angle = 0;
    const orbitSpeed = 0.01;
    let lastGarbageUpdate = Date.now();

    function gameLoop() {
        // Actualiza la lógica de basura cada 1000 ms (1 segundo)
        const now = Date.now();
        if (now - lastGarbageUpdate > 1000) {
            collector.pasta = garbageCollectionLogic(collector.maximums, collector.pasta);
            lastGarbageUpdate = now;
            //collector.pasta = {white:whiteGarbageCount, blue:blueGarbageCount, green:greenGarbageCount, purple:purpleGarbageCount}
            //collector.pasta = [whiteGarbageCount, blueGarbageCount, greenGarbageCount, purpleGarbageCount]
            updateCounters(collector.pasta);
        }

        // Actualiza la animación cada frame
        angle += orbitSpeed;
        animate(scene, camera, renderer, spaceship, angle);

        requestAnimationFrame(gameLoop);
    }
    gameLoop();

}

// Ejecutar la función principal cuando la página esté cargada

window.onload = main;
