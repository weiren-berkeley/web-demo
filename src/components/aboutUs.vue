<template>
  <div id="aboutUs">
    <div class="artical_title"><a>About Open Architecture Robotics Platform Team</a></div>
    <div class="author_containter"></div>
    <div class="blogcontainer">
      <div class="author_name"><a>UC Berkeley</a></div>
      <div class="blogcontent">
        <div class="">
          <p>The Open Architecture Robotic Platform is a project
          required the team to design a software platform to
          control an associated robotic arm. A robotic arm is made
          by previous students, and sufficient changes are required
          to make it fit our project. The software includes control
          functions and UI design. In general, the project embedded
          control, programming, hardware design knowledge.
          </p>
          <div class="row">
            <div class="col">
            </div>
            <div class="col-8">
              <div class="teampic">
                <img src="../assets/img/team.png">
              </div>
            </div>
            <div class="col">
            </div>
          </div>
          <br/>
          <br/>
          <p>
          After multiple rounds of user research, the team decided to target
          control engineer as audience. After talk with several PhD
          students and professors, it is found that platform they are using
          now cannot serve all needs cheaply and conveniently.
          The most popular competitive product is ROS, as known as Robotics
          Operating System, which is a framework includes tools and libraries
          to control a robot. While ROS provides more solution in low-level tasks
          like sensor access, this project want to provide assistance in
          high-level tasks like arm controller and perception. In conclude,
          our goal is to provide control engineers a low-cost platform with
          all necessary commands that they can directly compose control algorithm
          with them. And they can use the robotic arm to test their theory.
          Basic control commands should be well defined with LabVIEW. In addition,
          a GUI should be provided to user to visually see their code and feedback.
          Moreover, the project is expected to be marketable. To achieve this,
          the team will keep digging other user needs while prototyping.
          For example, the team should consider how to link the needs of
          research to the needs of the industry.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
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
  padding-top: 40px;
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
