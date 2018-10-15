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
          <img src="./images/text-01.png" width="582" alt="">
        </div>
        <div><img src="./images/download-app.png" alt="" width="357"></div>
      </div>
      <img src="./images/banner-index.png" alt="">
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
          content:"会员身份电子化、移动化，顾客可以在收银台用手机开通门店电子会员卡，也可通过手机绑定原门店会员卡，实现随时开通，随时查询积分，并随时可以用积分进行超市商品、彩票、高额抵值券的兑换。"
        },
        {
          name:"专柜收银",
          icon:"baseIcon-icon_2",
          enName:"Counters<br>cashier",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26A8FF 90%);",
          content:"取代传统纸质小票模式，实现了商品电子化及交易电子化。既提升了现场成交率，又增加了二次营销通道，增加顾客离店推荐关联消费。改变了原百货纸质小票对消费数据采集的颗粒度，更全面的收集到了顾客消费信息，形成顾客画像。"
        },
        {
          name:"云货架",
          icon:"baseIcon-icon_3",
          enName:"Shelf<br>clouds",
          color:"background-image: -webkit-linear-gradient(left bottom , rgb(255, 255, 255) 0%, #BC65E4 90%);",
          content:"为实体门店各个专柜创建线上店铺，延展店铺卖货的时间和空间，让实体门店也能与电商一样实现24小时营业。"
        },
        {
          name:"精准营销",
          icon:"baseIcon-icon_4",
          enName:"Precision<br>marketing",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF9800 90%);",
          content:"通过精准营销工具，能够更有准确的触达顾客，提高顾客进店消费数量及提袋率。"
        }
      ],
      storeProTwo:[
        {
          name:"智能停车",
          icon:"baseIcon-icon_5",
          enName:"Smart<br>parking",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #6ED232 90%);",
          content:"在普通的智能停车基础上，打通店内交易及积分体系，实现店内交易自动送停车券，积分支付停车费用等功能，为逛店顾客提供更好的服务。"
        },
        {
          name:"扫码购",
          icon:"baseIcon-icon_6",
          enName:"Sweep<br>shopping",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF5B00 90%);",
          content:"为超市顾客提供新型的购物体验，顾客通过天狗网实现扫描超市商品条码加入线上购物车，完成支付后即可离店，摆脱排队烦恼。"
        },
        {
          name:"极速达",
          icon:"baseIcon-icon_7",
          enName:"Fast<br>delivery",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26D0C8 90%);",
          content:"为超市店铺提供3公里范围顾客提供极速送达服务，增加门店线上销售渠道，让顾客更快的买到心仪商品。"
        },
        {
          name:"收藏间",
          icon:"baseIcon-icon_8",
          enName:"The collection<br>between",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF4C48 90%);",
          content:"逛店顾客试衣后，对于犹豫购买商品可进行拍照，并扫码收藏商品。顾客可收到降价信息及精准推送的优惠券，促进顾客购买转化，为专柜导购提升转化提供帮助。"
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
