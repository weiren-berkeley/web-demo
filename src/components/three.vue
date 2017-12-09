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
      positionX: [0, 0.999986293975990, 2.03103151149921, 3.09073921744355,
        4.17670575460439, 5.28651004420692, 6.41766066952342, 7.56729037387380,
        8.73027656913061, 9.88797299300678, 10.9562377066711, 11.9623480378460,
        13.0069498612823, 14.1199524109395, 15.3258351384188, 16.4946059050477,
        17.5525032445301, 18.5604501586826, 19.6011405837047, 20.6553245040934,
        21.7956756967333, 22.9591699195694, 24.1000028363664, 25.2280855514168,
        26.3300192044897, 27.4132791235741, 28.4676984354209, 29.4918038785097,
        30.4899406329040, 31.4609428572463, 32.4036732241410, 33.3308583602308,
        34.2339019391149, 35.1247491790786, 35.9989185296286, 36.8612779525613,
        37.7148295860157, 38.5604376758943, 39.4017282608568, 40.2401622505953,
        41.0791830283327, 41.9227586110798, 42.7687783371311, 43.6216658640426,
        44.4851624597269, 45.3605770799113, 46.2487844216852, 47.1561912737755,
        48.0817540837745, 49.0267786662166, 50],
      positionY: [0, 0.00523563369275924, 0.0124891541068011, 0.0209476570065736,
        0.0309057703504016, 0.0441171635286000, 0.0655495540240261,
        0.108302276660421, 0.206149590895155, 0.441445618571905, 0.973069531819061,
        1.63204359015620, 2.24226474340613, 2.72817732980553, 2.89020532888169,
        2.55246793782201, 1.95681948959237, 1.28895552264192, 0.687879581362258,
        0.131341692365543, -0.171753103333706, -0.104879217604222, 0.0274783053681736,
        0.0766969179155563, -0.0334664463701810, -0.0244617905615420, 0.0459558280368201,
        -0.0415688893667760, 0.00180725597075801, 0.0595709896064588,
        -0.0472133771282695, -0.0421535831355944, 0.0529626465219273,
        0.0252225946945438, -0.0441677504394189, 0.0228435831635998,
        -0.0333468094563706, 0.0334120293098498, -0.0273122702689925, 0.0398455051420658,
        -0.0200980899403387, -0.0264412911933722, 0.0375913698056708,
        -0.0314762702016275, 0.0246630904031505, -0.0337252344321455, 0.0462399627639740,
        -0.00107835643661088, -0.0666103851624727, 0.0256747204696857, 0],
      theta: [0, 0.00301244746418828, 0.00539882413191077, 0.00697375617215431,
        0.00834583139712677, 0.0106178688616672, 0.0160384666996048, 0.0300256455309878,
        0.0662103672354637, 0.157225876936940, 0.363094030794389, 0.511927229065839,
        0.523598775598299, 0.445527069225114, 0.230657151743799, -0.112262364906120,
        -0.384636473160322, -0.523222412846362, -0.523598775598299, -0.497640199829128,
        -0.337676150934471, -0.0795877868278400, 0.0485129594415820, 0.0453228206524295,
        -0.0467231413010255, -0.0124367651157474, 0.0356215778513461, -0.0356912706356838,
        0.00974355475768858, 0.0375341923066269, -0.0442180924418960, -0.0177279616372681,
        0.0462015935019263, 0.00658457901855189, -0.0366518055858662, 0.0200606699348491,
        -0.0221146786225481, 0.0270460474123898, -0.0209705823432988, 0.0277775013617973,
        -0.0201070639178558, -0.0139973019959577, 0.0296551693697414, -0.0246176092557604,
        0.0199033488949224, -0.0237095926483270, 0.0344030560963346, -0.0107647982491764,
        -0.0427354123573532, 0.0335445479451421, 0],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.foo()
  },
  methods: {
    foo () {
      var scene = new THREE.Scene()
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var aspect = window.innerWidth / window.innerHeight
      var frustumSize = 1050
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
      camera.position.z = 0
      camera.position.y = 800
      camera.position.x = 800
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.getElementById('threeapp').appendChild(renderer.domElement)
      document.body.appendChild(renderer.domElement)
      var gridHelper = new THREE.GridHelper(1000, 6, 0x0000ff, 0x808080)
      gridHelper.position.y = 0
      gridHelper.position.x = 0
      gridHelper.position.z = 0
      scene.add(gridHelper)
      // console.log(gridHelper);
      // var i
      // for (i = 1; i < 5; i++) {
      //   // var gridHelper = new THREE.GridHelper(1000, 6, 0x0000ff, 0x808080)
      //   gridHelper.position.y = 0
      //   gridHelper.position.x = i * 6000
      //   gridHelper.position.z = 0
      //   scene.add(gridHelper)
      // }
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/delivery-truck.json', function (obj) {
        scene.add(obj)
        camera.position.z = 400
      })
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
threeapp2 {
  margin: 10px 10px 10px 10px;
}
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
