<template>
  <div id="contactUs">
    <div class="artical_title"><a>Contact Us</a></div>
    <div class="author_containter"></div>
    <div class="blogcontainer">
      <div class="author_name"><a>OPARP Team</a></div>
      <div class="blogcontent">
        <div class="">
          <br />
          <p>
            Thank you for visiting us. If you have any advices, please feel free to let us know.
          </p>
          <p>
            weiren@berkeley.edu
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactUs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.artical_title {
  padding-top: 120px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.artical_title_contact_us {
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
