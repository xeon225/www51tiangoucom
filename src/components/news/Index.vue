<template>
  <div id="news">
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
    <div class="content paddingt40" style="padding-bottom:100px;" v-show="newShow">
      <div class="border">
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4"><a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i><a href="/news/list.html">{{newsItem('className')}}</a><i class="baseIcon-right marginh10"></i><strong>{{newsItem('title')}}</strong>
        </div>
        <div class="padding30">
          <div class="title text-dark pos-r paddingl25 margint10" style="font-size: 28px;"><strong>{{newsItem('title')}}</strong></div>
          <div class="fs-18 text-dark" style="margin-top: 30px;height:25px;line-height: 25px;">{{newsItem('source')}}</div>
          <div class="fs-18 text-light font-lighter" style="margin-top: 10px;">{{newsItem('date')}}</div>
          <div class="bordert margint30 paddingt30 paddingb10 strong text-dark flex-container center">
            <div class="lh-22" :style="newClass === 'newsList' && 'width: 980px;'" v-html="newsItem('content')">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!newShow" class="text-center" style="margin:130px 0;">
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
  name: 'News',
  data () {
    return {
      msg: {
        enL:"DASHANG TIANGOU",
        enR:"NEWS",
        title:"大商天狗网动态"
      },
      newShow:false,
      newClass:''
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
      this.newClass = (cls === 'newsList' && cls);
      let newsData = data[cls];
      if (data[cls] && newsData[id]){
        // console.log(newsData[id])
        this.newShow = true;
        return newsData[id][name];
      } else {
        this.newShow = false;
        let data = {
          enClassName:['DASHANG TIANGOU','NEWS'],
          className:"大商天狗网动态"
        }
        return data[name]
      }
      // return newsData[id][name];
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
.lh-22{
  line-height: 22px;
}
</style>
