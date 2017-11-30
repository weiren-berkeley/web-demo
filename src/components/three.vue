<template>
  <body>
  </body>
</template>

<script>
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-js'
const THREE = {...THREEJS, ...THREE_ADDONS}
// import OrbitControls from "./src/assets/js/OrbitControls.js"
// require('./src/assets/js/OrbitControls.js')
// export {OrbitControls} from './src/assets/js/OrbitControls.js'
// import * as OrbitControls from './src/assets/js/OrbitControls.js'
// require('imports-loader?THREE=three!./src/assets/js/OrbitControls.js');
// import THREELib from 'three-js'
// var THREE = THREELib()
export default {
  name: 'three',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

var scene = new THREE.Scene()
// var camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000)
var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// var helper = new THREE.CameraHelper(camera)
// var controls = new THREE.OrbitControls(camera)
 // camera.position.set(0, 0, 100)
// controls.update()
var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
document.body.appendChild(renderer.domElement)
var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
var cube = new THREE.Mesh(geometry, material)
// scene.add(cube)
var objectLoader = new THREE.ObjectLoader()
objectLoader.load('../static/scene.json', function (obj) {
// objectLoader.load('../static/audioptimised02-threejs/audioptimised02.json', function (obj) {
// objectLoader.load('/static/logo.png', function (obj) {

  scene.add(obj)
})
var light = new THREE.AmbientLight(0x404040)
scene.add(light)
camera.position.z = 800
camera.position.y = 50

var animate = function () {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  // controls.update()
  renderer.render(scene, camera)
}

animate()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body { margin: 0; }
canvas { width: 80%; height: 80% }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
