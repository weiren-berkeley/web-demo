<template>
<div id="car">
  <div class="container" style="padding:2rem;">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <p class="h4 text-center">Optimization-based Locally Dynamic Obstacle Avoidance</p>
        <br>
        <p class="h6 text-right">ME 231A Final Project</p>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10" style="padding: 2rem;border:1px solid #D8D8D8;">
        <br>
        <div class="row" style="padding:2rem;">

          <div class="col-md-3" style="text-align:center;">
            <img class="rounded-circle"  src="../assets/img/jinyun.jpg" width="140" height="140">
            <br>
            <br>
            <h2 style="text-align:center; font-size: 25px">Jinyun Zhou</h2>
          </div>
          <div class="col-md-3" style="text-align:center;">
            <img class="rounded-circle"  src="../assets/img/junzeng.jpg" width="140" height="140">
            <br>
            <br>
            <h2 style="text-align:center; font-size: 25px">Jun Zeng</h2>
          </div>
          <div class="col-md-3" style="text-align:center;">
            <img class="rounded-circle"  src="../assets/img/taozhengyang.png" width="140" height="140">
            <br>
            <br>
            <h2 style="text-align:center; font-size: 25px">Taozheng Yang</h2>
          </div>
          <div class="col-md-3" style="text-align:center;">
            <img class="rounded-circle"  src="../assets/img/weiren.png" width="140" height="140">
            <br>
            <br>
            <h2 style="text-align:center; font-size: 25px">Wei Ren</h2>
          </div>
        </div>
        <br>
        <div class="" style="font-size: 1.3rem;text-align: justify; padding:0.1rem;">
          <a>Report: </a>
          <a href="./static/ME231MPCReport.pdf" target="_Blank">Optimization-based locally dynamic obstacle avoidance for autonomous fleet
          </a>
          <br>
          <a>Video: </a>
          <a href="https://youtu.be/ygCt9VUz-YA" target="_Blank">YouTube
          </a>
          <br>
          <a>Animation: </a>
          <a href="/car0" target="_Blank">3D Animation
          </a>
          <br>
          <a>Algorithm Git: </a>
          <a href="https://github.com/mustang66ytz/MPC-fleet-control" target="_Blank">https://github.com/mustang66ytz/MPC-fleet-control
          </a>
          <br>
          <a>Animation Git: </a>
          <a href="https://github.com/weiren-berkeley/web-demo" target="_Blank">https://github.com/weiren-berkeley/web-demo
          </a>
          <br>
          <br>
          <p style="font-size: 1.1rem;">Avoiding obstacles becomes a real concern for autonomous
            driving. In this project, our goal is to utilize MPC to simulate a fleet
            management scenario, where a leading car follows an a predefined
            trajectory and avoid obstacles dynamically by minimizing steering angle,
            and a series of following cars following the leading car with minimal cost
            and state error as a whole.
            <br><br>
            The problem can be briefly summarized as follows: Firstly, a trajectory
            of the leading car’s is generated by MPC, while some obstacles are placed
            in the way and need to be taken into consideration during the path
            planning. To make this problem become solvable, a convexification of
            vehicle’s obstacle constraint and minimizing the steering angle through
            SCP(sequential convex programming) in MPC are both applied.
            Secondly, we simulate following cars to keep reasonable distance between
            itself and the leading one, while avoiding obstacles needs to be taken in
            account. In this part, some scenarios will be tested, such as information’s
            time delay from the leading car. If all works as expected, we will observe
            the well-organized following by the second car and our results can be
            generalized to a fleet of cars.
          </p>
          <br>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.foo()
      // this.foo2()
    })
  },
  methods: {
    foo () {
      console.log('hello')
    }
  }
}
</script>

<style scoped>

</style>
