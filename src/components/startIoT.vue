<template>
  <div id="startIoT">
    <div class="container">
      <p class="h4 text-center" style="margin-top:2rem;">Enjoy Your Programming</p>
      <div class="row" style="text-align:center; margin-top:2rem;">
        <div class="col-md-7">
          <div id="blocklyDiv" style="width:100%; height:33rem;"></div>
        </div>
        <div class="col-md-5" style="padding:0rem">
            <div id="programConsole" class="row alert alert-secondary" style="margin:10px">
             <div class="col-lg-4">
               <button type="button" class="btn btn-primary btn-block" style="margin-top:0.1rem;margin-bottom:0.1rem;" @click="check()">Code</button>
             </div>
             <div class="col-lg-4">
               <button type="button" class="btn btn-success btn-block" style="margin-top:0.1rem;margin-bottom:0.1rem;" @click="run()">Run</button>
             </div>
             <div class="col-lg-4">
               <button type="button" class="btn btn-warning btn-block" style="margin-top:0.1rem;margin-bottom:0.1rem;" @click="goBottom()">Publish</button>
             </div>
           </div>
          <div class="threescene border border-primary" id="roboticArm"></div>
        </div>
      </div>
      <p id="inputForm" class="h5 text-center" style="margin-top:3rem;">Publish Your Programming</p>
          <form id="publishForms">
            <div class="row" style="text-align:center; margin-top:2rem;">
              <div class="col-lg-2">
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label for="exampleInputPassword1">Your name</label>
                  <input type="text" class="form-control" v-model="yourName" id="authorName" placeholder="Your name" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Project name</label>
                  <input type="text" class="form-control" v-model="projectName" id="imputProjectName" placeholder="Project name" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" v-model="emailAdress" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Description</label>
                  <input type="text" class="form-control" v-model="description" id="exampleInputPassword1" placeholder="Description" required>
                </div>
              </div>
            </div>
            <br>
            <div class="row text-center" style="text-align:center;">
              <div class="col-lg-4">
              </div>
              <div class="col-lg-4">
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          </form>
    </div>
    <br>
  </div>
</template>
<script>
import * as d3 from 'd3'
import * as THREEJS from 'three'
import * as THREE_ADDONS from 'three-addons'
const THREE = {...THREEJS, ...THREE_ADDONS}

