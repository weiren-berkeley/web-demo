<template>
  <div id="home">
    <div>
      <header>
        <nav>
          <div class="layer"></div>
          <div class="nav"  role="tab">
            <a class="nav-link active" href="#">首页</a>
            <a class="nav-link" href="#">线上讲座</a>
            <a class="nav-link" href="#">企业入口</a>
            <a class="nav-link" href="#">联系我们</a>
          </div>
        </nav>
        <div class="logo_title"></div>
        <button class="practice_btn">我要实习</button>
      </header>
      <main>
        <div class="summarize">
          <div class="title">
            <h2>服务概述</h2>
            <span></span>
          </div>
          <ul>
            <li>
              <div>
                <h3>职前培训</h3>
                <p>
                  我们知道，什么才是最适合你的。华丽的自我营销比不上真是沉淀的亮点刻画和真实的特长展现。我们荣誉推出以下超低价格的职前服务: <br>
                  <br>
                  1. 润色简历: 350 USD 月会员或EB会员专享价格，帮助你的简历从格式和内容上全方面满足实习企业的需求，赢得他们的青睐，锁定他们的眼球。<br>
                  <br>
                  2. 模拟面试: 400 USD 两次，由硅谷资深明星导师坐镇，亲自操刀面试的突击问题和自我表述，帮助你从懵懂担忧到自信满满，逐个击破面试难题。
                </p>
              </div>
              <img src="./images/cultivate.png">
            </li>
            <li>
              <img src="./images/internship_program.png">
              <div>
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
            <li>
              <div>
                <h3>后续跟踪</h3>
                <p>
                  实习的结束不代表价值的完结，I-intern为每一个有野心和梦想的你，准备了三重大礼。<br>
                  <br>
                  两种会员将获得企业导签字和实习项目证书，获得 人脉和后续项目的第一手推送，实习表现的佼佼者，甚至有机会获得职场大牛的推荐信以及未来转正获得full time offer的机会。
                </p>
              </div>
              <img src="./images/follow-up.png">
            </li>
          </ul>
        </div>
        <div class="cooperative_enterprise">
          <div class="title">
            <h2>合作企业</h2>
            <span></span>
          </div>
          <div class="cooperativeContent">
            <p>
              我们的实习项目囊括了各领域的世界顶级公司，选择繁多，应有尽有，选择我们，包你满意。以下是部分合作企业：
            </p>
            <img src="./images/logos.png">
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
          <div>
            
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #home{
    max-width: 1440px;
    border:1px solid #ccc;
    margin:auto;
  }
  header{
    position: relative;
    display: flex;
    width:100%;
    height:956px;
    background:url("./images/head_bg.png") no-repeat ;
    background-size: 100% 100%;
    nav{
      display: flex;
      align-items: center;
      width:100%;
      height:90px;
      .layer {
        width: 3.5%;
        height: 70px;
        background:url("./images/layer.png") no-repeat ;
        background-size: 100% 100%;
        margin-left:1.7%;
        margin-top:10px;
      }
      .nav{
        display: flex;
        justify-content: left;
        height: 28px;
        width:45%;
        font-family: PingFangSC;
        font-size: 20px;
        font-weight: 500;
        margin-left:10.4%;
        .active{
          color:#50e3c2;
        }
        a{
          color:#fff;
        }
      }
    }
    .logo_title{
      position: absolute;
      top:314px;
      left:50%;
      margin-left:-22.5%;
      width:45%;
      height:225px;
      background:url("./images/logo_title.png") no-repeat ;
      background-size: 100% 100%;
    }
    .practice_btn{
      position: absolute;
      top:682px;
      left:50%;
      margin-left:-7%;
      width:14.1%;
      height:55px;
      font-size: 24px;
      color:#fff;
      background-color: #50e3c2;
      text-align: center;
      border-radius:10px;
      outline: none;
      border:none;
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
    .summarize{
      margin:0 11.4%;
      ul{
        li{
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom:100px;
          div{
            width:48%;
            text-align: center;
            h3{
              font-family: HYk2gj;
              font-size: 48px;
              color: #50e3c2;
              margin-bottom:56px;
            }
            p{
              font-family: PingFangSC;
              font-size: 20px;
              color: #000000;
            }
          }
          img{
            width:30.2%;
            min-width: 300px;
            height:315px;
          }
        }
      }
    }
    .cooperative_enterprise{
      margin:20px 11.4%;
      .cooperativeContent{
        p{
          display: block;
          width: 742px;
          height: 56px;
          font-family: PingFangSC;
          font-size: 20px;
          text-align: center;
          color: #000000;
          margin:auto;
          margin-bottom:50px;
        }
        img{
          width:100%;
          margin-bottom: 80px;
        }
      }
    }
    .contact_us{
      padding-top:10px;
      background-color: #f6f6f6;
      p{
        display: block;
        margin:auto;
        width: 702px;
        height: 56px;
        font-family: PingFangSC;
        font-size: 20px;
        text-align: center;
        word-break:break-all;
        color: #000000;
      }
    }
  }
</style>
