<template>
  <div id="iot">
    <div class="container">
      <div class="row" style="text-align:center">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="spacer" id="spacer"></div>
          <div class="block" id="connecting-div"></div>
          <div class="block" id="explorer-div" style="visibility:hidden">
             <div class="settings" id="settings-div">
                <p>Drag to control robotic arm</p>
                <div class="col-auto">
                  <label class="custom-control custom-checkbox mb-2 mr-sm-2">
                    <input type="checkbox" class="custom-control-input" v-model="checkbox" @change="enableControl">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Enable Control</span>
                  </label>
                  <!-- <label class="custom-control custom-checkbox mb-2 mr-sm-2">
                    <input type="checkbox" class="custom-control-input" v-model="autorun">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Auto Run</span>
                  </label> -->
                </div>
                <br>
                <input type="range" class="slider" min="0" max="200" step="1" v-model="command_angle1" /><br>
                Command joint angle1:
                {{command_angle1}}
                <br>
                <input type="range" class="slider" min="0" max="200" step="1" v-model="command_angle2" /><br>
                Command joint angle2:
                {{command_angle2}}
                <br>
                <input type="range" class="slider" min="0" max="200" step="1" v-model="command_angle3" /><br>
                Command joint angle3:
                {{command_angle3}}
                <br>
                <input type="range" class="slider" min="0" max="200" step="1" v-model="command_angle4" /><br>
                Command joint angle4:
                {{command_angle4}}
                <br>
                <input type="range" class="slider" min="0" max="200" step="1" v-model="command_angle5" /><br>
                Command joint angle5:
                {{command_angle5}}
                <br>
                <br>
                <br>
             </div>
          </div>
        </div>
      </div>
      <!-- <div class="row" style="text-align:center; margin-top: 0">
        <div class="col-md-1"></div>
        <div class="col-md-5" style="padding:1rem">
          <div id="wrapper" class="threescene border border-primary">
            <svg class="img-fluid"></svg>
          </div>
        </div>
        <div class="col-md-5" style="padding:1rem">
          <div class="threescene border border-primary" id="roboticArm"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import * as AWS from 'aws-sdk'
