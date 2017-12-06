<template>
  <div id="feedback">
    <div class="container" style="padding:2rem;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p class="h4 text-center">Customer Review</p>
          <br>
        </div>
      </div>
      <div class="row" v-for="item in commits">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card" >
            <div class="card-body">
              <h4 class="card-title" v-text="item.name"></h4>
              <h6 class="card-subtitle mb-2 text-muted">User Feedback</h6>
              <p class="card-text" v-text="item.content"></p>
              <div style="text-align:right;">
                <a class="card-link" v-text="item.date"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <form action="" method="post" id="form1">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Give Us Feedback</label>
              <textarea class="form-control" id="content" name="content" rows="4" v-model="content"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">User Name</label>
              <input type="text" class="form-control" id="name" name="name" v-model="name">
            </div>
          </form>
          <div style="text-align:right;">
            <button class="btn btn-primary" @click="commit()" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'feedback',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      commits: [],
      name: '',
      content: ''
    }
  },
  mounted () {
    this.getCommits()
    this.event1()
  },
  methods: {
    event1 () {
      document.getElementById('form1').addEventListener('submit', function (event) {
        event.preventDefault()
      })
    },
    commit () {
      return this.$http.post('http://fangshan.bjtcsj.com/api/comment', {
        name: this.name,
        content: this.content
      }, {emulateJSON: true})
      .then((res) => {
        let oRes = this.formatRes(res)
        if (oRes.code === 200) {
          this.name = ''
          this.content = ''
          this.getCommits()
          alert('Thank you!')
        } else {
          alert('Comment fail.')
        }
      })
    },
    formatRes (res) {
      let oRes = (typeof res.body === 'string') ? JSON.parse(res.body) : res.body
      return oRes
    },
    getCommits () {
      return this.$http.get('http://fangshan.bjtcsj.com/api/comments').then((res) => {
        let oRes = this.formatRes(res)
        if (oRes.code === 200) {
          this.commits = oRes.commentList
        } else {
        }
      })
    }
  }
}
</script>
<style scoped>
.row {
  padding-bottom: 10px;
}
.threescene {
  width: auto;
  height: auto;
}
.artical_title {
  padding-top: 100px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.program {
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  /*font-weight: bold;*/
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
</style>
