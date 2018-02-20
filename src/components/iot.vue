<template>
  <div id="iot">
    <div class="row" id="pwd" style="margin-top:5rem;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
          <div class="form-group">
            <label for="exampleFormControlInput1">Please input password:</label>
            <input type="text" class="form-control" id="name" name="name" v-model="password">
          </div>
        <div style="text-align:right;">
          <button class="btn btn-primary" @click="test_password()" >Submit</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="spacer" id="spacer"></div>
        <div class="block" id="connecting-div"></div>
        <div class="block" id="explorer-div" style="visibility:hidden">
           <div class="settings" id="settings-header-div">
              <p>publish to topic:<input type="text" name="publish-topic" id="publish-topic" value="publish-topic" onchange="updatePublishTopic()"></p>
           </div>
           <div class="settings" id="settings-div">
              <p>string:<input type="text" name="publish-data" id="publish-data" size="45" onchange="updatePublishData()"></p>
           </div>
           <div class="subscribe" id="subscribe-header-div">
              <p>subscribe to topic:<input type="text" id="subscribe-topic" name="subscribe-topic" value="subscribe-topic" onchange="updateSubscriptionTopic()"/><input type="button" id="clear-button" name="clear" value="clear history" onclick="clearHistory()"/></p>
           </div>
           <div class="subscribe" id="subscribe-div">
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as AWS from 'aws-sdk'
import * as AWSIoTData from 'aws-iot-device-sdk'

export default {
  name: 'iot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      region: 'us-east-2',
      poolId: 'us-east-2:5971b76a-f715-468f-acfa-2c67947eb2cf',
      host: 'a21zozqgendyv9.iot.us-east-2.amazonaws.com',
      password: ''
    }
  },
  mounted () {
    // this.test()
  },
  methods: {
    test_password () {
      if (this.password !== '') {
        return this.$http.get('http://api.oparp.com/password', {params: {
          'password': this.password
        }}, { credentials: true })
        .then((res) => {
          let oRes = this.$parent.formatRes(res)
          console.log(oRes)
          if (oRes.message === 'Right') {
            document.getElementById('pwd').style.visibility = 'hidden'
            this.test()
          } else {
            alert('Wrong password!')
          }
          //   this.name = ''
          //   this.content = ''
          //   this.getCommits()
          //   alert('Thank you!')
          // } else {
          //   alert('Comment fail.')
          // }
        })
      }
    },
    test () {
      console.log('Loaded AWS SDK for JavaScript and AWS IoT SDK for Node.js')
      //
      // Remember our current subscription topic here.
      //
      var currentlySubscribedTopic = 'subscribe-topic'
      //
      // Remember our message history here.
      //
      var messageHistory = ''
      //
      // Create a client id to use when connecting to AWS IoT.
      //
      var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1))
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
        debug: true,
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
        document.getElementById('explorer-div').style.visibility = 'visible'
        document.getElementById('subscribe-div').innerHTML = '<p><br></p>'
        messageHistory = ''

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
        document.getElementById('explorer-div').style.visibility = 'hidden'
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
        console.log('message: ' + topic + ':' + payload.toString())
        messageHistory = messageHistory + topic + ':' + payload.toString() + '</br>'
        document.getElementById('subscribe-div').innerHTML = '<p>' + messageHistory + '</p>'
      }

      //
      // Handle the UI for the current topic subscription
      //
      window.updateSubscriptionTopic = function () {
        var subscribeTopic = document.getElementById('subscribe-topic').value
        document.getElementById('subscribe-div').innerHTML = ''
        mqttClient.unsubscribe(currentlySubscribedTopic)
        currentlySubscribedTopic = subscribeTopic
        mqttClient.subscribe(currentlySubscribedTopic)
      }

      //
      // Handle the UI to clear the history window
      //
      window.clearHistory = function () {
        if (confirm('Delete message history?') === true) {
          document.getElementById('subscribe-div').innerHTML = '<p><br></p>'
          messageHistory = ''
        }
      }

      //
      // Handle the UI to update the topic we're publishing on
      //
      window.updatePublishTopic = function () {}

      //
      // Handle the UI to update the data we're publishing
      //
      window.updatePublishData = function () {
        var publishText = document.getElementById('publish-data').value
        var publishTopic = document.getElementById('publish-topic').value
        mqttClient.publish(publishTopic, publishText)
        document.getElementById('publish-data').value = ''
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
      document.getElementById('explorer-div').style.visibility = 'hidden'
      document.getElementById('connecting-div').innerHTML = '<p>attempting to connect to aws iot...</p>'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
