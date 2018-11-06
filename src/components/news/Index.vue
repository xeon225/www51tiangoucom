<template>
  <div id="news">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col hfull left">
        <div style="font-size: 38px;">{{newsItem('enClassName')[0]}} <span class="text-red">{{newsItem('enClassName')[1]}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{newsItem('className')}}</div>
      </div>
    </div>
    <div class="content paddingt40" style="padding-bottom:100px;" v-show="newShow">
      <div class="border">
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4">首页<i class="baseIcon-right marginh10"></i>{{newsItem('className')}}<i class="baseIcon-right marginh10"></i>{{newsItem('title')}}
        </div>
        <div class="padding30">
          <div class="title text-dark pos-r paddingl25 margint10" style="font-size: 28px;"><strong>{{newsItem('title')}}</strong></div>
          <div class="fs-18 text-light" style="margin-top: 60px;">{{newsItem('date')}}</div>
          <div class="bordert margint30 paddingt30 paddingb10">
            <div style="line-height: 22px;" v-html="newsItem('content')">
            </div>
            <div class="text-center">
              <img src="/static/img/new/img-news_default.png" alt="">
            </div>
            <div class="text-center">
              <img src="/static/img/new/img-news_hot_1.jpg" alt="">
            </div>
            <div class="margint20">到大商酒行，品世界好酒，高级法国红酒节，限量三款。</div>
            <div>红酒不宜网购，喝好酒请到酒窖来。</div>
            <div class="text-center">
              <div class="margint20">拉彤城堡</div>
              <img src="/static/img/new/img-news_hot_2.jpg" alt="" class="margint20">
            </div>
            <div class="margint20">源于波尔多核心产区多年蝉联国际大奖<br>
拉彤城堡酒庄位于梅多克中心地带，距离著名的拉菲庄园仅7分钟的路程，始建于1607年，43公顷的葡萄园盛产赤霞珠、美乐和马尔贝克等顶级葡萄。从种植、收获到酿造、贮藏，一切程序都遵循法国传统工艺，陈酿15个月以上。老拉彤城堡酒屡次斩获国际大奖。</div>
            <div class="text-center">
              <div class="margint20">拉戈城堡</div>
              <img src="/static/img/new/img-news_hot_3.jpg" alt="" class="margint20">
            </div>
            <div class="margint20">拿破仑家族百年传承<br>
法国红酒的典范之作<br>
拉戈城堡距今已有300多年历史，位于波尔多东南的法定产区“第一波尔多山谷”。原庄主——蒙特贝罗公爵路易•拿破仑•拉纳，其父及其拿破仑家族多位将军的名字被刻在凯旋门上。拉纳元帅与拿破仑一样，钟情于红酒，将葡萄园LEZONGARS修缮扩建，聘请当时波尔多著名的酿酒大师皮埃尔•卡佐，一起酿造纯粹地道的酒庄酒，一直流传至今。著名的拉戈城堡陈酿干红葡萄酒系列一直以强劲浑厚的风格著称。</div>
            <div class="margint20">金奖酒品 限量发售，贮藏经典 逐年升值。</div>
            <div class="text-center">
              <div class="margint20">老拉彤城堡干红葡萄酒2012</div>
              <img src="/static/img/new/img-news_hot_4.jpg" alt="" class="margint20">
            </div>
            <div class="margint20">
              2014年法国阿基坦大区葡萄酒挑战赛金奖，深宝石红色闪耀夺目，浓郁奶香配合黑加仑气息。<br>

   适合搭配小羊排或牛排。
</div>

<div class="margint20">
老拉彤城堡干红葡萄酒2012+<br>

巴纳城堡干红葡萄酒2013+<br>

精美双支礼盒<br>

原价：1583元   <br>
尊享价：1383元
            </div>
            <div class="text-center">
              <div class="margint20">老拉彤城堡干红葡萄酒2014</div>
              <img src="/static/img/new/img-news_hot_5.jpg" alt="" class="margint20">
            </div>
            <div>
              2016年布鲁塞尔国际葡萄酒大赛金奖。独特的辛烈香气和浓郁的黑色浆果尽显品味优雅。<br>

   适合搭配烤肉类食物。
</div>

<div class="margint20">


老拉彤城堡干红葡萄酒2014+巴纳城堡干红葡萄酒2013+精美双支礼盒<br>

原价：1583元  <br>

尊享价：1383元
            </div>
            <div class="text-center">
              <div class="margint20">拉戈城堡陈酿干红葡萄酒2013</div>
              <img src="/static/img/new/img-news_hot_6.jpg" alt="" class="margint20">
            </div>
            <div class="margint20">
              优雅与强劲、细致与浓厚以巧妙的姿态结合在一起。多层次的芳香，带有成熟黑加仑子，辛辣的香草味和紫罗兰香气。回甘悠扬。<br>

   可搭配炖肉、烤鸡。

</div>

<div class="margint20">

拉戈城堡陈酿干红葡萄酒2013+巴纳城堡干红葡萄酒2013+精美双支礼盒<br>

原价：983元    <br>

尊享价：783元

</div>

<div class="margint50 text-right">



数量有限，购完即止。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!newShow" class="text-center" style="margin:130px 0;">
      <img src="/static/img/img-404.png" alt="">
      <div class="margint50 fs-20">很抱歉，您所访问的页面从地球消失了…</div>
      <div class="badge pill red big margint30" style="font-size: 30px;background: ##FF8A88;    padding: 21px 40px;"><a href="/index.html" class="text-white">返回首页</a></div>
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
        enL:"TIANGOU",
        enR:"NEWS",
        title:"天狗商务动态"
      },
      newShow:false
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
        // console.log(2)
        // return '1111'
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
</style>
