<template>
  <div id="start">
      <div class="container" style="padding:2rem;">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <p class="h4 text-center">Start Your New Project</p>
            <br>
          </div>
        </div>
        <div class="row">
         <div class="col-md-2">
           <div class="list-group">
             <b-btn class="list-group-item list-group-item-action disabled">Program Tools</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-success" @click="insert('Integer')">Integer</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-success" @click="insert('String')">String</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-success" @click="insert('Boolean')">Boolean</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-success" @click="insert('Array')">Array</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-warning" @click="insert('For')">For Loop</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-warning" @click="insert('While')">While Loop</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-info" @click="insert('If')">If Condition</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-info" @click="insert('Case')">Case Condition</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-dark" @click="insert('Function')">Function</b-btn>
             <b-btn class="list-group-item list-group-item-action list-group-item-dark" @click="insert('Sort')">Sort Function</b-btn>
          </div>
         </div>
         <div class="col-md-6 border border-warning">
           <div class="row alert alert-secondary">
            <div class="col-md-4">
              <img src="../assets/img/check.png" @click="check()" class="rounded-circle" style="height: 50px; width: 50px;">
              <a>Check</a>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/run.png" @click="run()" class="rounded-circle" style="height: 50px; width: 50px;">
              <a>Run</a>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/download.png" @click="download()" class="rounded-circle" style="height: 50px; width: 50px;">
              <a>Download</a>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Code Area</label>
            <textarea class="form-control" rows="9" v-model="program"></textarea>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="text-danger" v-text="msgError"></div>
              <div class="text-warning" v-text="msgWarning"></div>
              <br>
              <button class="btn btn-sm" @click="showFaceFunction()" v-if="showError"> Get help</button>
            </div>
            <div class="col-md-4" v-if="showFace">
                <img src="../assets/img/show.gif" class="img-fluid">
            </div>
          </div>
         </div>

         <div class="col-md-4">
           <div class="threescene border border-primary" v-bind:style="{ width: width+'px', height: height+ 'px' }" id="threeapp"></div>
           <div v-if="showFace" class="threescene border border-primary" style="height:263px;width:100%;margin:1rem 0 0 0;">
             <div class="embed-responsive embed-responsive-4by3">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KgIXPSYtShE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
             </div>
           </div>
           <div v-if="showResult" id="threeapp2" class="threescene border border-primary" style="text-align:center;height:263px;width:100%;margin:1rem 0 0 0;">
              <img src="../assets/img/grid2.png" v-bind:style="{ width: width+'px'}" style="height:100%;"class="img-fluid" />
           </div>
         </div>
       </div>
      </div>
      <!-- <audio id="bgMusic" src="/static/message.mp3">
      </audio> -->
  </div>
</template>
<script>
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-addons'
const THREE = {...THREEJS, ...THREE_ADDONS}
export default {
  name: 'start',
  data () {
    return {
      msgError: '',
      msgWarning: '',
      showError: false,
      showFace: false,
      showResult: false,
      variable: '',
      condition: '',
      functions: '',
      program: '',
      height: 260,
      width: 337,
      msg: '3D model is loading...',
      render: '',
      uuid: '',
      obj: '',
      checkbox: false,
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
    this.foo()
  },
  methods: {
    download () {
    },
    showFaceFunction () {
      this.showFace = !this.showFace
      this.showResult = false
    },
    check () {
      this.msgError = 'Error: Undefined function or variable a.'
      this.msgWarning = 'Warning: [WDS] Warnings while compiling.'
      this.showError = true
      // var audio = document.getElementById('bgMusic')
      // audio.play()
    },
    run () {
      this.showResult = true
      this.showFace = false
      this.checkbox = !this.checkbox
    },
    insert (text) {
      switch (text) {
        case 'Integer':
          this.program += 'Integer i = 0;' + '\n'
          break
        case 'String':
          this.program += 'String text;' + '\n'
          break
        case 'Boolean':
          this.program += 'Boolean condition = true;' + '\n'
          break
        case 'Array':
          this.program += 'Array t = new Array[];' + '\n'
          break
        case 'For':
          this.program += 'for (int i = 0; i < 100; i ++) {\n}' + '\n'
          break
        case 'While':
          this.program += 'while (i <= 100) {\n}' + '\n'
          break
        case 'If':
          this.program += 'if (i > 100) {\n}' + '\n'
          break
        case 'Case':
          this.program += 'switch (text) {\n  case 1:\n  break\n  case 2:\n  break\n default: \n}' + '\n'
          break
        case 'Function':
          this.program += 'function foo (i) {\n}' + '\n'
          break
        case 'Sort':
          this.program += 'function selectSort(arr) {\n var len=arr.length;\n var temp;\n for(var i=0;i<len-1;i++){\n for(var j=i+1;j<len;j++){\n if(arr[j]<arr[i]){\n temp=arr[j];\n arr[j]=arr[i];\n arr[i]=temp;\n }\n }\n i++;\n }\n return arr;\n }\n'
          break
        default:
      }
    },
    foo () {
      var scene = new THREE.Scene()
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var aspect = this.width / this.height
      var frustumSize = 450
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 10000)
      scene.add(camera)
      // camera.lookAt(new THREE.Vector3(100,100,100))
      var controls = new THREE.OrbitControls(camera, document.getElementById('threeapp'))
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
      document.getElementById('threeapp').appendChild(renderer.domElement)
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
.threescene {
  width: auto;
  height: auto;
}
.artical_title {
  padding-top: 100px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.author_name {
  padding-right:30px;
  text-align: right;
}
.blogcontainer {
  width: 960px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin:auto;
}
.blogcontent {
  border:1px solid #D8D8D8;
  margin: 20px auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: justify;
}
.teampic img{
  height:auto;
  width: 500px;
  text-align: center;
  padding: 40px 0px 0px 0px;
}
</style>
