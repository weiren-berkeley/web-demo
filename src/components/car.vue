<template>
<div id="car">
  <div class="container">
      <div class="h3" style="text-align:center; margin-top:80px; margin-bottom:20px;]">Model Predictive Control in Autonomous Driving (231A)
      </div>
      <div class="h5" style="text-align:center;">
        {{msg}}
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
  name: 'car',
  data () {
    return {
      height: 450,
      width: 550,
      // positionXA: [0, 0.999986293975990, 2.03103151149921, 3.09073921744355,
      //   4.17670575460439, 5.28651004420692, 6.41766066952342, 7.56729037387380,
      //   8.73027656913061, 9.88797299300678, 10.9562377066711, 11.9623480378460,
      //   13.0069498612823, 14.1199524109395, 15.3258351384188, 16.4946059050477,
      //   17.5525032445301, 18.5604501586826, 19.6011405837047, 20.6553245040934,
      //   21.7956756967333, 22.9591699195694, 24.1000028363664, 25.2280855514168,
      //   26.3300192044897, 27.4132791235741, 28.4676984354209, 29.4918038785097,
      //   30.4899406329040, 31.4609428572463, 32.4036732241410, 33.3308583602308,
      //   34.2339019391149, 35.1247491790786, 35.9989185296286, 36.8612779525613,
      //   37.7148295860157, 38.5604376758943, 39.4017282608568, 40.2401622505953,
      //   41.0791830283327, 41.9227586110798, 42.7687783371311, 43.6216658640426,
      //   44.4851624597269, 45.3605770799113, 46.2487844216852, 47.1561912737755,
      //   48.0817540837745, 49.0267786662166, 50],
      // positionYA: [0, 0.00523563369275924, 0.0124891541068011, 0.0209476570065736,
      //   0.0309057703504016, 0.0441171635286000, 0.0655495540240261,
      //   0.108302276660421, 0.206149590895155, 0.441445618571905, 0.973069531819061,
      //   1.63204359015620, 2.24226474340613, 2.72817732980553, 2.89020532888169,
      //   2.55246793782201, 1.95681948959237, 1.28895552264192, 0.687879581362258,
      //   0.131341692365543, -0.171753103333706, -0.104879217604222, 0.0274783053681736,
      //   0.0766969179155563, -0.0334664463701810, -0.0244617905615420, 0.0459558280368201,
      //   -0.0415688893667760, 0.00180725597075801, 0.0595709896064588,
      //   -0.0472133771282695, -0.0421535831355944, 0.0529626465219273,
      //   0.0252225946945438, -0.0441677504394189, 0.0228435831635998,
      //   -0.0333468094563706, 0.0334120293098498, -0.0273122702689925, 0.0398455051420658,
      //   -0.0200980899403387, -0.0264412911933722, 0.0375913698056708,
      //   -0.0314762702016275, 0.0246630904031505, -0.0337252344321455, 0.0462399627639740,
      //   -0.00107835643661088, -0.0666103851624727, 0.0256747204696857, 0],
      // thetaA: [0, 0.00301244746418828, 0.00539882413191077, 0.00697375617215431,
      //   0.00834583139712677, 0.0106178688616672, 0.0160384666996048, 0.0300256455309878,
      //   0.0662103672354637, 0.157225876936940, 0.363094030794389, 0.511927229065839,
      //   0.523598775598299, 0.445527069225114, 0.230657151743799, -0.112262364906120,
      //   -0.384636473160322, -0.523222412846362, -0.523598775598299, -0.497640199829128,
      //   -0.337676150934471, -0.0795877868278400, 0.0485129594415820, 0.0453228206524295,
      //   -0.0467231413010255, -0.0124367651157474, 0.0356215778513461, -0.0356912706356838,
      //   0.00974355475768858, 0.0375341923066269, -0.0442180924418960, -0.0177279616372681,
      //   0.0462015935019263, 0.00658457901855189, -0.0366518055858662, 0.0200606699348491,
      //   -0.0221146786225481, 0.0270460474123898, -0.0209705823432988, 0.0277775013617973,
      //   -0.0201070639178558, -0.0139973019959577, 0.0296551693697414, -0.0246176092557604,
      //   0.0199033488949224, -0.0237095926483270, 0.0344030560963346, -0.0107647982491764,
      //   -0.0427354123573532, 0.0335445479451421, 0],
      positionXA: [0.000000, 0.250000, 0.500000, 0.750000, 1.000000, 1.250000, 1.500000, 1.750000,
        2.000000, 2.250000, 2.500000, 2.750000, 3.000000, 3.250000, 3.500000, 3.750000,
        4.000000, 4.250000, 4.500000, 4.750000, 5.000000, 5.250000, 5.500000, 5.750000,
        6.000000, 6.250000, 6.500000, 6.750000, 7.000000, 7.250000, 7.500000, 7.750000,
        8.000000, 8.250000, 8.500000, 8.750000, 9.000000, 9.250000, 9.500000, 9.750000,
        10.000000, 10.250000, 10.500000, 10.750000, 11.000000, 11.250000, 11.500000, 11.750000,
        12.000000, 12.250000, 12.500000, 12.750000, 13.000000, 13.250000, 13.500000, 13.750000,
        14.000000, 14.250000, 14.500000, 14.750000, 15.000000, 15.250000, 15.500000, 15.750000,
        16.000000, 16.250000, 16.500000, 16.750000, 17.000000, 17.250000, 17.500000, 17.750000,
        18.000000, 18.250000, 18.500000, 18.750000, 19.000000, 19.250000, 19.500000, 19.750000,
        20.000000, 20.250000, 20.500000, 20.750000, 21.000000, 21.250000, 21.500000, 21.750000,
        22.000000, 22.250000, 22.500000, 22.750000, 23.000000, 23.250000, 23.500000, 23.750000,
        24.000000, 24.250000, 24.500000, 24.750000, 25.000000, 25.250000, 25.500000, 25.750000,
        26.000000, 26.250000, 26.500000, 26.750000, 27.000000, 27.250000, 27.500000, 27.750000,
        28.000000, 28.250000, 28.500000, 28.750000, 29.000000, 29.250000, 29.500000, 29.750000,
        30.000000, 30.250000, 30.500000, 30.750000, 31.000000, 31.250000, 31.500000, 31.750000,
        32.000000, 32.250000, 32.500000, 32.750000, 33.000000, 33.250000, 33.500000, 33.750000,
        34.000000, 34.250000, 34.500000, 34.750000, 35.000000, 35.250000, 35.500000, 35.750000,
        36.000000, 36.250000, 36.500000, 36.750000, 37.000000, 37.250000, 37.500000, 37.750000,
        38.000000, 38.250000, 38.500000, 38.750000, 39.000000, 39.250000, 39.500000, 39.750000,
        40.000000, 40.250000, 40.500000, 40.750000, 41.000000, 41.250000, 41.500000, 41.750000,
        42.000000, 42.250000, 42.500000, 42.750000, 43.000000, 43.250000, 43.500000, 43.750000,
        44.000000, 44.250000, 44.500000, 44.750000, 45.000000, 45.250000, 45.500000, 45.750000,
        46.000000, 46.250000, 46.500000, 46.750000, 47.000000, 47.250000, 47.500000, 47.750000,
        48.000000, 48.250000, 48.500000, 48.750000, 49.000000, 49.250000, 49.500000, 49.750000,
        50.000000, 50.000000],

      positionYA: [0.000000, 0.001082, 0.002327, 0.003717, 0.005236, 0.006866, 0.008590, 0.010392,
        0.012255, 0.014163, 0.016118, 0.018124, 0.020185, 0.022307, 0.024501, 0.026780,
        0.029158, 0.031649, 0.034282, 0.037112, 0.040196, 0.043592, 0.047358, 0.051565,
        0.056291, 0.061611, 0.067603, 0.074478, 0.082651, 0.092556, 0.104627, 0.119283,
        0.136796, 0.157362, 0.181175, 0.208430, 0.240079, 0.279477, 0.330450, 0.396825,
        0.482332, 0.587863, 0.711057, 0.849377, 1.000281, 1.160728, 1.326477, 1.493109,
        1.656210, 1.812498, 1.961603, 2.103611, 2.238611, 2.366364, 2.485200, 2.593065,
        2.687902, 2.767656, 2.830292, 2.873795, 2.896148, 2.895336, 2.869596, 2.819775,
        2.748282, 2.657544, 2.549987, 2.427884, 2.292927, 2.146671, 1.990673, 1.826732,
        1.658501, 1.490492, 1.327218, 1.172642, 1.026058, 0.884406, 0.744609, 0.603865,
        0.463524, 0.328177, 0.202499, 0.091131, -0.002730, -0.077878, -0.133248, -0.167779,
        -0.180941, -0.175931, -0.157540, -0.130563, -0.099793, -0.068902, -0.038787, -0.009923,
        0.017213, 0.042070, 0.062940, 0.077225, 0.082308, 0.075567, 0.056176, 0.028820,
        -0.000757, -0.026810, -0.043945, -0.050633, -0.047754, -0.036224, -0.016998, 0.006917,
        0.029447, 0.044265, 0.045050, 0.029075, 0.003420, -0.023175, -0.041971, -0.046459,
        -0.038217, -0.020654, 0.002823, 0.028290, 0.050006, 0.061826, 0.057615, 0.035238,
        0.002662, -0.030577, -0.055045, -0.065669, -0.063265, -0.049066, -0.024599, 0.005314,
        0.033778, 0.053870, 0.060444, 0.054233, 0.037181, 0.011396, -0.017228, -0.039018,
        -0.044140, -0.027193, -0.000289, 0.020140, 0.018646, -0.002496, -0.025652, -0.032699,
        -0.014645, 0.013385, 0.032332, 0.025923, 0.001464, -0.021867, -0.025178, -0.004778,
        0.022915, 0.040104, 0.034447, 0.013011, -0.012828, -0.032250, -0.040522, -0.036669,
        -0.019839, 0.006106, 0.029491, 0.037910, 0.022858, -0.004606, -0.027305, -0.028834,
        -0.009550, 0.014004, 0.024623, 0.011817, -0.012413, -0.031364, -0.029232, -0.006205,
        0.023772, 0.046308, 0.050394, 0.038362, 0.015831, -0.011579, -0.038275, -0.058700,
        -0.067299, -0.059162, -0.036711, -0.007016, 0.022775, 0.045519, 0.054068, 0.041277,
        -0.000000, -0.000000],

      thetaA: [0.000000, 0.000802, 0.001574, 0.002313, 0.003012, 0.003670, 0.004279, 0.004838,
        0.005341, 0.005785, 0.006179, 0.006533, 0.006860, 0.007170, 0.007475, 0.007783,
        0.008105, 0.008450, 0.008835, 0.009287, 0.009835, 0.010507, 0.011333, 0.012334,
        0.013534, 0.014953, 0.016615, 0.018612, 0.021148, 0.024436, 0.028689, 0.034100,
        0.040700, 0.048428, 0.057221, 0.067019, 0.078196, 0.092511, 0.111995, 0.138677,
        0.174508, 0.219021, 0.268985, 0.321015, 0.371729, 0.418209, 0.458645, 0.491387,
        0.514791, 0.528093, 0.532796, 0.530759, 0.523843, 0.513525, 0.499619, 0.481484,
        0.458480, 0.429971, 0.395359, 0.354087, 0.305600, 0.249343, 0.184935, 0.113843,
        0.038627, -0.038136, -0.113868, -0.186298, -0.254303, -0.317027, -0.373613, -0.423188,
        -0.464740, -0.497196, -0.519481, -0.530849, -0.533333, -0.530367, -0.525395, -0.521645,
        -0.519018, -0.514826, -0.506316, -0.490759, -0.466706, -0.434456, -0.394440, -0.347087,
        -0.293102, -0.235137, -0.176671, -0.121188, -0.072166, -0.031939, 0.000005, 0.024608,
        0.042812, 0.055499, 0.062654, 0.063571, 0.057525, 0.043794, 0.022772, -0.001694,
        -0.025097, -0.042929, -0.051035, -0.049170, -0.039520, -0.024310, -0.005776, 0.013214,
        0.028850, 0.037243, 0.034509, 0.019398, -0.002149, -0.022973, -0.035916, -0.035901,
        -0.025383, -0.008529, 0.010499, 0.027710, 0.039745, 0.043379, 0.035396, 0.015336,
        -0.010306, -0.033952, -0.048122, -0.049546, -0.040631, -0.024190, -0.003122, 0.018687,
        0.036731, 0.046493, 0.044957, 0.034050, 0.016718, -0.004030, -0.023755, -0.036593,
        -0.036616, -0.020952, 0.001214, 0.017721, 0.017147, 0.001383, -0.016149, -0.021656,
        -0.008278, 0.012541, 0.026370, 0.020895, 0.001715, -0.016552, -0.019509, -0.004429,
        0.015972, 0.027918, 0.022019, 0.004473, -0.015061, -0.027489, -0.029927, -0.023321,
        -0.008709, 0.010322, 0.025972, 0.030046, 0.017115, -0.004367, -0.021603, -0.022382,
        -0.007169, 0.011326, 0.019897, 0.010483, -0.007741, -0.021992, -0.020190, -0.002720,
        0.019310, 0.034442, 0.034141, 0.021405, 0.002071, -0.018052, -0.034426, -0.044274,
        -0.044950, -0.034210, -0.014390, 0.009267, 0.031472, 0.046937, 0.050372, 0.036490,
        -0.000000, -0.000000],
      msg: '3D model is loading...',
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
      var frustumSize = 1650
      var aspect = this.width / this.height
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -1000, 10000)
      scene.add(camera)
      camera.position.z = 0
      camera.position.y = 800
      camera.position.x = 800
      var renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(this.width - 2, this.height - 2)
      document.getElementById('threetruck').appendChild(renderer.domElement)
      scene.background = new THREE.Color().setHSL(1, 1, 1)
      renderer.render(scene, camera)
      var gridHelper = new THREE.GridHelper(1000, 10, 0x0000ff, 0x808080)
      gridHelper.scale.set(1.3, 1, 11)
      gridHelper.position.y = 0
      gridHelper.position.x = 0
      gridHelper.position.z = 0
      scene.add(gridHelper)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/delivery-truck.json', (obj) => {
        this.uuid = obj.uuid
        scene.add(obj)
        console.log(obj)
        this.msg = ''
        animate()
      })
      console.log(Math.sin(3.1415926525))
      var geometry = new THREE.CylinderBufferGeometry(70, 70, 200, 32)
      var material = new THREE.MeshPhongMaterial({color: 0xff0000})
      var cylinder = new THREE.Mesh(geometry, material)
      cylinder.position.z = -1650
      cylinder.position.y = 100
      scene.add(cylinder)
      var controls = new THREE.OrbitControls(camera, document.getElementById('threetruck'))
      controls.enableZoom = true
      controls.zoomSpeed = 1.0
      controls.update()
      var light = new THREE.AmbientLight(0x255f7c)
      scene.add(light)
      var i = 0
      var animate = () => {
        // var i = 0
        i += 1
        this.index = Math.floor(i / 4)
        requestAnimationFrame(animate)
        if (this.index === 200) {
          i = 0
        }
        // scene.children[4].children[2].rotation.z = this.theta[this.msg]
        // scene.children[4].children[2].position.z = -this.positionX[this.msg] * 100 + this.theta[this.msg] * 100
        // scene.children[4].children[2].position.x = -this.positionY[this.msg] * 100
        // scene.children[4].children[2].position.y = this.theta[this.msg] * 100

        scene.children[4].children[2].rotation.z = this.thetaA[this.index]
        // scene.children[4].children[2].rotation.z += 0.1
        scene.children[4].children[2].position.z = -Math.cos(scene.children[4].children[2].rotation.z) * 150
        scene.children[4].children[2].position.x = -Math.sin(scene.children[4].children[2].rotation.z) * 150
        scene.children[4].children[2].position.z += -this.positionXA[this.index] * 100
        scene.children[4].children[2].position.x += -this.positionYA[this.index] * 100
        // scene.children[4].children[2].position.z = - this.positionX[this.index] * 100
        // scene.children[4].children[2].position.x = - Math.sin(this.theta[this.index]) * 150 - this.positionY[this.index] * 100
        camera.position.z = scene.children[4].children[2].position.z
        camera.position.x = scene.children[4].children[2].position.x
        camera.lookAt(new THREE.Vector3(scene.children[4].children[2].position.x, scene.children[4].children[2].position.y, scene.children[4].children[2].position.z))

        // controls.update()
        renderer.render(scene, camera)
      }
    },
    foo2 () {
      var scene = new THREE.Scene()
      var frustumSize = 1650
      var aspect = this.width / this.height
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -1000, 10000)
      scene.add(camera)
      camera.position.z = 0
      camera.position.y = 800
      camera.position.x = 800
      var renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(this.width - 2, this.height - 2)
      document.getElementById('threetruck2').appendChild(renderer.domElement)
      scene.background = new THREE.Color().setHSL(1, 1, 1)
      renderer.render(scene, camera)
      var gridHelper = new THREE.GridHelper(1000, 10, 0x0000ff, 0x808080)
      gridHelper.scale.set(1.3, 1, 11)
      gridHelper.position.y = 0
      gridHelper.position.x = 0
      gridHelper.position.z = 0
      scene.add(gridHelper)
      // console.log(this.positionXA)
      // objectLoader
      var objectLoader = new THREE.ObjectLoader()
      objectLoader.load('../static/delivery-truck.json', (obj) => {
        this.uuid = obj.uuid
        scene.add(obj)
        console.log(obj)
        animate()
      })
      console.log(Math.sin(3.1415926525))
      var geometry = new THREE.CylinderBufferGeometry(70, 70, 200, 32)
      var material = new THREE.MeshPhongMaterial({color: 0xff0000})
      var cylinder = new THREE.Mesh(geometry, material)
      cylinder.position.z = -1650
      cylinder.position.y = 100
      scene.add(cylinder)
      var controls = new THREE.OrbitControls(camera, document.getElementById('threetruck2'))
      controls.enableZoom = true
      controls.zoomSpeed = 1.0
      controls.update()
      var light = new THREE.AmbientLight(0x255f7c)
      scene.add(light)
      scene.background = new THREE.Color().setHSL(1, 1, 1)
      var i = 0
      var animate = () => {
        // var i = 0
        i += 1
        this.index = Math.floor(i / 4)
        requestAnimationFrame(animate)
        if (this.index === 200) {
          i = 0
        }
        // scene.children[4].children[2].rotation.z = this.theta[this.msg]
        // scene.children[4].children[2].position.z = -this.positionX[this.msg] * 100 + this.theta[this.msg] * 100
        // scene.children[4].children[2].position.x = -this.positionY[this.msg] * 100
        // scene.children[4].children[2].position.y = this.theta[this.msg] * 100

        scene.children[4].children[2].rotation.z = this.thetaA[this.index]
        // scene.children[4].children[2].rotation.z += 0.1
        scene.children[4].children[2].position.z = -Math.cos(scene.children[4].children[2].rotation.z) * 150
        scene.children[4].children[2].position.x = -Math.sin(scene.children[4].children[2].rotation.z) * 150
        scene.children[4].children[2].position.z += -this.positionXA[this.index] * 100
        scene.children[4].children[2].position.x += -this.positionYA[this.index] * 100
        // scene.children[4].children[2].position.z = - this.positionX[this.index] * 100
        // scene.children[4].children[2].position.x = - Math.sin(this.theta[this.index]) * 150 - this.positionY[this.index] * 100
        // camera.position.z = scene.children[4].children[2].position.z
        // camera.position.x = scene.children[4].children[2].position.x
        camera.lookAt(new THREE.Vector3(scene.children[4].children[2].position.x, scene.children[4].children[2].position.y, scene.children[4].children[2].position.z))

        // controls.update()
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style scoped>

</style>
