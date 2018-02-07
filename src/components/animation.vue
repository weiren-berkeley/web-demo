<template>
  <div id="animation">
    <div class="container" style="padding:2rem;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p class="h4 text-center">Autonomous Driving 3D Animation</p>
          <br>
          <p class="h6 text-right"></p>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10" style="padding: 2rem;border:1px solid #D8D8D8;">
          <br>
          <div class="" style="font-size: 1.07rem;text-align: justify; padding:0.1rem;">
            <p>
              The MPC system has many parameters during the optimization. When designing the MPC system,
              it will be helpful to visualize the parameters in a real time 3D animation. This project
              designs a MPC system about autonomous driving. We build a 3D visualization application based on
              WebGL to research the results of MPC simulation. A truck 3D model was introduced in this application.
              A scene with obstacals is introduced in the application. The application use data from status
              variables, input variables and output variables of MPC system to drive the WebGL animation
              loop to visualize the real-time positions, theta, and so on. The application also set the parameters
              of the WebGL camera to follow the car in real time.
              This is the 3D animation application of this project. On the left side,we can watch the heading angle and the
              steering angle of the first truck. On the right side, we can observe the relation between these three trucks
              and that between trucks and obstacles.
              With the visualization of the MPC results, we can easily watch all of the perameters in real time and then
              check the alghorithm. We can also get feedback of our control system design to improve the efficiency of
              the system. For more detail please visit www.oparp.com/car 
            </p>
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
  </div>
</template>

<script>
export default {
  name: 'animation',
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
