<template>
  <div id="service">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col left">
        <div style="font-size: 38px;">{{serviceItem().enClassName[0]}} <span class="text-red">{{serviceItem().enClassName[1]}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{serviceItem().className}}</div>
      </div>
    </div>
    <div class="content serviceContent paddingt40 flex-container top" style="padding-bottom: 100px;">
      <div class="serviceNav" style="width:250px;">
        <div class="bg-red text-white paddingl30 paddingv15 text-bolder" style="font-size: 24px">{{serviceItem().className}}</div>
        <div class="borderr borderl">
          <div class="fs-18 borderb text-bolder serviceNavHover" :class="$index == id && 'current'" v-for="(item,$index) in navList"><a :href="'/service/index.html?data='+classname+'&id='+$index" v-text="item.name" class="dis-b paddingl30 paddingv20"></a></div>
        </div>
      </div>
      <div class="flex1 border marginl30">
        <div class="paddingv20 paddingh30 fs-18 text-darker" style="background: #EEEFF4;">
          <a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i><a :href="'/service/index.html?data='+classname+'&id=0'">{{serviceItem().className}}</a><i class="baseIcon-right marginh10"></i><strong>{{serviceItem().name}}</strong>
        </div>
        <div class="padding30 fs-16 strong text-dark" v-html="serviceItem().content"></div>
<!--         <div class="padding30 fs-16 strong text-dark">
          <p class='fs-16 margint10 text-darker text-bolder'>客服电话</p>
          <p class='margint10 text-darker' style='font-size: 30px;'>400-650-8988</p>
          <p class='margint10 fs-16'>服务时间：周一至周日 9:00-21:00（节假日9:00-18:00）</p>
          <p class='fs-16 margint30 text-bolder text-darker'>客服邮箱</p>
          <p class='fs-16 margint10'>51tiangouservice@tiangou.com</p>
          <p class='fs-16 margint30 text-bolder text-darker'>在线客服</p>
          <p class='fs-16 margint10'><span class='text-darker'>A: </span>APP端右下角我的-客服中心-在线客服；</p>
          <p class='fs-16 margint10'><span class='text-darker'>B: </span>微信关注“大商天狗网”公众号-左下角点击键盘输入问题即可快速联系客服；</p>
          <p class="margint20"><img src="/static/img/new/img-message_01.png" width="250"></p>
        </div> -->

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
      classname:'id_1',
      id:0
    }
  },
  mounted() {

  },
  methods: {
    serviceItem(){
      let data = this.common.serviceData();
      this.classname = this.common.getUrlKey('data') || 'id_1';
      this.id = this.common.getUrlKey('id') || '0';
      this.navList = data[this.classname]; 
      // console.log(this.classname,id)
      return data[this.classname][this.id];
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
