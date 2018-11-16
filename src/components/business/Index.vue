<template>
  <div id="business">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="0"></tg-head>
    </div>
    <div class="bannerS flex-container">
      <div class="content flex-container-col hfull left">
        <div style="font-size: 38px;">{{msg.enL}} <span class="text-red">{{msg.enR}}</span></div>
        <div class="text-light" style="font-size: 24px;">{{msg.title}}</div>
      </div>
    </div>
    <div class="content paddingt40" style="padding-bottom:100px;">
      <div class="border">
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4"><a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i><strong>经营证件</strong>
        </div>
        <div class="padding40">
          <div class="text-center">
            <div class="text-bolder" style="font-size:36px;">天狗网经营商品经营者资质信息公示</div>
            <div class="fs-18">根据国家相关政策要求对经营者资质信息公示如下</div>
          </div>
          <div class="margint30 border clearfix fs-18">
            <div class="box-span4 boxSpan borderr flex-container left paddingh30" style="height:64px;" @click="showImg(item.imgUrl)" :class="'border_'+num%3" v-for="item in businessItem()"><span>{{item.stroe}}</span><i class="baseIcon-right marginl10"></i></div>
          </div>
        </div>
      </div>
      
    </div>


    <div class="mask flex-container center" @click="showImgUrl = !showImgUrl" style="display:none" v-show="showImgUrl">
      <img :src="imgUrl" alt="">
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
  name: 'Business',
  data () {
    return {
      msg: {
        enL:"BUSINESS",
        enR:"CERTIFICATE",
        title:"经营证件"
      },
      num:0,
      showImgUrl:false,
      imgUrl:''
    }
  },
  mounted() {

  },
  methods: {
    businessItem(){
      let data = this.common.businessData();  //证件数据
      let id = this.common.getUrlKey('id') || 1; //取新闻ID
      // console.log(id)
      this.num = data['data_'+id].length;
      return data['data_'+id];
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
.boxSpan:hover{
  background: #EEEFF4;
  cursor:pointer;
}
.boxSpan:nth-child(3n){
  border-right:0;
}
.boxSpan.border_0:nth-last-child(n+4){
  border-bottom: 1px solid #d8d8d8;
}
.boxSpan.border_2:nth-last-child(n+3){
  border-bottom: 1px solid #d8d8d8;
}
.boxSpan.border_1:nth-last-child(n+2){
  border-bottom: 1px solid #d8d8d8;
}
</style>
