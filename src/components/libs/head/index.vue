<template>
  <div class="head flex-container">
    <div class="logo flex-container">
      <div class="paddingr15 borderr"><img src="/static/img/logo.png" alt="" width="104"></div>
      <span class="fs-18 marginl15">企业官网</span>
    </div>
    <div class="nav flex-container fs-18">
      <div v-for="(item,$index) in navData">
        <a v-if="$index != 2" :href="item.url" v-text="item.name" :class="$index === active && 'active'"></a>
        <a v-if="$index == 2"  v-text="item.name" :class="$index === active && 'active'" @click="prCode = true"></a>
      </div>
    </div>

    <!-- 二维码下载 -->
    <div class="mask flex-container center" v-show="prCodeTo || prCode">
      <div class="downLoad bg-white pos-r flex-container">
        <div class="down flex-container-col" :class="prDefault == item.url && 'active'" @mouseover="changPrUrl(item.url)" v-for="item in prData">
          <div class="flex3 flex-container center">
            <i :class="item.icon" style="line-height:105px;"></i>
          </div>
          <div class="flex1 fs-18 text" v-text="item.name"></div>
        </div>
        <div class="downPr flex-container-col">
          <div class="flex-container center">
            <div class="prBox pos-r flex-container center">
              <div class="pos-r bg-white" style="z-index: 2;padding:3px;">
                <img :src="'/static/img/'+ prDefault" alt="">
              </div>
            </div>
          </div>
          <span class="margint25">手机扫描快速下载</span>
        </div>
        <div class="pos-a right0" style="top:-60px;cursor: pointer;" @click="prShowFn(false)"><i class="baseIcon-roundclose text-white" style="font-size:40px;"></i></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    active:{
      type:Number,
      default:0
    },
    prShow:{
      type:Boolean,
      default:false
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
          url:"#"
        },
        {
          name:"商家入驻",
          url:"/store/index.html"
        }
      ],
      prData:[
        {
          name:"iPhone",
          icon:"baseIcon-iphone",
          url:"pr-iphone.png"
        },
        {
          name:"Android",
          icon:"baseIcon-Android",
          url:"pr-Android.png"
        },
        {
          name:"触屏版",
          icon:"baseIcon-mobile",
          url:"pr-mobile.png"
        },
        {
          name:"WeChat",
          icon:"baseIcon-WeChat",
          url:"pr-WeChat.png"
        }
      ],
      prCode:this.prShow,
      prDefault:"pr-iphone.png"
    }
  },
  ready(){
    this.prCodeTo()
  },
  computed:{
    prCodeTo(){
      return this.prCode = this.prShow;
    }
  },
  methods: {
    changPrUrl: function(url){
      this.prDefault = url;
      // console.log(this.prDefault)
    },
    prShowFn:function(b){
      this.prCode = b;
      this.$emit('emitData',false)
    }
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
  .downLoad{
    box-shadow: 0 5px 25px 0 rgba(255,76,72,0.10);
    border-radius:6px;
    width:1280px;
    padding:50px 60px 40px;
  }
  .downLoad .down{
    width:200px;
    height:200px;
    border:1px solid #fff;
  }
  .downLoad .down i{
    font-size:95px;
    background-image: -webkit-linear-gradient(left top , #FFF8F8 0%, #666666 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color:#666;
  }
  .downLoad .down .text{
    color:#666;
  }
  .downLoad .downPr{
    width:250px;
    margin-left:50px;
  }
  .downLoad .down:hover,.downLoad .down.active{
    border-radius:50%;
    border:1px solid #ff4c48;
    cursor: pointer;
  }
  .downLoad .down:hover i,.downLoad .down.active i{
    background-image: -webkit-linear-gradient(left top , #FFF8F8 0%, #FF4C48 90%);
    color:#ff4c48;
  }
  .downLoad .down:hover .text,.downLoad .down.active .text{
    color:#ff4c48;
  }
  .downLoad .downPr>div{
    width:100%;
    height:250px;
    background:#eeeff4;
    border-radius:6px;
    overflow:hidden;
  }
  .downLoad .downPr>span{
    font-size:26px;
  }
  .downLoad .downPr>div .prBox{
    width:200px;
    height:200px;
    border:1px solid #ff4c48;
  }
  .downLoad .downPr>div .prBox:after{
    z-index: 1;
    content:'';
    position:absolute;
    top:-25px;
    left:-25px;
    right:-25px;
    bottom:-25px;
    background:#eeeff4;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg);   /* IE 9 */
    -moz-transform:rotate(45deg);  /* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg);  /* Opera */
  }
</style>
