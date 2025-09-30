// main.js

import { garbageCollectionLogic} from './collectionLogic.js';
import { updateCounters2, updateProcessorCounters } from './ui.js';
import { Collector } from './collector.js';
import { processorLogic} from './processorLogic.js';
import { Processor} from './processor.js';
function main() {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer();
    loadSpaceshipModel(scene);
    const spaceship = scene.spaceship;
    console.log(spaceship);
    

    const collector = new Collector();
    collector.initUIListeners();
    const processor = new Processor();
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

    addGarbageCloud(scene, 70, 1, 7000, 0xffffff);

    // ...event listeners...

    //setupEventListeners(collector,procesador,fabricacion);
    let angle = 0;
    const orbitSpeed = 0.001;
    let lastGarbageUpdate = Date.now();

    function gameLoop() {
        // Actualiza la lógica de basura cada 1000 ms (1 segundo)
        const now = Date.now();
        if (now - lastGarbageUpdate > 1000) {
            collector.pasta = garbageCollectionLogic(collector.maximums, collector.pasta,collector.collectionSpeed);
            console.log(processor.processingRatio);
            collector.pasta,processor.materialCounts = processorLogic(collector.pasta, processor.materialCounts, processor.processingRatio,processor.processingSpeed,processor.maximums);
            lastGarbageUpdate = now;
            //collector.pasta = {white:whiteGarbageCount, blue:blueGarbageCount, green:greenGarbageCount, purple:purpleGarbageCount}
            //collector.pasta = [whiteGarbageCount, blueGarbageCount, greenGarbageCount, purpleGarbageCount]
            updateCounters2(collector.pasta);
            console.log(processor.materialCounts);
            updateProcessorCounters(processor.materialCounts);
        }

        // Actualiza la animación cada frame
        angle += orbitSpeed;
        //console.log(spaceship);
        if (scene.spaceship){
        scene.spaceship.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({ color: 0xffffaa });
        }
         });    
        animate(scene, camera, renderer, scene.spaceship, angle);
        }
        requestAnimationFrame(gameLoop);
    }
    gameLoop();

}

// Ejecutar la función principal cuando la página esté cargada

window.onload = main;
