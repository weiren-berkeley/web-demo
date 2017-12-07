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
           <div class="threescene border border-primary" style="height:260px;"id="threeapp"></div>
           <div v-if="showFace" class="threescene border border-primary" style="height:263px;width:100%;margin:1rem 0 0 0;">
             <div class="embed-responsive embed-responsive-4by3">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KgIXPSYtShE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
             </div>
           </div>
           <div v-if="showResult" id="threeapp2" class="threescene border border-primary" style="text-align:center;height:263px;width:100%;margin:1rem 0 0 0;">
              <img src="../assets/img/grid2.png" style="height:100%;"class="img-fluid" />
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
      program: ''
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
