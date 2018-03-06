<template>
  <div class="m_layout">
    <Header @receive="receive"></Header>
    <div class="movie">
      <ul>
        <li v-for="(item,index) in compareVal" :key="index">
          <router-link :to="{name:'derails',params:{sub:item}}" >
            <div class="pic"><img :src="item.images.small" :alt="item.alt"></div>
            <div class="text">
              <h3>{{item.title}}</h3>
              <div class="num"><p>评分</p>{{item.rating.average}}</div>
              <p>类型:<span v-for="cls in item.genres">{{cls}}</span> </p>
              <p>类型:<span v-for="name in item.casts">{{name.name}}</span> </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../Header.vue'
  export default {
    components:{
      Header
    },
    data(){
      return {
        msg:[],
        val:''
      }
    },
    methods:{
      receive(e){
        this.val=e;
      }
    },
    created(){
      let that=this;
      axios({
        method:'get',
        url:'/static/json/movie_top250.json'
      }).then(function (res) {
//        console.log(res.data.subjects);
        that.msg=res.data.subjects;
      },function (err) {

      });
    },
    computed: {
      compareVal() {
        let val = this.val;
        if (val) {
          return this.msg.filter(function (item) {
            return Object.keys(item).some(function (key) {
              return String(item[key]).toLowerCase().indexOf(val) > -1;
            });
          });
        }
        return this.msg;
      }
    }
  }
</script>

<style scoped>
  .movie li{
    width: 100%;
    height: 3.5rem;
    background: #F4F4F4;
    padding: 0.05rem 0.1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
  }
  .movie li .pic{
    height: 100%;
    float: left;
    width: 2rem;
  }
  .movie li .pic img{
    height: 100%;
    width:100%;
  }
  .movie li .text{
    height: 100%;
    width:5.3rem;
    padding-left: 0.2rem;
    padding-top: 0.1rem;
    float: left;
  }
  .movie li .text h3 {
    display: block;
    text-align: left;
  }
  .movie li .text .num{
    height: 1.5rem;
    width: 1.5rem;
    float: right;
    font-size: 0.4rem;
    text-align: center;
  }
  .movie li .text .num p{
    display: block;
    margin: 0;
    width: 100%;
    font-size: 0.16rem;
    color: orangered;
    text-align: center;
  }
  .movie li .text p{
    color: #aaa;
    line-height: 0.32rem;
    display: block;
    width: 3.5rem;
    float: left;
    margin-top: 0.3rem;
  }
  .movie li .text p span{
    margin:0 0.1rem;
  }
</style>
