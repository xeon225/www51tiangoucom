<template>
  <div id="service">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col hfull left">
        <div style="font-size: 38px;">{{serviceItem().enClassName[0]}} <span class="text-red">{{serviceItem().enClassName[1]}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{serviceItem().className}}</div>
      </div>
    </div>
    <div class="content serviceContent paddingt40 flex-container top" style="padding-bottom: 100px;">
      <div class="serviceNav" style="width:250px;">
        <div class="bg-red text-white paddingl30 paddingv15 text-bolder" style="font-size: 24px">{{serviceItem().className}}</div>
        <div class="borderr borderl">
          <div class="fs-18 borderb text-bolder serviceNavHover" :class="$index == id && 'current'" v-for="(item,$index) in navList"><a :href="'/service/index.html?data=id_1&id='+$index" v-text="item.name" class="dis-b paddingl30 paddingv20"></a></div>
        </div>
      </div>
      <div class="flex1 border marginl30">
        <div class="paddingv20 paddingh30 fs-18 text-bolder text-darker" style="background: #EEEFF4;">
          首页<i class="baseIcon-right marginh10"></i>{{serviceItem().className}}<i class="baseIcon-right marginh10"></i>{{serviceItem().name}}
        </div>
        <div class="padding30 fs-16" v-html="serviceItem().content">
          <p><img src="/static/img/service/img-service_01.png" alt=""></p>
                    <p class='text-darker margint20'>Q：顾客提交订单并完成付款后，多久能收到包裹？</p>
          <p class='text-dark margint20'><span class='text-darker'>A：</span>保税仓：预计1～3个工作日左右发货，发货后预计5～7个工作日送达；</p><p class='text-dark' style="text-indent: 27px;">海外仓：实名认证无误后预计72小时内发货，发货后预计7～20个工作日送达。</p>
          <p class='text-dark' style="text-indent: 27px;">工作日不包含周六、周日，法定节假日顺延；</p>
<p class='text-dark' style="text-indent: 27px;">具体时效可至商品详情页查看预计送达时间；</p>
<p class='text-dark' style="text-indent: 27px;">如遇双十一等大型活动期间、订单实名认证异常、海关严查等特殊情况，或遇台风、暴雨、大雾等不可抗力因素，订单送达时间将根据具体到达情况而定。
</p>
          <p class='text-darker margint40'>Q：什么是海外购的极速达慢比赔？</p>
          <p class='text-dark margint20'><span class='text-darker'>A：</span>“极速达慢比赔”是顾客在天狗网海外购频道购买单品页面带有慢比赔标识的产品，在顾客下单并完成支付后，包裹未在5个工作日妥投（12:00前支付的订单从当天计起，12:00后支付的订单从第二个工作日计起，法定节假日顺延）的订单，顾客可申请20元现金券作为赔偿。</p>
          <p class='text-dark margint10'>详情见：<a href='https://m.51tiangou.com/product/activityDetail.html?id=104750' target='blank'>https://m.51tiangou.com/product/activityDetail.html?id=104750</a></p>
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
  name: 'Service',
  data () {
    return {
      msg: {
        enL:"DELIVERY",
        enR:"METHOD",
        title:"配送方式"
      },
      navList:[],
      id:0
    }
  },
  mounted() {

  },
  methods: {
    serviceItem(){
      let data = this.common.serviceData();
      let classname = this.common.getUrlKey('data') || 'id_1';
      this.id = this.common.getUrlKey('id') || '0';
      this.navList = data[classname]; 
      // console.log(classname,id)
      return data[classname][this.id];
    },
    showImg(url){
      this.showImgUrl = true;
      this.imgUrl = '/static/img/business/'+url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serviceNavHover:hover,.serviceNavHover.current{
  background: #EEEFF4;
}
</style>
