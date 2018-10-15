<template>
  <div class="head flex-container">
    <div class="logo flex-container">
      <div class="paddingr15 borderr"><img src="../../../images/logo.png" alt="" width="104"></div>
      <span class="fs-18 marginl15">企业官网</span>
    </div>
    <div class="nav flex-container fs-18">
      <div v-for="(item,$index) in navData"><a :href="item.url" v-text="item.name" :class="$index === active && 'active'"></a></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    active:{
      type:Number,
      default:0
    }
  },
  data: function(){
  return {
    navData:[
        {
          name:"首页",
          url:"/index.html"
        },
        {
          name:"产品介绍",
          url:"/store/about.html"
        },
        {
          name:"下载APP",
          url:"/index.html"
        },
        {
          name:"商家入驻",
          url:"/store/index.html"
        }
      ]
    }
  },
  events:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    height:70px;
  }
  .head .nav>div{
    margin-left:100px;
  }
  .head .nav a{
    color:#333;
  }
  .head .nav a.active,.head .nav a:hover{
    color:#ff4c48;
  }
</style>
