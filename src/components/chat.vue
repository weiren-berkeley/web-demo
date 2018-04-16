<template>
  <div id="chat">

  </div>
</template>
<script>
// import * as slack from 'slack'

export default {
  name: 'chat',
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
    this.publish()
  },
  methods: {
    publish () {
      // const Slapp = require('slapp')
      // bot.api.test({hyper:'card'}).then(console.log)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
