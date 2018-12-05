<template>
  <div id="list">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col left">
        <div style="font-size: 38px;">{{newsItem('enClassName')[0]}} <span class="text-red">{{newsItem('enClassName')[1]}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{newsItem('className')}}</div>
      </div>
    </div>
    <div class="content paddingt40" style="padding-bottom:100px;" v-show="listShow.length > 0">
      <div class="border">
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4"><a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i>{{newsItem('className')}}<i class="baseIcon-right marginh10"></i><strong>{{newsItem('title')}}</strong>
        </div>
        <div class="padding30">
          <div v-for="item in listShow.slice(currentPage * pageShowNum,(currentPage+1) * pageShowNum)" v-text="item.title"></div>

          
          <div class="margint50">
            {{currentPage * pageShowNum}} +++ {{(currentPage+1) * pageShowNum}}
            <span class="padding20" v-for="($index,item) in pageNum" v-text="item+1" @click="currentPage = item"></span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="listShow.length === 0" class="text-center" style="margin:130px 0;">
      <img src="/static/img/img-404.png" alt="">
      <div class="margint50 fs-20 text-light">很抱歉，您所访问的页面从地球消失了…</div>
      <div class="badge pill red big margint30" style="font-size: 30px;background: #FF8A88;padding: 21px 40px;box-shadow: 0 5px 25px 0 rgba(255,138,136,0.25);"><a href="/index.html" class="text-white">返回首页</a></div>
    </div>



    <!-- 底部导航 -->
    <tg-foot></tg-foot>
  </div>
</template>

<script>
import Vue from 'vue';

import tgHead from '../../components/libs/head/index.js';
import tgFoot from '../../components/libs/foot/index.js';

export default {
  name: 'List',
  data () {
    return {
      msg: {
        enL:"TIANGOU",
        enR:"NEWS",
        title:"天狗动态"
      },
      newShow:false,
      pageShowNum:3,
      currentPage:0,
    }
  },
  mounted() {
    // this.newsData = this.common.newsData();   //新闻数据
    // this.newsId = this.common.getUrlKey('id'); //取新闻ID
    // this.newsCls = this.common.getUrlKey('cls'); //取新闻类别
    // console.log(this.newsId,this.newsData[this.newsCls])
  },
  methods: {
    isInArray(arr,value){
      for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
          return true;
        }
      }
      return false;
    },
    newsItem(name){
      let id = this.common.getUrlKey('id'); //取新闻ID
      let data = this.common.newsData();  //新闻数据
      let cls = this.common.getUrlKey('cls'); //取新闻类别
      let newsData = data[cls];
      if (data[cls] && newsData[id]){
        // console.log(newsData[id])
        this.newShow = true;
        return newsData[id][name];
      } else {
        this.newShow = false;
        let data = {
          enClassName:['TIANGOU','NEWS'],
          className:"天狗动态"
        }
        return data[name]
      }
      // return newsData[id][name];
    }
  },
  computed:{
    listShow(){
      // console.log(Array.from({length:6}, (v,k) => k+1))
      return this.common.newsData().temp
    },
    pageNum(){
      let that = this;
      let n = that.listShow.length;
      let p = that.pageShowNum;
      console.log(Array.from({length:Math.ceil(n/p)}, (v,k) => k))
      return Array.from({length:Math.ceil(n/p)}, (v,k) => k)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  line-height: 36px;
}
.title:before{
  content:'';
  position: absolute;
  width:8px;
  height: 36px;
  background: #ff4c48;
  left:0;
  top:0;
}
</style>
