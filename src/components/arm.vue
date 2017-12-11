<template>
<div id="arm">
  <div class="container">
      <div class="h3" style="text-align:center; margin-top:30px; margin-bottom:20px;"> Robotic Arm
      </div>
    <div class="row">

      <div class="col-md-9">
        <div class="threescene border border-primary" v-bind:style="{ width: width+'px', height: height+ 'px' }" id="roboticArm"></div>
      </div>
      <div class="col-md-2">
        <input type="range" min="-3.1415926" max="3.1415926" step="0.01" v-model="angle1"/>
        <br>
        Angle:
        {{angle1}}
        <br><br><br>
        <input type="range" min="-1" max="1" step="0.01" v-model="angle2"/>
        <br>
        Angle2:
        {{angle2}}
        <br><br><br>
        <input type="range" min="-1" max="0.75" step="0.01" v-model="angle3"/>
        <br>
        Angle3:
        {{angle3}}
        <br><br><br>
        <input type="range" min="-1" max="0.75" step="0.01" v-model="angle4"/>
        <br>
        Angle4:
        {{angle4}}
        <br>
        <!-- <input type="range" min="50.1415926" max="300.1415926" step="0.01" v-model="bias"/>
        <br>
        {{bias}}
        <br>
        <input type="range" min="-50.1415926" max="75.1415926" step="0.01" v-model="bias2"/>
        <br>
        {{bias2}} -->
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
      height: 550,
      width: 800,
      msg: 'Welcome to Your Vue.js App',
      render: '',
      uuid: '',
      obj: '',
      angle1: 0,
      angle2: 0,
      angle3: 0,
      angle4: 0,
      bias: 0,
      bias2: 0,
      index: ''
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.foo()
    })
  },
  methods: {
    foo () {
      var scene = new THREE.Scene()
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var aspect = this.width / this.height
      var frustumSize = 550
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 10000)
      scene.add(camera)
      var controls = new THREE.OrbitControls(camera, document.getElementById('roboticArm'))
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
      renderer.setSize(this.width - 2, this.height - 2)
      document.getElementById('roboticArm').appendChild(renderer.domElement)
      // document.body.appendChild(renderer.domElement)
      // gridHelper
      var gridHelper = new THREE.GridHelper(400, 8, 0x0000ff, 0x808080)
      // gridHelper.position.y = -150
      // gridHelper.position.x = 150
      // gridHelper.position.z = -250
      scene.add(gridHelper)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/assembly.json', function (obj) {
        scene.add(obj)
        console.log(scene)
        animate()
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
      // var light = new THREE.AmbientLight(0xff0000)
      // scene.add(light)
      // var directionalLight = new THREE.DirectionalLight(0x000001, 0.5)
      // scene.add(directionalLight)
      // var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      // hemiLight.color.setHSL(0, 0, 0)
      // hemiLight.groundColor.setHSL(0, 0, 0.75)
      // hemiLight.position.set(0, 5, 0)
      // scene.add(hemiLight)
      // var hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10)
      // scene.add(hemiLightHelper)
      // var light2 = new THREE.DirectionalLight(0x111111, 1)
      // light.position.set(1, 1, 1).normalize()
      // scene.add(light2)
      scene.background = new THREE.Color().setHSL(6, 0, 1)
      var animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        scene.children[2].children[0].children[0].children[1].rotation.y = this.angle1
        // scene.children[5].children[0].children[0].visible = false
        scene.children[2].children[0].children[0].children[1].children[1].rotation.x = this.angle2
        scene.children[2].children[0].children[0].children[1].children[1].position.y = (1 - Math.cos(this.angle2)) * 73.2715926
        scene.children[2].children[0].children[0].children[1].children[1].position.z = -Math.sin(this.angle2) * 73.2715926

        scene.children[2].children[0].children[0].children[1].children[1].children[0].rotation.x = this.angle3
        // scene.children[2].children[0].children[0].children[1].children[1].children[0].position.x = -Math.sin(this.angle3) * this.bias2
        scene.children[2].children[0].children[0].children[1].children[1].children[0].position.y = (1 - Math.cos(this.angle3)) * 200
        scene.children[2].children[0].children[0].children[1].children[1].children[0].position.z = -Math.sin(this.angle3) * 200
        scene.children[2].children[0].children[0].children[1].children[1].children[0].children[1].rotation.x = this.angle4
        // scene.children[2].children[0].children[0].children[1].children[1].children[0].children[1].position.y = (1 - Math.cos(this.angle4)) * 200
        // scene.children[2].children[0].children[0].children[1].children[1].children[0].children[1].position.z = -Math.sin(this.angle4) * 200

        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style scoped>

</style>
