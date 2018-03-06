<template>

  <div class="m_layout">
    <router-link to="/mine">
    <div class="logo">
      <img src='../assets/images/logo.jpg' alt="">
    </div>
    <h2>来</h2>
    <h2>看</h2>
    <h2><span>电影</span></h2>
    <h2>吧</h2>
    </router-link>
  </div>

</template>

<script>
    export default {
      created(){
        let that=this;
        setTimeout(function () {
          that.$router.push({path:'/mine'})
        },3000)
      }
    }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .m_layout {
    width: 100%;
    /*height: 800px;*/
    /*后续再去掉*/
    /*min-height: 800px;*/
    max-width: 7.5rem;
    min-width: 3.2rem;
    margin: 0 auto;
    background: #fed352;
    -webkit-overflow-scrolling: touch;
    height: 13.3rem;
    overflow: hidden;
  }
   .logo{
    margin: 1.2rem auto 0;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    overflow: hidden;
  }
   .logo img{
    height:100%;
    width:100%
  }
   h2{
    margin-top: 0.5rem;
    line-height: 1.2rem;
    text-align: center;
    font-family: 楷体;
  }
   h2 span{
    font-size: 0.5rem;
    color: black;
  }
</style>
