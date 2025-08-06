// controls.js
function animate(scene, camera, renderer, spaceship, angle) {
    const orbitRadius = 67;

    // Mover la nave en órbita alrededor del planeta
    spaceship.position.x = Math.cos(angle) * orbitRadius;
    spaceship.position.z = Math.sin(angle) * orbitRadius;

    // Renderizar la escena
    renderer.render(scene, camera);
}



function animate2(scene, camera, renderer, spaceship) {
    const orbitRadius = 67;
    const orbitSpeed = 0.01;
    let angle = 0;

    function animateFrame() {
        //requestAnimationFrame(animateFrame);

        // Mover la nave en órbita alrededor del planeta
        spaceship.position.x = Math.cos(angle) * orbitRadius;
        spaceship.position.z = Math.sin(angle) * orbitRadius;

        // Incrementar el ángulo para la siguiente posición en la órbita
        angle += orbitSpeed;

        // Renderizar la escena
        renderer.render(scene, camera);
    }
    animateFrame();
}

function createSpaceShip(scene) {
    // Crear la nave espacial
    const spaceshipGeometry = new THREE.BoxGeometry(5, 5, 10);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
    scene.add(spaceship);

    return spaceship;
}
