// controls.js
function animate3(scene, camera, renderer, spaceship, angle) {
    const orbitRadius = 67;
    // Mover la nave en órbita alrededor del planeta
    spaceship.position.x = Math.cos(angle) * orbitRadius;
    spaceship.position.z = Math.sin(angle) * orbitRadius;

    // Renderizar la escena
    renderer.render(scene, camera);
}

function animate(scene, camera, renderer, spaceship, angle) {
    const orbitRadius = 67;

    // Posición de la nave en órbita
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;
    const y = 0; // puedes ajustarlo si quieres inclinar la órbita
    spaceship.position.set(x, y, z);

    // Dirección desde el centro del planeta hacia la nave (normal de la superficie)
    const normal = new THREE.Vector3(x, y, z).normalize();

    // Tangente de la órbita para que la nave “mire hacia adelante”
    // Como la órbita está en XZ, la tangente es perpendicular al radio
    const tangent = new THREE.Vector3(-Math.sin(angle), 0, Math.cos(angle)).normalize();

    // Orientar la nave
    spaceship.up.copy(normal);           // "Arriba" de la nave apunta hacia afuera
    spaceship.lookAt(spaceship.position.clone().add(tangent)); // mirar en dirección tangente

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

/*function createSpaceShip(scene) {
    // Crear la nave espacial
    const spaceshipGeometry = new THREE.BoxGeometry(5, 5, 10);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
    scene.add(spaceship);

    return spaceship;
}*/
