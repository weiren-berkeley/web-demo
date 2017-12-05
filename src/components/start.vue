<template>
  <div id="start">
    <div class="artical_title"><a>Start Your New Project</a></div>
    <div class="program">
      <div class="container">
       <div class="row">
         <div class="col-md-2">
           <div class="list-group">
             <b-btn class="list-group-item list-group-item-action disabled">Program Tool</b-btn>
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
            <textarea class="form-control" rows="15" v-model="program"></textarea>
          </div>
         </div>
         <div class="col-md-4">
           <div class="threescene border border-primary" style="height:260px;"id="threeapp">
           </div>

         </div>
       </div>
      </div>
    </div>
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
      msg: 'Welcome to Your Vue.js App',
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
    check () {
      alert('All Passed!')
    },
    run () {
      alert('这种程序你还好意思点run？')
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
      var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      scene.add(camera)
      var controls = new THREE.OrbitControls(camera, document.getElementById('threeapp'))
      // controls.autoRotate()
      // controls.enableZoom = true
      // controls.zoomSpeed = 1.0
      // controls.autoRotate = true
      // controls.enableKeys = true
      // controls.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
      controls.update()
      camera.position.z = 600
      camera.position.y = 520
      camera.position.x = 120
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(renderer.getSize().width, 255)
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
.program {
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  /*font-weight: bold;*/
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
