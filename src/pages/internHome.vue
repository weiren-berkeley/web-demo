<template>
    <div id="internHome">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" style="width:3rem;" href="#"><img src="./images/layer.png" class="img-fluid" alt="Responsive image"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="iconfont icon-ego-caidan"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">首页</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">线上讲座</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">企业入口</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">联系我们</a>
              </li>
            </ul>
          </div>
        </nav>
        <button class="btn">我要实习</button>
      </header>
      <main>
        <div class="summarize">
          <div class="title">
            <h2>服务概述</h2>
            <span></span>
          </div>
          <ul class="container">
            <li class="row">
              <div class="col-md-6">
                <h3>职前培训</h3>
                <p>
                  我们知道，什么才是最适合你的。华丽的自我营销比不上真是沉淀的亮点刻画和真实的特长展现。我们荣誉推出以下超低价格的职前服务: <br>
                  <br>
                  1. 润色简历: 350 USD 月会员或EB会员专享价格，帮助你的简历从格式和内容上全方面满足实习企业的需求，赢得他们的青睐，锁定他们的眼球。<br>
                  <br>
                  2. 模拟面试: 400 USD 两次，由硅谷资深明星导师坐镇，亲自操刀面试的突击问题和自我表述，帮助你从懵懂担忧到自信满满，逐个击破面试难题。
                </p>
              </div>
              <img class="col-md-6" src="./images/cultivate.png">
            </li>
            <li class="row">
              <img class="col-md-6" src="./images/internship_program.png">
              <div class="col-md-6">
                <h3>实习项目</h3>
                <p>
                  在完成帮助自己华丽转身的职前培训后，一场含金量十足的企业实战才是你夯实的下一站! 上百家合作企业，横跨硅谷，纽约，西雅图，洛杉矶， 波士顿等商圈，金融，投资，市场，设计，文案，法律，科技，无数实习项目，低廉的申请费用，丰富的实习内容和书本知识无法比拟的超级经历， 为你的未来保驾护航。<br>
                  <br>
                  1. 月会员制: 多个项目申请 ，择优者进行实战锻炼
                  <br>
                  2. EB早鸟加急制: 更快更精准, 马上开始实战新篇章
                </p>
              </div>
            </li>
            <li class="row">
              <div class="col-md-6">
                <h3>后续跟踪</h3>
                <p>
                  实习的结束不代表价值的完结，I-intern为每一个有野心和梦想的你，准备了三重大礼。<br>
                  <br>
                  两种会员将获得企业导签字和实习项目证书，获得 人脉和后续项目的第一手推送，实习表现的佼佼者，甚至有机会获得职场大牛的推荐信以及未来转正获得full time offer的机会。
                </p>
              </div>
              <img class="col-md-6" src="./images/follow-up.png">
            </li>
          </ul>
        </div>
        <div class="cooperativeContent">
          <div class="title">
            <h2>服务概述</h2>
            <span></span>
          </div>
          <p>
            我们的实习项目囊括了各领域的世界顶级公司，选择繁多，应有尽有，选择我们，包你满意。以下是部分合作企业：
          </p>
          <div style="text-align: center">
            <img class="img-fluid" src="./images/logos.png">
          </div>
        </div>
        <div class="contact_us">
          <div class="title">
            <h2>联系我们</h2>
            <span></span>
          </div>
          <p>
            对各类实习感兴趣？想知道如何提升自身背景？还有更多问题？欢迎联系我们，I-intern定会竭力解答你的所有问题哟！
          </p>
          <div class="container">
            <div class="row contact_way">
              <div class="col-md-4 contact_left QR_code">
                <span>关注公众号，获取最新实习资讯</span>
                <i class="iconfont icon-xiangxiajiantou"></i>
                <img src="./images/QR_code_left.png">
              </div>
              <ul class="col-md-4 contact_mid">
                <li class="userName">
                  <input type="text">
                  <span>姓名：</span>
                </li>
                <li class="userEmail">
                  <input type="email">
                  <span>邮箱：</span>
                </li>
                <li class="leave_word">
                  <textarea style="resize:none"></textarea>
                  <span>留言：</span>
                </li>
                <li class="mid_btn">
                  <button type="button">提交</button>
                </li>
              </ul>
              <div class="col-md-4 contact_right QR_code">
                <span>添加客服好友，开启提升之旅</span>
                <i class="iconfont icon-xiangxiajiantou"></i>
                <img src="./images/QR_code_right.png">
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <span>Copyright © 2018 I-intern, LLC.</span>
        <span>info@iintern.com</span>
      </footer>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  *{
    margin:0;
    padding:0;
  }
  ul,ol,li{
    list-style: none;
  }
  #internHome{
  max-width: 1440px;
  margin-left:auto;
  margin-right:auto;
  border:1px solid #ccc;
}
  header{
  position: relative;
  width:100%;
  height:45.6rem;
  background:url("./images/head_bg.png")  ;
  background-size: 100% 100%;
  .btn{
    position: absolute;
    top:30rem;
    left:50%;
    margin-left:-50px;
    border-radius: 5px;
    background-color: #50e3c2;
    color:#fff;
    font-size: 1.5rem;
    padding:5px 20px;
    outline: none;
    border:none;
  }
  nav{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    .navbar-toggler{
      border:none;
      .iconfont{
        color:#50e3c2;
        font-size: 2rem;
      }
    }
    .navbar-nav{
      margin-left:13.5%;
      a{
        color:#fff;
      }
    }
  }
}
  main{
  .title{
    position: relative;
    h2{
      position: relative;
      width: 240px;
      height: 60px;
      font-family: HYk2gj;
      font-size: 60px;
      text-align: center;
      color: #000000;
      margin:100px auto;
      z-index: 2;
    }
    span{
      width:250px;
      height:10px;
      position:absolute;
      left: 50%;
      bottom:-10px;
      z-index: 1;
      margin-left:-125px;
      display: inline-block;
      background-color:#50e3c2;
    }
  }
  p{
    font-family: PingFangSC;
    width:70%;
    margin:auto;
    font-size: 1.2rem;
    color: #000000;
    text-align: center;
  }
  .summarize{
    .container{
      margin:auto;
      li{
        text-align: center;
        margin-top:100px;
        h3{
          font-family: HYk2gj;
          font-size: 2.5rem;
          color: #50e3c2;
          margin-bottom:56px;
        }
      }
    }
  }
  .cooperativeContent{
    p{
      width: 50%;
      margin:auto;
      margin-bottom:50px;
    }
  }
  .contact_us{
    padding-top:10px;
    background-color: #f6f6f6;
    padding-bottom:81px;
    p{
      display: block;
      margin:auto;
      width:70%;
      height: 56px;
      font-family: PingFangSC;
      font-size: 1rem;
      text-align: center;
      word-break:break-all;
      color: #000000;
    }
    .container{
      margin: 50px auto 0;
      .contact_way{
        .QR_code{
          text-align: center;
          margin-top:40px;
          span{
            width: 235px;
            height: 25px;
            font-family: PingFangSC;
            font-weight: 500;
            font-size: 18px;
            color: #000000;
          }
          .iconfont{
            display: block;
            margin:auto;
            font-size:35px;
            color:#50e3c2;
          }
        }
        .QR_code.contact_left{
          margin-bottom:50px;
        }
        .contact_mid{
          li{
            position: relative;
            width: 293px;
            margin:auto;
            input{
              width:100%;
              height: 34px;
              border-radius: 10px;
              border: solid 1px #979797;
              outline:none;
              padding-left:50px;
              background-color:#f6f6f6;
            }
            textarea{
              width: 293px;
              height: 276px;
              border-radius: 10px;
              border: solid 1px #979797;
              outline: none;
              padding-left:50px;
              padding-top:5px;
              background-color:#f6f6f6;
            }
            span{
              position: absolute;
              left:5px;
              top:5px;
              font-weight: 600;
              color:#000;
            }
          }
          li.userEmail{
            margin:17px auto;
          }
          li.mid_btn{
            width: 101px;
            margin:50px auto 0;
            button{
              width:100%;
              height: 36px;
              line-height: 36px;
              border-radius: 10px;
              background-color: #50e3c2;
              outline: none;
              border: none;
              color:#fff;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
  footer{
    background-color: #50e3c2;
    padding:33px 0 23px;
    span{
      display: block;
      width: 266px;
      height: 25px;
      font-weight: 500;
      font-family: PingFangSC;
      text-align: center;
      color: #000000;
      margin:auto;
    }
  }
</style>
