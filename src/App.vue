<template>
  <div id="app">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0" :prShow="pr" @emitData='getData'></tg-head>
    </div>
    <!-- banner图 -->
    <div class="pos-r flex-container center" style="min-width:1280px;">
      <div class="content pos-a flex-container top" style="top:60px;left:50%;margin-left:-640px;">
        <div>
          <img src="/static/img/text-01.png" width="582" alt="">
        </div>
        <div @click="prChange()" style="cursor: pointer;"><img src="/static/img/download-app.png" alt="" width="357"></div>
      </div>
      <img src="/static/img/banner-index.png" alt="" width="100%">
    </div>
    <!-- 产品介绍 -->
    <div class="content bg-white pos-r shadow" style="margin-top:-120px;">
      <div class="flex-container">
        <div class="flex1 storePro one" v-for="item in storeProOne">
          <div class="flex-container center storeAfter pos-r">
            <div class="pos-r">
              <i :class="(isInArray(browser_2,browserA) && 'iconHover') +' '+ item.icon" :style="!isInArray(browser_2,browserA) ? item.color : item.colorIE"></i>
              <div class="pos-a top0 right0 left0 bottom0"></div>
            </div>
          </div>
          <div class="text-center">
            <div class="paddingb5" style="font-size: 24px;" v-text="item.name"></div>
            <div class="text-light fs-18 noHover" v-html="item.enName"></div>
            <div class="fs-18 hover paddingh20" v-text="item.content"></div>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex1 storePro" v-for="item in storeProTwo">
          <div class="flex-container center storeAfter pos-r">
            <div class="pos-r">
              <i :class="(isInArray(browser_2,browserA) && 'iconHover') +' '+ item.icon" :style="!isInArray(browser_2,browserA) ? item.color : item.colorIE"></i>
              <div class="pos-a top0 right0 left0 bottom0"></div>
            </div>
          </div>
          <div class="text-center">
            <div class="paddingb5" style="font-size: 24px;" v-text="item.name"></div>
            <div class="text-light fs-18 noHover" v-html="item.enName"></div>
            <div class="fs-18 hover paddingh20" v-text="item.content"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 天狗商务动态 -->
    <div class="content" style="margin-top:60px;">
      <div style="font-size: 38px;">天狗<span class="text-red">商务动态</span></div>
      <div class="fs-18 text-light margint5">TIANGOU NEWS</div>
      <div class="flex-container vfull" style="margin-top:40px;">
        <div class="flex-container vfull shadow padding30" style="width:750px;">
          <div style="width:280px;">
            <img src="/static/img/new/img-new_1.png" width="280" height="205" alt="">
          </div>
          <div class="marginl20 flex1" :class="!isInArray(browser_1,browserA) && 'flex-container-col'">
            <div :class="!isInArray(browser_1,browserA) ? 'text-limit2' : 'ellipsis ellipsis_1'" style="font-size:24px;">
              <div><p><a href="/news/index.html">大商集团副总裁、天狗网总裁刘思军出任大商集团总裁大商集团副总裁、天狗网总裁刘思军出任大商集团总裁</a></p></div>
              <span class="ellipsis_1-after ellipsis-after" v-show="isInArray(browser_1,browserA)"> ... </span>
            </div>
            <div class="fs-18 text-dark" :class="!isInArray(browser_1,browserA) ? 'text-limit3' : 'margint15 ellipsis ellipsis_2'" style="width:100%"><div><p>大商集团召开公司股东会，产生八届一次董事会监事会及高管。记者获悉，大商集团副总裁、天狗网总裁刘思军履新，出任大商集团总裁。大商集团召开公司股东会，产生八届一次董事会监事会及高管。记者获悉，大商集团副总裁、天狗网总裁刘思军履新，出任大商集团总裁。</p></div><span class="ellipsis_2-after ellipsis-after" v-show="!browser"> ... </span></div>

            <div class="flex-container fs-16" :class="!isInArray(browser_1,browserA) ? 'margint20' : 'margint30'" style="width:100%">
              <div class="text-dark">来源：联商快讯  2016/04/28</div>
              <span><a href="" class="text-red">MORE</a></span>
            </div>
          </div>
        </div>
        <div class="flex1 paddingh30 paddingv25 shadow marginl30 flex-container-col vfull">
          <div class="fs-18 flex-container center" v-for="item in [0,1,2,3,4]">
            <div class="newsList pos-r paddingl20"  :class="!isInArray(browser_1,browserA) ? 'text-limit1' : 'ellipsis ellipsis_3'" style="width:100%">
              <div><p>
                <a href="">中国连锁经营协会公布2016年度行业百强榜单中国连锁经营协会公布2016年度行业百强榜单</a>
              </p></div>
              <span class="ellipsis_3-after ellipsis-after" v-show="isInArray(browser_1,browserA)"> ... </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 天狗2017大数据 -->
    <div class="dataReport" style="padding-bottom:75px;">
      <div class="content">
        <div style="font-size: 38px;">天狗2017<span class="text-red">大数据</span></div>
        <div class="fs-18 text-light margint5">TIANGOU DATA ANNUAL REPORT</div>
        <div class="flex-container text-center margint50">
          <div class="flex1" v-for="(item,$index) in iconReportData">
            <div class="flex-container center bottom" style="height:120px;">
              <div class="iconReport flex-container center" :class="$index == iconReportActive && 'active'"><i :class="item.icon"></i></div>
            </div>
            <div class="margint25" style="font-size:24px;color:#151515;"><span class="text-red" style="font-size: 36px;" v-text="item.name"></span> {{item.pi}}</div>
            <div class="fs-18 text-dark margint5" v-text="item.content"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <tg-foot></tg-foot>
  </div>
