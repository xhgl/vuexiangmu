<template>
  <div class="m_layout">
    <transition name="fade"><router-view></router-view></transition>
    <footer>
      <ul>
        <router-link to="/mine/now"><li>正在热映</li></router-link>
        <router-link to="/mine/soon"><li>即将上映</li></router-link>
          <router-link to="/mine/ranking"><li>排行榜</li></router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
  import Header from '../Header.vue'
    export default {
    components:{
      Header
    },
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
  footer{
    height: 1rem;
    width: 7.5rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: -1px;
    text-align: center;
    background: #eee;
  }
  footer ul li{
    width: 33.3%;
    float: left;
    line-height: 1rem;
  }
  footer ul a.router-link-active{
    color: orangered;
  }
  /*.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }*/
</style>
