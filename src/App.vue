<template>
  <div id="app">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <!-- banner图 -->
    <div class="pos-r flex-container center" style="min-width:1280px;">
      <div class="content pos-a flex-container top" style="top:60px;">
        <div>
          <img src="/static/img/text-01.png" width="582" alt="">
        </div>
        <div><img src="/static/img/download-app.png" alt="" width="357"></div>
      </div>
      <img src="/static/img/banner-index.png" alt="">
    </div>
    <!-- 产品介绍 -->
    <div class="content bg-white pos-r shadow" style="margin-top:-120px;">
      <div class="flex-container">
        <div class="flex1 storePro one" v-for="item in storeProOne">
          <div class="flex-container center storeAfter pos-r">
            <div class="pos-r">
              <i :class="item.icon" :style="item.color"></i>
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
              <i :class="item.icon" :style="item.color"></i>
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
  </div>
</template>

<script>
import Vue from 'vue';

import tgHead from './components/libs/head/index.js';

export default {
  name: 'App',
  data: function(){
    return {
      storeProOne:[
        {
          name:"电子会员",
          icon:"baseIcon-icon_1",
          enName:"Electronic<br>member",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #F366B1 90%);",
          content:"会员卡电子移动化，随时在线积分查询。积分可用于门店商品、高额抵值券的兑换。"
        },
        {
          name:"专柜收银",
          icon:"baseIcon-icon_2",
          enName:"Counters<br>cashier",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26A8FF 90%);",
          content:"取代专柜开票，顾客款台排队结算的模式。通过天狗网完成交易支付并提货，购物方面又快捷。"
        },
        {
          name:"云货架",
          icon:"baseIcon-icon_3",
          enName:"Shelf<br>clouds",
          color:"background-image: -webkit-linear-gradient(left bottom , rgb(255, 255, 255) 0%, #BC65E4 90%);",
          content:"实体门店在线24小时营业，货源品质有保障。专柜的品质，电商的价格。"
        },
        {
          name:"精准营销",
          icon:"baseIcon-icon_4",
          enName:"Precision<br>marketing",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF9800 90%);",
          content:"通过会员、交易、商品的电子化，完善顾客画像。通过大数据分析，实现精准营销及推送。"
        }
      ],
      storeProTwo:[
        {
          name:"智能停车",
          icon:"baseIcon-icon_5",
          enName:"Smart<br>parking",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #6ED232 90%);",
          content:"智能识别，移动支付。享受购物送停车券，积分支付停车费。购物出行方便多多。"
        },
        {
          name:"扫码购",
          icon:"baseIcon-icon_6",
          enName:"Sweep<br>shopping",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF5B00 90%);",
          content:"通过天狗网实现现场扫描超市商品条码加入线上购物车，完成支付后即可离店，摆脱排队结账烦恼。"
        },
        {
          name:"极速达",
          icon:"baseIcon-icon_7",
          enName:"Fast<br>delivery",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26D0C8 90%);",
          content:"超市门店提供3公里范围内极速送配送服务，生鲜果蔬新鲜到家。"
        },
        {
          name:"收藏间",
          icon:"baseIcon-icon_8",
          enName:"The collection<br>between",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF4C48 90%);",
          content:"购物时有点犹豫？商品加入收藏间，降价活动随时了解。"
        }
      ]
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
.storePro:hover .storeAfter:after{
  background:#fff;
}
.storePro .storeAfter:after{
  content:'';
  position: absolute;
  bottom:20px;
  width:20px;
  height:3px;
  background:#ebebeb;
}
.shadow{
  box-shadow: 0 5px 25px 0 rgba(255,76,72,0.10);
  border-radius:6px;
}
</style>