</template>

<script>
import Vue from 'vue';

import tgHead from './components/libs/head/index.js';
import tgFoot from './components/libs/foot/index.js';

export default {
  name: 'App',
  data: function(){
    return {
      pr:false,
      storeProOne:[
        {
          name:"电子会员",
          icon:"baseIcon-icon_1",
          enName:"Electronic member",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #F366B1 90%);",
          colorIE:"color:#F366B1",
          content:"会员卡电子移动化，随时在线积分查询。积分可用于门店商品、高额抵值券的兑换。"
        },
        {
          name:"专柜收银",
          icon:"baseIcon-icon_2",
          enName:"Counters cashier",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26A8FF 90%);",
          colorIE:"color:#26A8FF",
          content:"取代专柜开票，顾客款台排队结算的模式。通过天狗网完成交易支付并提货，购物方面又快捷。"
        },
        {
          name:"云货架",
          icon:"baseIcon-icon_3",
          enName:"Shelf clouds",
          color:"background-image: -webkit-linear-gradient(left bottom , rgb(255, 255, 255) 0%, #BC65E4 90%);",
          colorIE:"color:#BC65E4",
          content:"实体门店在线24小时营业，货源品质有保障。专柜的品质，电商的价格。"
        },
        {
          name:"精准营销",
          icon:"baseIcon-icon_4",
          enName:"Precision marketing",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF9800 90%);",
          colorIE:"color:#FF9800",
          content:"通过会员、交易、商品的电子化，完善顾客画像。通过大数据分析，实现精准营销及推送。"
        }
      ],
      storeProTwo:[
        {
          name:"智能停车",
          icon:"baseIcon-icon_5",
          enName:"Smart parking",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #6ED232 90%);",
          colorIE:"color:#6ED232",
          content:"智能识别，移动支付。享受购物送停车券，积分支付停车费。购物出行方便多多。"
        },
        {
          name:"扫码购",
          icon:"baseIcon-icon_6",
          enName:"Sweep shopping",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF5B00 90%);",
          colorIE:"color:#FF5B00",
          content:"通过天狗网实现现场扫描超市商品条码加入线上购物车，完成支付后即可离店，摆脱排队结账烦恼。"
        },
        {
          name:"极速达",
          icon:"baseIcon-icon_7",
          enName:"Fast delivery",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26D0C8 90%);",
          colorIE:"color:#26D0C8",
          content:"超市门店提供3公里范围内极速送配送服务，生鲜果蔬新鲜到家。"
        },
        {
          name:"收藏间",
          icon:"baseIcon-icon_8",
          enName:"The collection between",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF4C48 90%);",
          colorIE:"color:#FF4C48",
          content:"购物时有点犹豫？商品加入收藏间，降价活动随时了解。"
        }
      ],
      iconReportData:[
        {
          name:"69,054,688",
          pi:"UV",
          icon:"baseIcon-icon_10",
          content:"全年平台访问总额"
        },
        {
          name:"1000万+",
          pi:"人",
          icon:"baseIcon-icon_1",
          content:"注册天狗会员数"
        },
        {
          name:"5987584",
          pi:"人",
          icon:"baseIcon-icon_9",
          content:"全年交易人数"
        },
        {
          name:"12.2亿",
          pi:"元",
          icon:"baseIcon-icon_6",
          content:"天狗移动支付交易额"
        },
        {
          name:"12.1亿",
          pi:"元",
          icon:"baseIcon-icon_4",
          content:"精准营销增量交易额"
        }
      ],
      iconReportActive:0,
      browser:true,
      browserA:'',
      browser_1:['FF','IE','Edge'],
      browser_2:['IE','Edge']
      // browserA:['Opera','FF','Chrome','Safari','IE','Edge']
    }
  },
  mounted() {
    // setTimeout(this.count(),1000);
    window.setInterval(this.count,3000);
    this.browser = this.common.browserB();
    this.browserA = this.common.browserA();
    console.log(this.browserA)
  },
  methods: {
    prChange(){
      this.pr = true;
    },
    getData(data){
      this.pr = data;
    },
    count(){
      var n = this.iconReportActive;
      if (n < 4) {
        this.iconReportActive = this.iconReportActive + 1;
      } else {
        this.iconReportActive = 0;
      }
    },
    isInArray(arr,value){
      for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
          return true;
        }
      }
      return false;
    }
  }
}
</script>

