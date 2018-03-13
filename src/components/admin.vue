<template>
  <div id="admin">
    <div class="container" style="padding:2rem;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p class="h4 text-center">OPARP IoT Console</p>
          <br>
        </div>
      </div>
      <div class="row">
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Client ID</th>
                <th scope="col">Status</th>
                <!-- <th scope="col">User Name</th> -->
                <th scope="col">Created Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in devices">
                <th scope="row" v-text="index + 1"></th>
                <td v-text="item.clientId"></td>
                <td>
                  <button type="button" v-if="item.WebStatus ==='Offline'" v-text="item.WebStatus" class="btn btn-sm btn-secondary"></button>
                  <button type="button" v-if="item.WebStatus ==='Online'" v-text="item.WebStatus" class="btn btn-sm btn-success"></button>
                  <button type="button" v-if="item.WebStatus ==='Controlling'" class="btn btn-sm btn-primary">Control</button>
                </td>
                <!-- <td v-text="item.User"></td> -->
                <td v-text="item.Time"></td>
              </tr>
            </tbody>
          </table>
      </div>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      devices: [],
      name: '',
      content: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var update = () => {
        return this.$http.get('http://api.oparp.com/webclient').then((res) => {
          let oRes = this.$parent.formatRes(res)
          this.devices = oRes
        })
      }
      window.setInterval(update, 200)
    }
  }
}
</script>
<style scoped>
</style>
