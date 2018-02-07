<template>
  <div id="iot">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'iot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test () {
      this.msg = 'test'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
