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
        <div class="padding30 fs-16" v-html="serviceItem().content"></div>
        <!-- <div class="padding30">
          <div class="flex-container borderl bordert text-center">
            <div class="flex1 borderr padding10">退货类型</div>
            <div class="flex2 borderr paddingv10 paddingh20">情况分类</div>
            <div class="flex2 borderr paddingv10 paddingh20">补充说明</div>
          </div>
          <div class="flex-container vfull center borderl bordert">
            <div class="flex1 borderr padding10 flex-container center">质量问题</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">出具检测报告或经品牌方确认属于质量问题的证明文件原件。</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">退货邮费；由天狗海购承担。</div>
          </div>
          <div class="flex-container vfull center borderl bordert">
            <div class="flex1 borderr padding10 flex-container center">商品缺发溢漏损失</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">商品在物流过程中形成了损坏、溢漏、破损等包括但不限于上述情况经售后核实属实。</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">必须提供物图片信息以便售后保证处理时效，退货邮费；由天狗海购承担。</div>
          </div>
          <div class="flex-container vfull center borderl borderv">
            <div class="flex1 borderr padding10 flex-container center">商品完好未拆封</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">经客服确认，因用户个人原因产生的退货。</div>
            <div class="flex2 borderr paddingv10 paddingh20 flex-container">必须提供物图片信息以便售后保证处理时效，退货邮费及商品产生的税费；由客户个人承担。</div>
          </div>
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
