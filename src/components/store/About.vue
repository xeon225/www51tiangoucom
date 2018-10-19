<template>
  <div id="about">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="1"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col hfull left">
        <div style="font-size: 38px;">{{msg.enL}} <span class="text-red">{{msg.enR}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{msg.title}}</div>
      </div>
    </div>
    <div class="content paddingt40">
      <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4">
        首页<i class="baseIcon-right marginh10"></i>产品介绍
      </div>
    </div>
    
    <div class="content margint10 clearfix" style="padding-bottom: 100px;">
      <div class="box-span6 margint30" v-for="(item,$index) in storePro">
        <div class="shadow flex-container store" :class="$index%2 == 0 ? 'marginr15' : 'marginl15'">
          <div class="flex1 flex-container center padding30">
            <div class="storePro">
              <div class="flex-container center storeAfter pos-r">
                <div class="pos-r"><i :class="item.icon" :style="item.color"></i>
                </div>
              </div>
              <div class="text-center margint20">
                <div class="paddingb5" style="font-size: 24px;" v-text="item.name"></div>
                <div class="text-light fs-18 noHover" v-text="item.enName"></div>
              </div>
            </div>
          </div>
          <div class="flex1 fs-18 text-dark paddingr30" v-text="item.content"></div>
        </div>
      </div>
      
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
  name: 'About',
  data () {
    return {
      msg: {
        enL:"PRODUCT",
        enR:"DESCRIPTION",
        title:"产品介绍"
      },
      storePro:[
        {
          name:"电子会员",
          icon:"baseIcon-icon_1",
          enName:"Electronic member",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #F366B1 90%);",
          colorIE:"color:#F366B1",
          content:"会员身份电子化、移动化，顾客可以在收银台用手机开通门店电子会员卡，也可通过手机绑定原门店会员卡，实现随时开通，随时查询积分，并随时可以用积分进行超市商品、彩票、高额抵值券的兑换。"
        },
        {
          name:"专柜收银",
          icon:"baseIcon-icon_2",
          enName:"Counters cashier",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26A8FF 90%);",
          colorIE:"color:#26A8FF",
          content:"取代传统纸质小票模式，实现了商品电子化及交易电子化。既提升了现场成交率，又增加了二次营销通道，增加顾客离店推荐关联消费。改变了原百货纸质小票对消费数据采集的颗粒度，更全面的收集到了顾客消费信息，形成顾客画像。"
        },
        {
          name:"云货架",
          icon:"baseIcon-icon_3",
          enName:"Shelf clouds",
          color:"background-image: -webkit-linear-gradient(left bottom , rgb(255, 255, 255) 0%, #BC65E4 90%);",
          colorIE:"color:#BC65E4",
          content:"为实体门店各个专柜创建线上店铺，延展店铺卖货的时间和空间，让实体门店也能与电商一样实现24小时营业。"
        },
        {
          name:"精准营销",
          icon:"baseIcon-icon_4",
          enName:"Precision marketing",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF9800 90%);",
          colorIE:"color:#FF9800",
          content:"通过会员、交易、商品的电子化，完善顾客画像。在营销策划中，利用大数据分析，实现精准营销及推送。让对顾客的营销活动及资源使用更准确。"
        },
        {
          name:"智能停车",
          icon:"baseIcon-icon_5",
          enName:"Smart parking",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #6ED232 90%);",
          colorIE:"color:#6ED232",
          content:"在普通的智能停车基础上，打通店内交易及积分体系，实现店内交易自动送停车券，积分支付停车费用等功能，为逛店顾客提供更好的服务。"
        },
        {
          name:"扫码购",
          icon:"baseIcon-icon_6",
          enName:"Sweep shopping",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF5B00 90%);",
          colorIE:"color:#FF5B00",
          content:"为超市顾客提供新型的购物体验，顾客通过天狗网实现扫描超市商品条码加入线上购物车，完成支付后即可离店，摆脱排队烦恼。"
        },
        {
          name:"极速达",
          icon:"baseIcon-icon_7",
          enName:"Fast delivery",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #26D0C8 90%);",
          colorIE:"color:#26D0C8",
          content:"为超市店铺提供3公里范围顾客提供极速送达服务，增加门店线上销售渠道，让顾客更快的买到心仪商品。"
        },
        {
          name:"收藏间",
          icon:"baseIcon-icon_8",
          enName:"The collection between",
          color:"background-image: -webkit-linear-gradient(left top , rgb(255, 255, 255) 0%, #FF4C48 90%);",
          colorIE:"color:#FF4C48",
          content:"逛店顾客试衣后，对于犹豫购买商品可进行拍照，并扫码收藏商品。顾客可收到降价信息及精准推送的优惠券，促进顾客购买转化，为专柜导购提升转化提供帮助。"
        }
      ],
    }
  },
  methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.storePro{
  height:240px;
  width:240px;
}
.storePro>div:first-child{
  height:128px;
}
.storePro>div:last-child{
  height:128px;
}

.store:hover{
  background-image: linear-gradient(-47deg, #FF4C48 0%, #FFB0A0 100%);
  color:#fff !important;
  border-radius:6px;
  cursor: pointer;
}
.storePro i{
  font-size: 60px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 65px;
}
.store:hover .storePro i{
  background-image: -webkit-linear-gradient(left top , white, white) !important;
}
.store:hover .storePro i.iconHover{
  color:#fff !important;
}
.store:hover .storePro .text-light,.store:hover .text-dark{
  color:#fff !important;
}
.store:hover .storePro .storeAfter:after{
  background:#fff;
}
.storePro .storeAfter:after{
  content:'';
  position: absolute;
  left:50%;
  margin-left:-10px;
  bottom:5px;
  width:20px;
  height:3px;
  background:#ebebeb;
}

</style>
