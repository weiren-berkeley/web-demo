<template>
  <div id="app">
    <header id="indexHeader">
      <div class="" style="border-bottom: 1px solid #e7e4e4;">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" style="width:12rem;" href="/"><img src="../static/img/logo.png" class="img-fluid" alt="Responsive image"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link text-primary" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="/study">Study</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-primary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </a>
                <div class="dropdown-menu text-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item text-primary" href="/arm">Robotic Arm</a>
                  <a class="dropdown-item text-primary" href="/car0">Autonomous Driving I</a>
                  <a class="dropdown-item text-primary" href="/car2">Autonomous Driving II</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="/aboutUs">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="/contactUs">Contact Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-primary" href="/feedback">Give Us Feedback</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

    </header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footer id="indexFooter">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/study">Study</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contactUs">Contact Us</a>
        </li>
      </ul>
      <br>
      <div class="" style="text-align:center; margin-bottom: 2rem;">
        <p style="font-size: 0.8rem;">Copyright © 2018 OPARP.</p>
      </div>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
