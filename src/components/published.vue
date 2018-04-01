<template>
  <div id="published">
    <div class="container" style="padding:2rem;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p class="h4 text-center">OPARP User's Program</p>
          <br>
        </div>
      </div>
      <div class="card" style="margin-top:10px;" v-for="(item, index) in items">
        <div class="card-header">
          <div class="row">
            <div class="col-md-6">
              User's program
            </div>
            <div class="col-md-3" v-text="item.yourName">
            </div>
            <div class="col-md-3" v-text="item.time">
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title" v-text="item.projectName"></h5>
          <p class="card-text" v-text="item.description"></p>
          <router-link :to="{ name: 'startIoT', params: { queryClientID: item.clientID }}"><a href="" class="btn btn-primary">
            Go to study
          </a></router-link>

        </div>
      </div>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: 'published',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [],
      name: '',
      content: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      return this.$http.get('http://api.oparp.com/published').then((res) => {
        let oRes = this.$parent.formatRes(res)
        this.items = oRes
      })
    }
  }
}
</script>
<style scoped>
</style>