import * as AWSIoTData from 'aws-iot-device-sdk'
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-addons'
const THREE = {...THREEJS, ...THREE_ADDONS}
export default {
  name: 'iot',
  data () {
    return {
      height: 550,
      width: 800,
      region: 'us-east-2',
      poolId: 'us-east-2:5971b76a-f715-468f-acfa-2c67947eb2cf',
      host: 'a21zozqgendyv9.iot.us-east-2.amazonaws.com',
      password: '',
      msg: {},
      command_angle1: 0,
      command_angle2: 0,
      command_angle3: 0,
      command_angle4: 0,
      command_angle5: 0,
      robotic_angle: 0,
      commandEnable: false,
      checkbox: false,
      direction: true,
      autorun: false,
      enableMsg: '',
      clientId: ''
      // data: []
    }
  },
  mounted () {
    // this.update(),
    this.init()
    this.test()
    this.foo()
  },
  methods: {
    enableControl () {
      if (this.checkbox) {
        // console.log('Enable Control')
        this.enableMsg = {
          type: 'enable',
          text: 'This is a enable request from website.',
          clientId: this.clientId
        }
        // console.log(this.clientId)
        window.updatePublishData(this.enableMsg)
      }
      if (!this.checkbox) {
        this.commandEnable = false
      }
    },
    init () {
      var update = () => {
        if (this.commandEnable) {
          this.msg = {
            type: 'data',
            text: 'This is a command from website.',
            command_angle1: this.command_angle1,
            command_angle2: this.command_angle2,
            command_angle3: this.command_angle3,
            command_angle4: this.command_angle4,
            command_angle5: this.command_angle5
          }
          window.updatePublishData(this.msg)
        }
      }
      window.setInterval(update, 50)
      var status = () => {
        if (this.commandEnable) {
          window.updatePublishData({
            type: 'status',
            text: 'This is a status from website.',
            WebStatus: 'Controlling',
            Id: this.clientId
          })
        } else {
          window.updatePublishData({
            type: 'status',
            text: 'This is a status from website.',
            WebStatus: 'Online',
            Id: this.clientId
          })
        }
      }
      window.setInterval(status, 1000)
    },
    foo () {
      var roboticArm = document.getElementById('roboticArm')
      this.height = roboticArm.clientHeight
      this.width = roboticArm.clientWidth
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
      objectLoader.load('../static/assemblyColor.json', (obj) => {
        scene.add(obj)
        // console.log(scene)
        scene.children[2].position.y = -100
        this.msg = ''
        animate()
      })
      var animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        // console.log('test')
        if (this.autorun) {
          // this.command_angle = this.command_angle % 1000
          if (this.direction) {
            this.command_angle1 = this.command_angle1 % 1000
            this.command_angle1 = Math.round(this.command_angle1)
            this.command_angle1 += 3
            // this.command_angle = round(this.command_angle)
            this.command_angle1 = this.command_angle1 % 1000

            if (this.command_angle1 > 196) {
              this.direction = false
            }
          } else {
            this.command_angle1 = this.command_angle1 % 1000
            this.command_angle1 = Math.round(this.command_angle1)
            this.command_angle1 -= 3
            this.command_angle1 = this.command_angle1 % 1000

            if (this.command_angle1 < 4) {
              this.direction = true
            }
          }
        }
        if (this.commandEnable) {
          scene.children[2].children[4].children[0].children[1].rotation.y = -this.command_angle1 / 180 * 3.1415926
        } else {
          scene.children[2].children[4].children[0].children[1].rotation.y = -this.robotic_angle / 180 * 3.1415926
        }
        this.matrix = scene.children[2].children[4].children[0].children[1].matrixWorld
        renderer.render(scene, camera)
      }
    },
    test () {
      var that = this
      console.log('Loaded AWS SDK for JavaScript and AWS IoT SDK for Node.js')
      //
      // Remember our current subscription topic here.
      //
      var currentlySubscribedTopic = 'subscribe-topic'
      //
      // Remember our message history here.
      //
      //
      // Create a client id to use when connecting to AWS IoT.
      //
      var clientId = 'OPARP-Web-' + (Math.floor((Math.random() * 100000000) + 1))
      that.clientId = clientId
      //
      // Initialize our configuration.
      //
      AWS.config.region = this.region
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.poolId
      })
      //
      // Create the AWS IoT device object.  Note that the credentials must be
      // initialized with empty strings; when we successfully authenticate to
      // the Cognito Identity Pool, the credentials will be dynamically updated.
      //
      const mqttClient = AWSIoTData.device({
         //
         // Set the AWS region we will operate in.
         //
        region: AWS.config.region,
         //
         // Set the AWS IoT Host Endpoint
        host: this.host,
         //
         // Use the clientId created earlier.
         //
        clientId: clientId,
         //
         // Connect via secure WebSocket
         //
        protocol: 'wss',
         //
         // Set the maximum reconnect time to 8 seconds; this is a browser application
         // so we don't want to leave the user waiting too long for reconnection after
         // re-connecting to the network/re-opening their laptop/etc...
         //
        maximumReconnectTimeMs: 8000,
         //
         // Enable console debugging information (optional)
         //
        debug: false,
         //
         // IMPORTANT: the AWS access key ID, secret key, and sesion token must be
         // initialized with empty strings.
         //
        accessKeyId: '',
        secretKey: '',
        sessionToken: ''
      })
      //
      // Attempt to authenticate to the Cognito Identity Pool.  Note that this
      // example only supports use of a pool which allows unauthenticated
      // identities.
      //
      var cognitoIdentity = new AWS.CognitoIdentity()
      AWS.config.credentials.get(function (err, data) {
        if (!err) {
          console.log('retrieved identity: ' + AWS.config.credentials.identityId)
          var params = {
            IdentityId: AWS.config.credentials.identityId
          }
          cognitoIdentity.getCredentialsForIdentity(params, function (err, data) {
            if (!err) {
                  //
                  // Update our latest AWS credentials; the MQTT client will use these
                  // during its next reconnect attempt.
                  //
              mqttClient.updateWebSocketCredentials(data.Credentials.AccessKeyId,
              data.Credentials.SecretKey,
              data.Credentials.SessionToken)
            } else {
              console.log('error retrieving credentials: ' + err)
              alert('error retrieving credentials: ' + err)
            }
          })
        } else {
          console.log('error retrieving identity:' + err)
          alert('error retrieving identity: ' + err)
        }
      })

      //
      // Connect handler; update div visibility and fetch latest shadow documents.
      // Subscribe to lifecycle events on the first connect event.
      //
      window.mqttClientConnectHandler = function () {
        console.log('connect')
        document.getElementById('connecting-div').style.visibility = 'hidden'
        document.getElementById('settings-div').style.visibility = 'visible'
         //
         // Subscribe to our current topic.
         //
        mqttClient.subscribe(currentlySubscribedTopic)
      }
      //
      // Reconnect handler; update div visibility.
      //
      window.mqttClientReconnectHandler = function () {
        console.log('reconnect')
        document.getElementById('connecting-div').style.visibility = 'visible'
        document.getElementById('settings-div').style.visibility = 'hidden'
      }

      //
      // Utility function to determine if a value has been defined.
      //
      window.isUndefined = function (value) {
        return ((typeof value) === 'undefined')
        // || ((typeof value) === null)
      }

      //
      // Message handler for lifecycle events; create/destroy divs as clients
      // connect/disconnect.
      //
      window.mqttClientMessageHandler = function (topic, payload) {
        // console.log('message: ' + topic + ':' + payload.toString())
        var obj = JSON.parse(payload.toString())
        if (obj.type === 'data') {
          that.robotic_angle = obj.command_angle1
        }
        if (obj.type === 'enable') {
          if (obj.clientId !== that.clientId) {
            that.checkbox = false
            that.commandEnable = false
          }
          if (obj.clientId === that.clientId) {
            setTimeout(function () {
              that.commandEnable = true
            }, 200)
          }
        }
      }

      //
      // Handle the UI for the current topic subscription
      //
      window.updateSubscriptionTopic = function () {
        // var subscribeTopic = document.getElementById('subscribe-topic').value
        var subscribeTopic = 'oparp'
        mqttClient.unsubscribe(currentlySubscribedTopic)
        currentlySubscribedTopic = subscribeTopic
        mqttClient.subscribe(currentlySubscribedTopic)
      }
      //
      // Handle the UI to update the topic we're publishing on
      //
      window.updatePublishTopic = function () {}

      //
      // Handle the UI to update the data we're publishing
      //
      window.updatePublishData = function (msg) {
        var s = JSON.stringify(msg)
        // console.log(s);
        var publishText = s
        var publishTopic = 'oparp'
        mqttClient.publish(publishTopic, publishText)
      }

      //
      // Install connect/reconnect event handlers.
      //
      mqttClient.on('connect', window.mqttClientConnectHandler)
      mqttClient.on('reconnect', window.mqttClientReconnectHandler)
      mqttClient.on('message', window.mqttClientMessageHandler)
      //
      // Initialize divs.
      //
      document.getElementById('connecting-div').style.visibility = 'visible'
      document.getElementById('settings-div').style.visibility = 'hidden'
      document.getElementById('connecting-div').innerHTML = '<p>Attempting to connect to server...</p>'
      window.updateSubscriptionTopic()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.line {
  fill: none;
  stroke: blue;
  stroke-width: 1.5px;
}
.line2 {
  fill: none;
  stroke: red;
  stroke-width: 1.5px;
}
.slider {
    -webkit-appearance: none;
    width: 70%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}

.area {
  stroke-width: 1;
}

.median-line,
.legend .median-line2 {
  fill: none;
  stroke: blue;
  stroke-width: 3;
}
.median-line,
.legend .median-line {
  fill: none;
  stroke: red;
  stroke-width: 3;
}

.legend .legend-bg {
  fill: rgba(0, 0, 0, 0.1);
  stroke: rgba(0, 0, 0, 0.5);
}
#wrapper {
    position: relative;
    /*height: 0;*/
    height: 20rem;
    width: 100%;
    padding: 0;
    /* padding-bottom will be overwritten by JavaScript later */
    /*padding-bottom: 100%;*/
}
#wrapper > svg {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
#settings-div {
  font-weight: bold
}
#roboticArm {
  height:20rem;
  width:100%;
}
@media (max-width: 576px) {
  #wrapper {
    height:10rem;
  }
  #settings-div {
    font-weight: bold;
    font-size: 1rem;
  }
  #roboticArm {
    height:15rem;
    width:100%;
  }
}

</style>
