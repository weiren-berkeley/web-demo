<template>
  <div id="home">
    <div class="container">

    <div class="row">
      <div class="col">
      </div>
      <div class="col6">
        <div class="teampic">
          <img src="../assets/img/title.png">
        </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col6">
        <div class="teampic">
          <img src="../assets/img/function.png">
        </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-2">
      <a href="/study" class="btn btn-primary btn-lg btn-info btn-block" role="button">Study</a>
      </div>
      <div class="col-md-2">
        <a href="start" class="btn btn-primary btn-lg btn-success btn-block" role="button">Start</a>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerContainer  {
  width: 100%;
  position:fixed;
  padding:10px 10px 0px 0px;
  background: #F8CF48;
}
.teampic img{
  height:auto;
  width: 500px;
  text-align: center;
  padding: 40px 0px 0px 0px;
}

</style>
