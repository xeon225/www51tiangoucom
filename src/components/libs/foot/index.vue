<template>
  <div class="foot">
    <div class="content" style="padding-top:60px;">
      <div class="flex-container top vfull paddingb30">
        <div class="flex-container left top">
          <div class="fs-14" style="margin-right:80px;">
            <div class="fs-18 text-white paddingb25">购物指南</div>
            <div class="paddingv5"><a href="/news/index.html?id=0&cls=shopping">购物流程</a></div>
            <div class="paddingv5"><a href="/news/index.html?id=1&cls=shopping">会员介绍</a></div>
            <div class="paddingv5"><a href="/service/index.html?data=id_4&id=0">常见问题</a></div>
            <div class="paddingv5"><a href="/news/index.html?id=2&cls=shopping">联系客服</a></div>
          </div>
          <div class="fs-14" style="margin-right:80px;">
            <div class="fs-18 text-white paddingb25">配送方式</div>
            <div class="paddingv5" v-for="(item,$index) in serviceItem('id_1')"><a :href="'/service/index.html?data=id_1&id='+$index" v-text="item.name"></a></div>
            <!-- <div class="paddingv5"><a href="">极速达</a></div>
            <div class="paddingv5"><a href="">超市服务台自提</a></div>
            <div class="paddingv5"><a href="">百货专柜物流配送</a></div>
            <div class="paddingv5"><a href="">百货专柜自提</a></div>
            <div class="paddingv5"><a href="">海外配送</a></div> -->
          </div>
          <div class="fs-14" style="margin-right:80px;">
            <div class="fs-18 text-white paddingb25">支付方式</div>
            <div class="paddingv5" v-for="(item,$index) in serviceItem('id_2')"><a :href="'/service/index.html?data=id_2&id='+$index" v-text="item.name"></a></div>
<!--             <div class="paddingv5"><a href="">支付流程</a></div>
            <div class="paddingv5"><a href="">移动支付</a></div>
            <div class="paddingv5"><a href="">异常情况</a></div> -->
          </div>
          <div class="fs-14" style="margin-right:80px;">
            <div class="fs-18 text-white paddingb25">售后服务</div>
            <div class="paddingv5" v-for="(item,$index) in serviceItem('id_3')"><a :href="'/service/index.html?data=id_3&id='+$index" v-text="item.name"></a></div>
<!--             <div class="paddingv5"><a href="">门店&商户售后</a></div>
            <div class="paddingv5"><a href="">天狗海外购售后</a></div> -->
          </div>
        </div>
        <div style="border-left: 1px solid #5D5F63;" class="text-white paddingl30 fs-18">
          <div class="flex-container top">
            <div style="margin-right:80px;">
              <div>联系客服</div>
              <div class="margint10">
                <div style="font-size: 24px;">400-650-8988</div>
                <div>( 9:00-21:00 )</div>
              </div>
            </div>
            <div>
              <div>商务合作</div>
              <div class="margint10">
                <div style="font-size: 24px;">+86 0411 83880489</div>
              </div>
            </div>
          </div>
          <div class="margint20">招商热线</div>
          <div class="margint10">+86 0411 83880682/83880662</div>
          <div class="margint20">关注天狗网</div>
          <div class="flex-container left top fs-14 margint10" style="color: #BFC3C6;">
            <div class="marginr50">
              <div class="fs-14 text-center">天狗网APP</div>
              <img src="/static/img/pr-App.png" width="100" height="100" alt="" class="margint5">
            </div>
            <div>
              <div class="fs-14 text-center">天狗网微信</div>
              <img src="/static/img/pr-WeChat.png" width="100" height="100" alt="" class="margint5">
            </div>
          </div>
        </div>
      </div>
      <div class="fs-12 paddingb40 paddingt10" style="border-top: 1px solid #000000;color: #BFC3C6;">
        <div class="flex-container left"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21020202000055" target="blank"><img src="/static/img/ba.png" width="12" alt=""></a> <div class="flex1 marginl5">辽公网安备 21020202000055号  |  辽ICP备13005630号-2  |  增值电信业务经营许可证： 辽B2-20140019</div></div>
        <div>Copyright  ©  大连大商天狗电子商务有限公司版权所有<span class="marginh10">|</span><a href="/business/index.html?id=1">经营证照</a><span class="marginh10">|</span><a @click="showImgUrl = !showImgUrl">营业执照</a><span class="marginh10">|</span><a @click="showImgUrl = !showImgUrl">食品流通许可</a><span class="marginh10">|</span><a href="/consumption/index.html">保健食品消费提示</a></div>
        </div>
      </div>
      <div class="mask flex-container center" @click="showImgUrl = !showImgUrl" style="display:none" v-show="showImgUrl">
        <img src="/static/img/business/0001.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      showImgUrl:false
    }
  },
  methods: {
    serviceItem(id){
      let data = this.common.serviceData();  //证件数据
      // let id = this.common.getUrlKey('id') || 1; //取新闻ID
      // console.log(id)
      // this.num = data['data_'+id].length;
      return data[id];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
  background: #2A2B30;
}
.foot a{
  color: #BFC3C6;
}
</style>
