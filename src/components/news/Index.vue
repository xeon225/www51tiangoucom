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
<!--             <div>
              <p class="fs-20 text-red">智能零售时代的变革与创新</p>
              <p class="fs-16 text-red">[数字化解读天狗智能商场]</p>
              <p class='margint20'>2018年，天狗网一直致力于将大商实体零售数字化，并以线下数字化，促成线上智能化，以此赋能线下，从而打造线上线下一体化。</p>
              <div class='text-center'><img src='/static/img/new/img-news_6.gif' alt='' width='600' class='margint20' /></div>

              <p class='margint20'>零售业发展到今天，虽然基本要素仍离不开“人货场”三个字，但是在数字化加持的实体零售，往往更具备从用户需求出发，不断做通做透全渠道的优势。</p>
              <p class='margint20'>
                <p class="fs-16 text-red">多触点连接</p>
                <p class="fs-20 text-red">天狗赋能 数字化转型</p>
              </p>

              <p class='margint20'>数字化转型，即利用新一代信息技术，构建数据的采集、传输、存储、处理和反馈的闭环，打通不同层级与不同行业间的数据壁垒，提高行业整体的运行效率，构建全新的数字经济体系。</p>
              <div class='text-center'><img src='/static/img/new/img-news_6_2.png' alt='' width='600' class='margint20' /></div>
              <p class='margint20'>一方面，天狗网致力于多触点连接消费者，为消费者提供更好的购物体验；另一方面，天狗网深入累积运营数据，借由数据调整运营策略，提升实体门店经营效率，不断突破百货商品的数字化难点，并用数字化为实体经营者提供更好的运营支持。</p>

              <p class='margint20'>
                <p class="fs-16 text-red">科技加持</p>
                <p class="fs-20 text-red">智慧零售让交易更简单</p>
              </p>
              
              <p class='margint20'>2018年，大商集团旗下百货商场陆续上线天狗网，实现百货购物7*24不打烊，并逐步打通同品多仓，消费者不仅可以在线上即可选购商场的商品，并且在当地看中缺货的商品，可全国范围内调货，切实做到满意服务；<br>专柜VR的出现，让消费者眼前一亮，在感叹科技魅力的同时，更是让商品至消费者的触达速度先人一步；</p>
              <div class='text-center'><img src='/static/img/new/img-news_6_3.png' alt='' width='600' class='margint20' /></div>
              <p class='margint20'>智能停车场，带给消费者“VIP通道”般的畅快体验，当车辆进入停车场时，自动抬杆识别消费者车辆信息并推送浏览门店及专柜活动信息，实时把控活动，绝不错过优惠；</p>
              <div class='text-center'><img src='/static/img/new/img-news_6_4.png' alt='' width='600' class='margint20' /></div>
              <p class='margint20'>独创的商品吊牌识别技术，替代传统手动录入商品信息的繁琐流程，顾客只需轻轻一扫，即可在专柜自主完成交易……</p>
              <div class='text-center'><img src='/static/img/new/img-news_6_5.png' alt='' width='800' class='margint20' /></div>

              <p class='margint20'>
                <p class="fs-16 text-red">积累、分析、引导</p>
                <p class="fs-20 text-red">运用大数据创造二次营销</p>
              </p>
              
              <p class='margint20'>交易完成并非零售的终点，而是新的起点。每一位消费者从到店至离店，天狗网运用大数据分析创造二次营销最大价值，将积累的用户画像数据、交易数据、行为过程数据，通过先进的智能推送方式和导购任务提醒进行分析指导，让每件商品均可与最具购买意向的消费者相匹配，实现个性化营销。目前，天狗网为全国41个城市的106家百货门店、95家超市门店提供智能零售服务，为6万导购赋予新的销售能力，为超过1000万消费者提供个性化营销服务。</p>
              <p class='margint20'>2018年，天狗网兼收并蓄，深度挖掘数据价值，砥砺奋进，不断创新；2019年，天狗网新起航再创业，以更新更高更卓越的气势，稳立涛头，披荆斩棘，从线上到线下，充分利用大数据打造线上线下一体化“智营”新模式。</p>
               <div class='text-center'><img src='/static/img/new/img-news_6_6.png' alt='' width='800' class='margint20' /></div>
            </div> -->
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
        enL:"TIANGOU",
        enR:"NEWS",
        title:"天狗动态"
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
          enClassName:['TIANGOU','NEWS'],
          className:"天狗动态"
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
