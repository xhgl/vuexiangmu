<template>
  <div class="m_layout clearfix">
    <div class="top">
      <a class="iconfont" href="javascript:window.history.back();">&#xe8a4;</a>
      <h3>详情</h3>
      <button class="iconfont" id="btn">&#xe780;</button>
    </div>
    <div class="pic">
      <img :src="msg.images.small" alt="">
    </div>
    <div class="text">
      <h3>{{msg.title}}</h3>
      <p><span class="bgi" ref="bgi"></span><i>评分:</i><em>{{msg.rating.average}}</em></p>
      <div class="num">评分人数:<span>{{msg.rating.stars}}</span></div>
      <p>类型/片长<br><span v-for="p in msg.genres ">&nbsp;{{p}}</span></p>
      <p>上映时间:<span class="time">{{msg.year}}</span></p>
    </div>
    <div class="btn">
      <button>相看</button>
      <button>评分</button>
    </div>
    <div class="actor">
      <h3 style="line-height: 1rem;">演员表</h3>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <!--<img :src="director.avatars.small" alt="">-->
          <img src="../../assets/images/celebrity-default-small.png" alt="">
          <p>导演</p>
          <p>{{director.name}}</p>
        </swiper-slide>
        <swiper-slide v-for="(cast,index) in msg.casts" :key="index">
          <!--<img :src="cast.avatars.small" alt="">-->
          <img src="../../assets/images/celebrity-default-small.png" alt="">
          <p>演员</p>
          <p>{{cast.name}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="footer">
      优惠购票
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      name:'derails',
      components: {
        swiper,
        swiperSlide
      },
      data(){
        return {
          msg:this.$route.params.sub,
          director:this.$route.params.sub.directors[0],
          swiperOption:{
            slidesPerView:2.5,
            spaceBetween:15,
          },
        }
      },
      mounted(){
        let ave = parseInt(10 - Number(this.msg.rating.average)) * -0.45+"rem";
        this.$refs.bgi.style.backgroundPosition = "0rem "+ave;
      }
    }
</script>

<style scoped>
  .m_layout {
    width: 100%;
    /*height: 800px;*/
    /*后续再去掉*/
    /*min-height: 800px;*/
    max-width: 7.5rem;
    min-width: 3.2rem;
    margin: 1rem auto 1rem;
    -webkit-overflow-scrolling: touch;
  }
  img{
    height: 100%;
    width: 100%;
  }
  .top{
    position: fixed;
    top: 0;
    height: 1rem;
    width: 7.5rem;
    background: #31ff78;
  }
  .top .iconfont{
    display: block;
    height: 1rem;
    width: 1rem;
    font-size: 0.44rem;
    text-align: center;
    line-height: 1rem;
    float: left;
  }
  .top h3{
    display: block;
    width: 65%;
    float: left;
    line-height: 1rem;
    text-align: center;
  }
  .top #btn{
    background: none;
    border: 0;
    margin-left: 0.3rem;
  }
  .pic{
    width: 2.5rem;
    height: 3.5rem;
    float: left;
    padding: 0.2rem 0.1rem;
    background: #eee;
  }
  .text{
    width:5rem;
    height: 3.5rem;
    float: left;
    padding: 0.2rem 0.1rem;
    background: #eee;
  }
  .text h3{
    font-size: 0.4rem;
  }
  .text p{
    margin-top: 0.05rem;
    display: block;
    font-size: 0.32rem;
  }
  .text p .bgi{
    display: inline-block;
    height: 0.42rem;
    width: 2.2rem;
    background: url("../../assets/images/ic_rating_m.png") no-repeat;
    background-size: 100%;
  }
  .text p span{
    font-size: 0.24rem;
    color: #aaa;
  }
  .text p i{
    color: orangered;
    font-style: normal;
    margin-left: 0.5rem;
  }
  .text p em {
    margin-left: 0.2rem;
  }
  .text p .time{
    font-size: 0.32rem;
    margin-left: 0.2rem;
  }
  .text .num{
    margin-top: 0.1rem;
    color:#aaa;
  }
  .btn{
    height: 1rem;
    width: 7.5rem;
    background: #eee;
    clear: both;
  }
  .btn button{
    height: 0.7rem;
    width: 1.8rem;
    font-size: 0.32rem;
    border: 1px solid #ddd;
    background: #31ff78;
    border-radius: 0.2rem;
    color: white;
  }
  .btn button:nth-child(1){
    margin-left: 1rem;
  }
  .btn button:nth-child(2){
    float: right;
    margin-right: 1rem;
  }
  .actor{
    height:6rem;
    width: 100%;
    background: #eee;
    margin-top: 0.32rem;
  }
  .actor p{
    text-align: center;
  }
  .footer{
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 7.5rem;
    background: #ffc940;
    text-align: center;
    line-height: 1rem;
    z-index: 999;
  }
</style>
