<template>
<div id="threeapp" class = "threeapp2">
</div>
</template>

<script>
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-addons'
const THREE = {...THREEJS, ...THREE_ADDONS}
export default {
  name: 'three',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.foo()
  },
  methods: {
    foo () {
      var scene = new THREE.Scene()
      var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      scene.add(camera)
      var controls = new THREE.OrbitControls(camera)
      controls.enableZoom = true
      // controls.autoRotate = true
      controls.update()
      camera.position.z = 800
      camera.position.y = 50
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      document.getElementById('threeapp').appendChild(renderer.domElement)
      // document.body.appendChild(renderer.domElement)
      // gridHelper
      var gridHelper = new THREE.GridHelper(1000, 30, 0x0000ff, 0x808080)
      gridHelper.position.y = -150
      gridHelper.position.x = -150
      scene.add(gridHelper)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/scene.json', function (obj) {
        scene.add(obj)
        console.log(obj)
        camera.position.z = 400
      })
      // var manager = new THREE.LoadingManager()
      // var loader = new THREE.OBJLoader(manager)
      // loader.load('../static/arm1.obj', function (object) {
      //   object.position.y = -95
      //   scene.add(object)
      // })
      // var loader = new THREE.ObjectLoader()
      // loader.load('../static/scene2.json', function (geometry, materials) {
      //   var material = THREE.MeshBasicMaterial
      //   var object = new THREE.Mesh(geometry, material)
      //   scene.add(object)
      // })
      // light
      var light = new THREE.AmbientLight(0x000000)
      scene.add(light)
      var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      hemiLight.color.setHSL(0, 0, 0)
      hemiLight.groundColor.setHSL(0, 0, 0.75)
      hemiLight.position.set(0, 50, 0)
      scene.add(hemiLight)
      var hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
      scene.add(hemiLightHelper)
      scene.background = new THREE.Color().setHSL(0.6, 0, 1)
      var animate = function () {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
