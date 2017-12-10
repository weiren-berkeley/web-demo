<template>
<div id="arm">
  <div class="container">

      <div class="h3" style="text-align:center; margin-top:80px; margin-bottom:20px;"> Model Predictive Control in Autonomous Driving
      </div>

    <div class="row">
      <div class="col-md-6">
        <div class="threescene border border-primary" v-bind:style="{ width: width+'px', height: height+ 'px' }" id="threetruck"></div>
      </div>
      <div class="col-md-6">
        <div class="threescene border border-primary" v-bind:style="{ width: width+'px', height: height+ 'px' }" id="threetruck2"></div>
      </div>
    </div>
  </div>
  <br><br><br>
</div>
</template>

<script>
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-addons'
const THREE = {...THREEJS, ...THREE_ADDONS}
export default {
  name: 'arm',
  data () {
    return {
      height: 450,
      width: 550,
      msg: 'Welcome to Your Vue.js App',
      render: '',
      uuid: '',
      obj: '',
      index: ''
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.foo()
      this.foo2()
    })
  },
  methods: {
    foo () {
      var scene = new THREE.Scene()
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var aspect = window.innerWidth / window.innerHeight
      var frustumSize = 750
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 10000)
      scene.add(camera)
      var controls = new THREE.OrbitControls(camera, document.getElementById('threeapp'))
      // controls.autoRotate()
      controls.enableZoom = true
      controls.zoomSpeed = 1.0
      // controls.autoRotate = true
      // controls.enableKeys = true
      // controls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
      controls.update()
      camera.position.z = 600
      camera.position.y = 520
      camera.position.x = 620
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(renderer.getSize().width, 255)
      document.getElementById('threeapp').appendChild(renderer.domElement)
      // document.body.appendChild(renderer.domElement)
      // gridHelper
      var gridHelper = new THREE.GridHelper(500, 4, 0x0000ff, 0x808080)
      gridHelper.position.y = -150
      gridHelper.position.x = 150
      gridHelper.position.z = -250
      scene.add(gridHelper)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/scene2.json', function (obj) {
        scene.add(obj)
        scene.children[5].position.y = 320
        scene.children[5].position.z = 100
        scene.children[5].rotation.x = 400
        scene.children[5].rotation.y = 300
        scene.children[5].rotation.z = 100
        // obj.visible = false
        camera.position.z = 400
      })
      // var manager = new THREE.LoadingManager()
      // var loader = new THREE.OBJLoader(manager)
      // loader.load('../static/assembly.obj', function (object) {
      //   object.position.y = -95
      //   console.log(object)
      //   scene.add(object)
      // })
      // var loader = new THREE.ObjectLoader()
      // loader.load('../static/scene2.json', function (geometry, materials) {
      //   var material = THREE.MeshBasicMaterial
      //   var object = new THREE.Mesh(geometry, material)
      //   scene.add(object)
      // })
      // light
      var light = new THREE.AmbientLight(0x255f7c)
      scene.add(light)
      var directionalLight = new THREE.DirectionalLight(0x000001, 0.5)
      scene.add(directionalLight)
      // var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      // hemiLight.color.setHSL(0, 0, 0)
      // hemiLight.groundColor.setHSL(0, 0, 0.75)
      // hemiLight.position.set(0, 5, 0)
      // scene.add(hemiLight)
      // var hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
      // scene.add(hemiLightHelper)
      var light2 = new THREE.DirectionalLight(0x111111, 1)
      light.position.set(1, 1, 1).normalize()
      scene.add(light2)
      scene.background = new THREE.Color().setHSL(6, 0, 1)
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

<style scoped>

</style>
