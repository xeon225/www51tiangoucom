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
      <div class="">
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4"><a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i>{{newsItem('className')}}
        </div>
        <div class="padding30">
          <div class="fs-18 flex-container center paddingv10 newsHover" v-for="(item,$index) in listShow.slice((currentPage-1) * pageShowNum,currentPage * pageShowNum)">
            <div class="newsList pos-r paddingl20 text-limit1" style="width: 100%;">
              <div>
                <p><a :href="'/news/index.html?id='+$index+'&amp;cls=newsList'" v-text="item.title"></a></p>
              </div>
              <span class="ellipsis_3-after ellipsis-after" style="display: none;"> ... </span>
            </div>
            <div v-text="item.date.replace(/\//g, '-')" style="min-width: 100px;"></div>
          </div>
        </div>

        <div class="padding30">
          <tg-pagination v-on:sendData='getSonText' :pageSum="pageSum" :pageNum="pageShowNum"></tg-pagination>
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
import tgPagination from '../../components/libs/pagination/index.js';

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
      pageShowNum:20,
      currentPage:1
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
    },
    getSonText (n) {
      this.currentPage = n
    }
  },
  computed:{
    pageSum(){   //新闻总数
      return this.common.newsData().newsList.length
    },
    listShow(){   //新闻数据
      return this.common.newsData().newsList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsList:after{
  content:'';
  position:absolute;
  width:10px;
  height:10px;
  background:#666;
  left:0;
  top:7px;
}
.newsHover .newsList:hover:after{
  background:#ff4c48;
}
.newsHover:hover a{
  color:#ff4c48;
}
.newsHover:hover{
  color:#ff4c48;
}
</style>
