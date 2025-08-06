// scene.js
function createScene() {  // pasar como argumento de entrada un objeto de configuración general de la escena: planeta, nivel, propiedades, ratios de incremento de recurso ....
    const scene = new THREE.Scene();
    
    // Crear el planeta
    const planetGeometry = new THREE.SphereGeometry(60, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    return scene;
}

function createCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(85, 0, 80);
    // camera.lookAt(0, 0, 80);
    camera.lookAt(0,0,0);

    return camera;
}

function createRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500); // Tamaño del visor 3D
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    return renderer;
}

function createSpaceShip(scene){
    const spaceshipGeometry = new THREE.BoxGeometry(5, 5, 10);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
    scene.add(spaceship);
}

function addGarbageCloud(scene, orbitRadius, cloudSize, cloudDensity, color) {
    const cloudGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors    = [];

    for (let i = 0; i < cloudDensity; i++) {
        const theta =  Math.random() * Math.PI *2;
        const phi = Math.random() * Math.PI /2;
        const radius = Math.random() * orbitRadius;
        // const radius = orbitRadius+5;

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        positions.push(x, y, z);
       // console.log(color);
       // console.log("Colores de la nube de puntos");
      //  console.log(color.r,color.g,color.b);
        colors.push(255,255, 255);
    }

    cloudGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    cloudGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const cloudMaterial = new THREE.PointsMaterial({ size: cloudSize, vertexColors: true });
    const cloud = new THREE.Points(cloudGeometry, cloudMaterial);
    scene.add(cloud);


    // Agregar luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color, intensidad
    scene.add(ambientLight);
}