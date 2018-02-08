<template>
<div id="arm">
  <div class="container">
      <div class="h3" style="text-align:center; margin-top:30px; margin-bottom:20px;"> Robotic Arm
      </div>
      <div class="h5" style="text-align:center;">
        {{msg}}
      </div>

    <div class="row">
      <div class="col-md-9">
        <div id="info">Drag to Control Camera</div>
        <div class="threescene border border-primary" v-bind:style="{ width: width+'px', height: height+ 'px' }" id="roboticArm"></div>
      </div>
      <div class="col-md-2" style="text-align:center;">
        <div class="h6" style="text-align:center;">
          Drag to Control Robotic Arm
        </div>
        <br>
        <input type="range" min="0" max="6.2831852" step="0.01" v-model="angle1"/>
        <br>
        Angle1:<br>
        {{angle1}}
        <br><br><br>
        <input type="range" min="-1" max="1" step="0.01" v-model="angle2"/>
        <br>
        Angle2:<br>
        {{angle2}}
        <br><br><br>
        <input type="range" min="-1.25" max="0.75" step="0.01" v-model="angle3"/>
        <br>
        Angle3:<br>
        {{angle3}}
        <br><br><br>
        <div class="col-auto">
          <label class="custom-control custom-checkbox mb-2 mr-sm-2">
            <input type="checkbox" class="custom-control-input" v-model="checkbox">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Auto Run</span>
          </label>
        </div>
        <!-- <br><br><br>
        <input type="range" min="-1" max="0.75" step="0.01" v-model="angle4"/>
        <br> -->
        <!-- Angle4:
        {{angle4}}
        <br>
        matrix: {{matrix}}
        <input type="range" min="100.1415926" max="300.1415926" step="0.01" v-model="bias"/>
        <br>
        {{bias}}
        <br>
        <input type="range" min="200.1415926" max="300.1415926" step="0.01" v-model="bias2"/>
        <br>
        {{bias2}} -->
      </div>

    </div>
  </div>
  <br>
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
      msg: '3D model is loading...',
      render: '',
      uuid: '',
      obj: '',
      checkbox: true,
      angle1: 0,
      angle2: 0,
      angle3: 0,
      angle4: 0,
      range2p1: 0,
      range2p2: 0,
      bias: 200,
      bias2: 200,
      matrix: '',
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
      var frustumSize = 450
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 10000)
      scene.add(camera)
      // camera.lookAt(new THREE.Vector3(100,100,100))
      var controls = new THREE.OrbitControls(camera, document.getElementById('roboticArm'))
      // controls.autoRotate()
      controls.enableZoom = true
      controls.zoomSpeed = 1.0
      // controls.autoRotate = true
      // controls.enableKeys = true
      controls.enablePan = true
      // controls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
      controls.update()
      camera.position.z = 600
      camera.position.y = 520
      camera.position.x = 620
      var renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(this.width - 2, this.height - 2)
      document.getElementById('roboticArm').appendChild(renderer.domElement)
      scene.background = new THREE.Color().setHSL(6, 0, 1)
      renderer.render(scene, camera)
      // document.body.appendChild(renderer.domElement)
      // gridHelper
      var gridHelper = new THREE.GridHelper(400, 8, 0x0000ff, 0x808080)
      gridHelper.position.y = -100
      // gridHelper.position.x = 150
      // gridHelper.position.z = -250
      scene.add(gridHelper)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/assembly.json', (obj) => {
        scene.add(obj)
        console.log(scene)
        scene.children[2].position.y = -100
        this.msg = ''
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
      // var plane = new THREE.Plane( new THREE.Vector3( 0, 0, 0 ), 3 );
      // plane.receiveShadow = true;
      // var helper = new THREE.PlaneHelper( plane, 500, 0x7777ff );
      // var groundGeometry = new THREE.PlaneGeometry(100, 200, 20, 20);
      //   var groundMaterial = new THREE.MeshBasicMaterial({color: 0xfffff0});
      //   var ground = new THREE.Mesh(groundGeometry, groundMaterial);
      //   ground.receiveShadow = true;
      //   ground.rotation.x = -0.5 * Math.PI;
      //   scene.add(ground);
      // scene.add( helper );
      var animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        if (this.checkbox === true) {
          this.angle1 = this.angle1 % 100
          this.angle1 += 0.007
          this.angle1 = this.angle1 % (2 * 3.1415926)
          this.angle2 = this.angle2 % 100
          this.range2p1 += 0.02
          this.range2p1 = this.range2p1 % (2 * 3.1415926)
          this.angle2 = Math.sin(this.range2p1)
          this.angle3 = this.angle3 % 100
          this.range2p2 -= 0.013
          this.range2p2 = this.range2p2 % (2 * 3.1415926)
          this.angle3 = Math.sin(this.range2p2) - 0.25
        } else {
          this.range2p1 = Math.asin(this.angle2 % 100) % 100
          this.range2p2 = Math.asin((this.angle3 % 100 + 0.25) % 100) % 100
        }

        scene.children[2].children[0].children[0].children[1].rotation.y = this.angle1
        this.matrix = scene.children[2].children[0].children[0].children[1].matrixWorld
        scene.children[2].children[0].children[0].children[1].children[1].rotation.x = this.angle2
        scene.children[2].children[0].children[0].children[1].children[1].position.y = (1 - Math.cos(this.angle2)) * 73.2715926
        scene.children[2].children[0].children[0].children[1].children[1].position.z = -Math.sin(this.angle2) * 73.2715926
        scene.children[2].children[0].children[0].children[1].children[1].children[0].rotation.x = this.angle3
        scene.children[2].children[0].children[0].children[1].children[1].children[0].position.y = (1 - Math.cos(this.angle3)) * 200
        scene.children[2].children[0].children[0].children[1].children[1].children[0].position.z = -Math.sin(this.angle3) * 200
        scene.children[2].children[0].children[0].children[1].children[1].children[0].children[1].rotation.x = this.angle4
        this.matrix = scene.children[2].children[0].children[0].children[1].children[1].children[0].children[1].matrixWorld
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style scoped>
#info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}
</style>
