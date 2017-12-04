<template>
  <div id="start">
    <div class="program">
      <div class="container">
       <div class="row">
         <div class="col-md-3">
           <h4>第一列</h4>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           </p>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           </p>   <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>   <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 </p>
         </div>
         <div class="col-md-5">
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           </p>
         </div>
         <div class="col-md-4">
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {

}
.artical_title {
  padding-top: 120px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.program {
  padding-top: 120px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.author_name {
  padding-right:30px;
  text-align: right;
}
.blogcontainer {
  width: 960px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin:auto;
}
.blogcontent {
  border:1px solid #D8D8D8;
  margin: 20px auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: justify;
}
.teampic img{
  height:auto;
  width: 500px;
  text-align: center;
  padding: 40px 0px 0px 0px;
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