export default {
  name: 'startIoT',
  data () {
    return {
      height: 550,
      width: 800,
      region: 'us-east-2',
      poolId: 'us-east-2:5971b76a-f715-468f-acfa-2c67947eb2cf',
      host: 'a21zozqgendyv9.iot.us-east-2.amazonaws.com',
      password: '',
      msg: {},
      command_angle: 0,
      robotic_angle: 0,
      commandEnable: false,
      checkbox: false,
      direction: true,
      autorun: false,
      enableMsg: '',
      code: '',
      clientID: '',
      yourName: '',
      emailAdress: '',
      description: '',
      projectName: '',
      queryClientID: ''
      // data: []
    }
  },
  mounted () {
    this.programming()
    this.armAnimation()
    // this.d3js()
  },
  methods: {
    goBottom () {
      document.getElementById('inputForm').scrollIntoView()
    },
    publish () {
      var workspace = window.Blockly.getMainWorkspace()
      var xml = window.Blockly.Xml.workspaceToDom(workspace)
      var data = window.Blockly.Xml.domToText(xml)
      return this.$http.post('http://api.oparp.com/publish', {
        clientID: this.clientID,
        yourName: this.yourName,
        emailAdress: this.emailAdress,
        description: this.description,
        projectName: this.projectName,
        data: data
      }, {emulateJSON: true}, { credentials: true })
      .then((res) => {
        let oRes = this.$parent.formatRes(res)
        if (oRes.status === 200) {
          this.$router.push({path: '/published'})
        } else {
          console.log('publish api error')
        }
      })
    },
    loadProgram () {
      var workspace = window.Blockly.getMainWorkspace()
      var xml = window.Blockly.Xml.workspaceToDom(workspace)
      var data
      return this.$http.get('http://api.oparp.com/onePublished', {params: {
        'clientID': this.$route.params.queryClientID
      }}, { credentials: true })
      .then((res) => {
        let oRes = this.$parent.formatRes(res)
        data = oRes.data
        console.log(data)
        try {
          xml = window.Blockly.Xml.textToDom(data)
        } catch (e) {
          alert('error loading xml data' + '\nXML: ' + data)
          return
        }
        // Clear the workspace to avoid merge.
        workspace.clear()
        window.Blockly.Xml.domToWorkspace(xml, workspace)
      })
    },
    check () {
      this.code = window.Blockly.JavaScript.workspaceToCode(window.workspace)
      alert('Your code in Javascript is: \n\n' + this.code)
    },
    run () {
      try {
        this.code = window.Blockly.JavaScript.workspaceToCode(window.workspace)
        var initApi = (interpreter, scope) => {
          function initInterpreterWaitForSeconds (interpreter, scope) {
            // Ensure function name does not conflict with variable names.
            window.Blockly.JavaScript.addReservedWords('waitForSeconds')
            var wrapper = interpreter.createAsyncFunction(
              function (timeInSeconds, callback) {
                // Delay the call to the callback.
                setTimeout(callback, timeInSeconds * 1000)
              })
            var setAngle = interpreter.createAsyncFunction(
              function (timeInSeconds, callback) {
                // Delay the call to the callback.
                setTimeout(callback, timeInSeconds * 1000)
              })
            interpreter.setProperty(scope, 'waitForSeconds', wrapper)
            interpreter.setProperty(scope, 'waitForSeconds', setAngle)
          }
          initInterpreterWaitForSeconds(interpreter, scope)
          var wrapper = function (text) {
            return alert(arguments.length ? text : '')
          }
          interpreter.setProperty(scope, 'alert',
              interpreter.createNativeFunction(wrapper))
          var setAngle = (text) => {
              // this.robotic_angle = text
            this.robotic_angle = text
          }
          interpreter.setProperty(scope, 'setAngle',
              interpreter.createNativeFunction(setAngle))
        }
        var runner
        var myInterpreter = new window.Interpreter(this.code, initApi)
        runner = () => {
          if (myInterpreter.run()) {}
          setTimeout(runner, 1)
        }
        runner()
      } catch (e) {
        alert(e)
      }
    },
    programming () {
      var node = document.getElementById('publishForms')
      node.addEventListener('submit', (event) => {
        event.preventDefault()
        this.publish()
      })
      this.clientID = 'OPARP-Program-' + Math.floor(Date.now() / 1000) + (Math.floor((Math.random() * 100000000) + 1))
      var programConsole = document.getElementById('programConsole')
      document.getElementById('roboticArm').style.height = document.getElementById('blocklyDiv').clientHeight -
      programConsole.clientHeight - programConsole.clientTop * 2 - 20 + 'px'
      var promise = new Promise(function (resolve, reject) {
        var check = () => {
          if (window.Blockly !== undefined) {
            resolve('finish loading blockly.js')
          }
        }
        window.setInterval(check, 50)
      })
      promise.then(function (result) { update() })
      var update = () => {
        var toolbox = '<xml id="toolbox" style="display: none">' +
          '<category name="Control" colour="330">' +
            '<block type="variablesSetAngle" colour="330"><field name="VAR" id="Dd}B,w(xa1d)PA`|)iV*" variabletype="">Angle</field>' +
            '</block><block type="wait_seconds" colour="330"></block></category><category name="String" colour="160">' +
            '<block type="text" colour="50"></block><block type="text_print" colour="50"></block>' +
          '</category><category name="If" colour="200"><block type="controls_if">' + '</block>' +
            '<block type="controls_if"><mutation else="1"></mutation></block>' +
            '<block type="controls_if"><mutation elseif="1" else="1">' + '</mutation></block>' +
          '</category><category name="Boolean" colour="210"><block type="logic_compare">' + '</block>' +
            '<block type="logic_operation">' + '</block><block type="logic_negate">' + '</block>' +
            '<block type="logic_boolean">' + '</block><block type="logic_null">' + '</block>' +
            '<block type="logic_ternary">' + '</block></category><category name="Loops" colour="120">' +
            '<block type="controls_repeat_ext"><value name="TIMES"><block type="math_number">' +
                  '<field name="NUM">' + '10' + '</field></block></value></block>' +
            '<block type="controls_whileUntil">' + '</block><block type="controls_for"><field name="VAR">i</field>' +
              '<value name="FROM">' +
                '<block type="math_number">' +
                  '<field name="NUM">1</field>' +
                '</block>' +
              '</value>' +
              '<value name="TO">' +
                '<block type="math_number"><field name="NUM">10</field></block>' +
              '</value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block>' +
            '<block type="controls_forEach">' + '</block>' +
            '<block type="controls_flow_statements">' + '</block>' +
          '</category>' +
          '<category name="Math" colour="230">' +
            '<block type="math_number">' + '</block>' +
            '<block type="math_arithmetic">' + '</block>' +
            '<block type="math_single">' + '</block>' +
            '<block type="math_trig">' + '</block>' +
            '<block type="math_constant">' + '</block>' +
            '<block type="math_number_property">' + '</block>' +
            '<block type="math_round">' + '</block>' +
            '<block type="math_on_list">' + '</block>' +
            '<block type="math_modulo">' + '</block>' +
            '<block type="math_constrain">' +
              '<value name="LOW">' +
                '<block type="math_number">' +
                  '<field name="NUM">1</field>' +
                '</block>' +
              '</value>' +
              '<value name="HIGH">' +
                '<block type="math_number">' +
                  '<field name="NUM">100</field>' +
                '</block>' +
              '</value>' +
            '</block>' +
            '<block type="math_random_int">' +
              '<value name="FROM">' +
                '<block type="math_number">' +
                  '<field name="NUM">1</field>' +
                '</block>' +
              '</value>' +
              '<value name="TO">' +
                '<block type="math_number">' +
                  '<field name="NUM">100</field>' +
                '</block>' +
              '</value>' +
            '</block>' +
            '<block type="math_random_float">' + '</block>' +
          '</category>' +
          '<category name="Variables" custom="VARIABLE" colour="330">' + '</category>' +
        '</xml>'
        var blocklyDiv = document.getElementById('blocklyDiv')
        var variablesSetAngle = {
          'message0': 'set Angle to %1',
          'args0': [
            {
              'type': 'input_value',
              'name': 'VALUE'
            }
          ],
          'previousStatement': null,
          'nextStatement': null,
          'colour': 330
        }
        window.Blockly.Blocks['variablesSetAngle'] = {
          init: function () {
            this.jsonInit(variablesSetAngle)
            // Assign 'this' to a variable for use in the tooltip closure below.
            var thisBlock = this
            this.setTooltip(function () {
              return 'Set Angle to "%1".'.replace('%1',
                  thisBlock.getFieldValue('VALUE'))
            })
          }
        }
        var deleySecond = {
          'message0': 'deley %1 seconds',
          'args0': [
            {
              'type': 'field_number',
              'name': 'TIME',
              'value': 0.1,
              'min': 0,
              'max': 1
            }
          ],
          'nextStatement': null,
          'previousStatement': null,
          'colour': 220
        }
        window.Blockly.Blocks['deleySecond'] = {
          init: function () {
            this.jsonInit(deleySecond)
            this.setPreviousStatement(true, 'null')
            this.setNextStatement(true, 'null')
            // Assign 'this' to a variable for use in the tooltip closure below.
            var thisBlock = this
            this.setTooltip(function () {
              return 'Deley "%1". second'.replace('%1',
                  thisBlock.getFieldValue('TIME'))
            })
          }
        }
        window.workspace = window.Blockly.inject(blocklyDiv,
            {toolbox: toolbox})
        if (this.$route.params.queryClientID !== undefined) {
          this.loadProgram()
        }
      }
    },
    armAnimation () {
      var roboticArm = document.getElementById('roboticArm')
      this.height = roboticArm.clientHeight
      this.width = roboticArm.clientWidth
      var scene = new THREE.Scene()
      // var camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 0.1, 10000)
      var aspect = this.width / this.height
      var frustumSize = 550
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
            this.command_angle = this.command_angle % 1000
            this.command_angle = Math.round(this.command_angle)
            this.command_angle += 3
            // this.command_angle = round(this.command_angle)
            this.command_angle = this.command_angle % 1000

            if (this.command_angle > 196) {
              this.direction = false
            }
          } else {
            this.command_angle = this.command_angle % 1000
            this.command_angle = Math.round(this.command_angle)
            this.command_angle -= 3
            this.command_angle = this.command_angle % 1000

            if (this.command_angle < 4) {
              this.direction = true
            }
          }
          // this.command_angle = this.command_angle % 1000
        }
        // console.log(scene)
        scene.children[2].children[4].children[0].children[1].rotation.y = -this.robotic_angle / 180 * 3.1415926
        this.matrix = scene.children[2].children[4].children[0].children[1].matrixWorld
        renderer.render(scene, camera)
      }
    },
    d3js () {
      var that = this
      var n = 200
      // var random = d3.randomNormal(0, 0.2)
      var data = d3.range(n)
      var data2 = d3.range(n)
      var svg = d3.select('svg')
      var margin = {top: 20, right: 50, bottom: 20, left: 50}
      var div = document.getElementById('wrapper')
      var divheight = div.clientHeight
      var divwidth = div.clientWidth
      // console.log('svg.attr(width)')
      // console.log(svg.style("width"))
      var width = divwidth - margin.left - margin.right
      var height = divheight - margin.top - margin.bottom
      var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      var x = d3.scaleLinear()
          .domain([0, n - 1])
          .range([0, width])
      var y = d3.scaleLinear()
          .domain([0, 200])
          .range([height, 0])
      var line = d3.line()
          .x(function (d, i) { return x(i) })
          .y(function (d, i) { return y(d) })
      var line2 = d3.line()
          .x(function (d, i) { return x(i) })
          .y(function (d, i) { return y(d) })
      g.append('defs').append('clipPath')
          .attr('id', 'clip')
        .append('rect')
          .attr('width', width)
          .attr('height', height)
      g.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + y(0) + ')')
          .call(d3.axisBottom(x))
      g.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(y))
      var legendWidth = 100
      var legendHeight = 50

            // clipping to make sure nothing appears behind legend
      svg.append('clipPath')
        .attr('id', 'axes-clip')
        .append('polygon')
          .attr('points', (-margin.left) + ',' + (-margin.top) + ' ' +
                          (width - legendWidth - 1) + ',' + (-margin.top) + ' ' +
                          (width - legendWidth - 1) + ',' + height + ' ' +
                          (width + margin.right) + ',' + height + ' ' +
                          (width + margin.right) + ',' + (height + margin.bottom) + ' ' +
                          (-margin.left) + ',' + (height + margin.bottom))
      var legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(' + (divwidth - legendWidth - 5) + ', 5)')
      legend.append('rect')
        .attr('class', 'legend-bg')
        .attr('width', legendWidth)
        .attr('height', legendHeight)
      legend.append('path')
        .attr('class', 'median-line')
        .attr('d', 'M10,12L35,12')
      legend.append('text')
        .attr('x', 40)
        .attr('y', 17)
        .attr('style', 'font-size: 0.7rem')
        .text('Command')
      legend.append('path')
        .attr('class', 'median-line2')
        .attr('d', 'M10,36L35,36')
      legend.append('text')
        .attr('x', 40)
        .attr('y', 40)
        .attr('style', 'font-size: 0.7rem')
        .text('Sensor')
      g.append('g')
          .attr('clip-path', 'url(#clip)')
        .append('path')
          .datum(data)
          .attr('class', 'line')
        .transition()
          .duration(20)
          .ease(d3.easeLinear)
          .on('start', tick)
      g.append('g')
          .attr('clip-path', 'url(#clip)')
        .append('path')
          .datum(data2)
          .attr('class', 'line2')
        .transition()
          .duration(20)
          .ease(d3.easeLinear)
          .on('start', tick2)
      function tick () {
        // Push a new data point onto the back.
        data.push(that.robotic_angle)
        // Redraw the line.
        d3.select(this)
            .attr('d', line)
            .attr('transform', null)
        // Slide it to the left.
        d3.active(this)
            .attr('transform', 'translate(' + x(-1) + ',0)')
          .transition()
            .on('start', tick)
        // Pop the old data point off the front.
        data.shift()
      }
      function tick2 () {
        // Push a new data point onto the back.
        data2.push(that.command_angle)
        // Redraw the line.
        d3.select(this)
            .attr('d', line2)
            .attr('transform', null)
        // Slide it to the left.
        d3.active(this)
            .attr('transform', 'translate(' + x(-1) + ',0)')
          .transition()
            .on('start', tick2)
        // Pop the old data point off the front.
        data2.shift()
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
