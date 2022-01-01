import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const gltfLoader = new GLTFLoader()





// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// // Objects
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// // Materials

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color(0xff0000)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)



// Coin sample

// const helmet = new THREE.Group()

// gltfLoader.load('helmet.gltf' ,(gltf)=>{

//     helmet.add(gltf.scene)
//     scene.add(helmet)

//     gui.add(gltf.scene.rotation , 'x').min(0).max(9)
//     gui.add(gltf.scene.rotation , 'y').min(0).max(9)
//     gui.add(gltf.scene.rotation , 'z').min(0).max(9)

//     helmet.position.y = 50
//     helmet.position.z = 190
//     helmet.position.x = 1.3

// })

// gltfLoader.load('scene2.gltf' ,function(model2){

//     let moon = model2.scene.children[0];
//     moon.scale.set(0.1,0.1,0.1);
//     moon.position.set(0,0,0);
//     scene.add(model2.scene)


//     // moon.add(gltf.scene)

//     // scene.add(moon)
//     // moon.scale(0.1,0.1,0.1);
//     // moon.position.set(0,0,0);

//     gui.add(model2.scene.rotation , 'x').min(0).max(9)
//     gui.add(model2.scene.rotation , 'y').min(0).max(9)
//     gui.add(model2.scene.rotation , 'z').min(0).max(9)
    

// })

gltfLoader.load('scene.gltf' ,function(model){

    let whale = model.scene.children[0];
    whale.scale.set(.4,.4,.4);
    whale.position.set(70,60,2);
    scene.add(model.scene)


    // moon.add(gltf.scene)

    // scene.add(moon)
    // moon.scale(0.1,0.1,0.1);
    // moon.position.set(0,0,0);

    gui.add(model.scene.rotation , 'x').min(0).max(9)
    gui.add(model.scene.rotation , 'y').min(0).max(9)
    gui.add(model.scene.rotation , 'z').min(0).max(9)

    const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    whale.rotation.z = -.5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
    

})



// Lights

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = -6
pointLight.position.y = 0
pointLight.position.z = 10
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 6
pointLight.position.y = 4
pointLight.position.z = 34
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 0
pointLight.position.y = 1
pointLight.position.z = 22
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 6
pointLight.position.y = 0
pointLight.position.z = -10
scene.add(pointLight4)

const pointLight5 = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = -6
pointLight.position.y = -4
pointLight.position.z = 34
scene.add(pointLight5)

const pointLight6 = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 0
pointLight.position.y = -1
pointLight.position.z = 22
scene.add(pointLight6)

const pointLight7 = new THREE.DirectionalLight(0xffffff, 2)
pointLight7.position.x = -4
pointLight7.position.y = 1
pointLight7.position.z = 1
scene.add(pointLight7)

const pointLight8 = new THREE.DirectionalLight(0xffffff, 2)
pointLight7.position.x = -10
pointLight7.position.y = -1.78
pointLight7.position.z = 1
scene.add(pointLight8)

gui.add(pointLight8.position , 'y').min(-3).max(3).step(0.01)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 1, 1000)
camera.position.x = 0
camera.position.y = 50
camera.position.z = 200
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha : true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding;



/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // gltf.rotation.y = -.5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()