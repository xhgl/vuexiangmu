<template>
  <div class="top">
    <span class="iconfont">&#xe780;</span>
    <input type="text" placeholder="搜索电影" v-model="val">
    <button class="iconfont" id="btn" @click="lookup">&#xe7b7;</button>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          val:"",
        }
      },
      methods:{
        lookup(){
          this.$emit('receive',this.val);
        }
      }
    }
</script>

<style scoped>
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
  .top input{
    margin-top: 0.15rem;
    margin-left: 0.15rem;
    height: 0.7rem;
    width: 65%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding-left: 0.2rem;
    border-radius: 0.5rem;
    float: left;
  }
  .top #btn{
    background: none;
    border: 0;
    margin-left: 0.15rem;
  }
</style>
