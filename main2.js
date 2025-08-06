// main.js
function main() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500); // Tamaño del visor 3D
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Crear el planeta
    const planetGeometry = new THREE.SphereGeometry(60, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Crear la nave espacial
    const spaceshipGeometry = new THREE.BoxGeometry(5, 5, 10);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
    scene.add(spaceship);

    // Posicionar la nave en una órbita inicial
    const orbitRadius = 67;
    const orbitSpeed = 0.01;
    let angle = 0;

    // Bucle principal del juego
    function animate() {
        requestAnimationFrame(animate);

        // Mover la nave en órbita alrededor del planeta
        spaceship.position.x = Math.cos(angle) * orbitRadius;
        spaceship.position.z = Math.sin(angle) * orbitRadius;

        // Orientar la cámara para que siga a la nave
        // camera.position.x = spaceship.position.x;
        // camera.position.z = spaceship.position.z + 100;
        camera.position.x = 85;
        // camera.position.z = 80;
        // camera.position.y = 80;
        camera.lookAt(0,0,80);

       // camera.lookAt(planet.position);

        // Incrementar el ángulo para la siguiente posición en la órbita
        angle += orbitSpeed;

        // Renderizar la escena
        renderer.render(scene, camera);
    }
    animate();

    // Event listeners para los botones de mejora
    document.getElementById('upgradeCollectorBtn').addEventListener('click', () => {
        // Lógica para mejorar el colector de basura
    });

    document.getElementById('upgradeProcessorBtn').addEventListener('click', () => {
        // Lógica para mejorar el procesador
    });

    document.getElementById('upgradeToolBtn').addEventListener('click', () => {
        // Lógica para mejorar la herramienta de fabricación
    });
}

// Ejecutar la función principal cuando la página esté cargada
window.onload = main;