<style>
.storePro>div:first-child{
  height:160px;
}
.storePro>div:last-child{
  height:140px;
}

.storePro .hover{
  display:none;
}
.storePro:hover{
  background-image: linear-gradient(-47deg, #FF4C48 0%, #FFB0A0 100%);
  color:#fff;
  border-radius:6px;
  cursor: pointer;
}
.storePro.one{
  margin-bottom:-30px;
}
.storePro.one:hover{
  margin-bottom:0px;
  margin-top:-30px;
}
.storePro i{
  font-size: 60px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 65px;
}
.storePro:hover .noHover{
  display:none;
}
.storePro:hover .hover{
  display:block;
}
.storePro:hover i{
  background-image: -webkit-linear-gradient(left top , white, white) !important;
}
.storePro:hover i.iconHover{
  color:#fff !important;
}
.storePro:hover .storeAfter:after{
  background:#fff;
}
.storePro .storeAfter:after{
  content:'';
  position: absolute;
  left:50%;
  margin-left:-10px;
  bottom:20px;
  width:20px;
  height:3px;
  background:#ebebeb;
}

.newsList:after{
  content:'';
  position:absolute;
  width:10px;
  height:10px;
  background:#666;
  left:0;
  top:7px;
}
.newsList:hover:after{
  background:#ff4c48;
}
.newsList:hover a{
  color:#ff4c48;
}
.dataReport{
  background-color: #FFF6F6;
  margin-top:60px;
  padding-top:60px;
  background-image: url(/static/img/bg-report_1.png), url(/static/img/bg-report_2.png);
  background-position: right top,left bottom; 
  background-repeat: no-repeat, no-repeat; 
}
.dataReport .iconReport{
  width:100px;
  height:100px;
  background: #fff;
  box-shadow: 0 5px 25px 0 rgba(255,76,72,0.10);
  border-radius:50%;
  font-size:44px;
}
.dataReport .iconReport i{
  background-image: linear-gradient(left top, #FFF8F8 0%, #FF4C48 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color:#ff4c48;
  line-height: 65px;
}
.dataReport .iconReport.active{
  width:120px;
  height:120px;
  background-image: linear-gradient(-133deg, #FFB0A0 0%, #FF4C48 100%);
  font-size:55px;
  transition: width 0.3s,height 0.3s,font-size 0.3s,background-image 0.3s;
}
.dataReport .iconReport.active i{
  background-image: linear-gradient(left top, #fff 0%, #fff 100%);
  color:#fff;
}

</style>
