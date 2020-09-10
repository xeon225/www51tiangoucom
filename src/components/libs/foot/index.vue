<template>
  <div class="foot">
    <div class="content" style="padding-top:60px;">
      <div class="flex-container top vfull paddingb40">
        <div>
          <div class="flex-container left top">
            <div class="fs-14" style="margin-right:80px;">
              <div class="fs-18 text-white paddingb15">购物指南</div>
              <div class="paddingv5"><a href="/news/index.html?id=0&cls=shopping">购物流程</a></div>
              <div class="paddingv5"><a href="/news/index.html?id=1&cls=shopping">会员介绍</a></div>
              <div class="paddingv5"><a href="/service/index.html?data=id_4&id=0">常见问题</a></div>
              <div class="paddingv5"><a href="/service/index.html?data=id_5&id=0">联系客服</a></div>
            </div>
            <div class="fs-14" style="margin-right:80px;">
              <div class="fs-18 text-white paddingb15">配送方式</div>
              <div class="paddingv5" v-for="(item,$index) in serviceItem('id_1')"><a :href="'/service/index.html?data=id_1&id='+$index" v-text="item.name"></a></div>
              <!-- <div class="paddingv5"><a href="">极速达</a></div>
              <div class="paddingv5"><a href="">超市服务台自提</a></div>
              <div class="paddingv5"><a href="">百货专柜物流配送</a></div>
              <div class="paddingv5"><a href="">百货专柜自提</a></div>
              <div class="paddingv5"><a href="">海外配送</a></div> -->
            </div>
            <div class="fs-14" style="margin-right:80px;">
              <div class="fs-18 text-white paddingb15">支付方式</div>
              <div class="paddingv5" v-for="(item,$index) in serviceItem('id_2')"><a :href="'/service/index.html?data=id_2&id='+$index" v-text="item.name"></a></div>
            </div>
            <div class="fs-14" style="margin-right:80px;">
              <div class="fs-18 text-white paddingb15">售后服务</div>
              <div class="paddingv5" v-for="(item,$index) in serviceItem('id_3')"><a :href="'/service/index.html?data=id_3&id='+$index" v-text="item.name"></a></div>
            </div>
          </div>
          <div>
            <div class="text-white fs-17 margint10">关注大商天狗</div>
            <div class="flex-container left top fs-14 margint10" style="color: #BFC3C6;">
              <div class="marginr50">
                <img src="/static/img/pr-App.png" width="100" height="100" alt="" class="margint5">
                <div class="fs-14 text-center margint10">移动APP</div>
              </div>
              <div>
                <img src="/static/img/pr-WeChat.png" width="100" height="100" alt="" class="margint5">
                <div class="fs-14 text-center margint10">微信公众号</div>
              </div>
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid #5D5F63;" class="text-white paddingl30 fs-18">
          <div class="fs-14">
            <div style="margin-right:80px;">
              <div class="fs-18" style="line-height: 22px;">联系客服</div>
              <div class="margint20 lh-20">
                <div class="flex-container left bottom"><span class="color_1 fs-14" style="line-height: 18px;">电话：</span><div style="font-size: 24px;" class="lh-1">400-650-8988</div></div>
                <!-- <div>( 9:00-21:00 )</div> -->
              </div>
              <div class="color_1 margint10 lh-20">邮箱：tiangouservice@51tiangou.com</div>
              <div class="color_1 margint10 lh-20">服务时间：周一至周日 9:00-21:00（节假日 9:00-18:00）</div>
              <div class="margint30 fs-18" style="line-height: 22px;">招商合作</div>
              <div class="flex-container left color_1 margint20 lh-20">
                <span>电话：</span><span class="fs-18">0411-83880450</span><span>（跨境进口品牌合作）</span>
              </div>
              <div class="flex-container left color_1 margint10 lh-20">
                <span style="min-width:42px;"></span><span class="fs-18">010-84417059</span><span class="marginl10">（国内品牌商品合作）</span>
              </div>
              <div class="color_1 margint10 lh-20">邮箱：BD@51tiangou.com</div>
              <div class="margint30 fs-18" style="line-height: 22px;">商务合作</div>
              <div class="flex-container left color_1 margint20 lh-20">
                <span>电话：</span><span class="fs-18">0411-83880681</span>
              </div>
              <div class="color_1 margint10 lh-20">邮箱：BD@51tiangou.com</div>
            </div>
          </div>

        </div>
      </div>
      <div class="fs-12 paddingb40 paddingt10" style="border-top: 1px solid #000000;color: #BFC3C6;">
        <div class="flex-container left">
          <span>2020  ©</span>
          <span class="marginh10">|</span>
          <span>大连大商天狗电子商务有限公司版权所有</span>
          <span class="marginh10">|</span>
          <a href="http://www.beian.miit.gov.cn/" target="blank">辽ICP备13005630号-2</a>
          <span class="marginh10">|</span>
          <span>辽B2-20140019</span>
        </div>
        <div class="flex-container left">
          <span>网络文化许可证-辽网文-（2020）3277-038号</span>
          <span class="marginh10">|</span>
          <span>广播电视节目制作：辽字第00705号</span>
          <span class="marginh10">|</span>
          <span>违法和不良信息举报：024-81680063</span>
        </div>
        <div class="flex-container left">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21020202000055" target="blank" class="flex-container left" style="height:17px;line-height: 17px;"><img src="/static/img/ba.png" width="12" alt="" style="padding-bottom: 2px;margin-right:3px;">辽公网安备：21020202000055号</a>
          <span class="marginh10">|</span>
          <a href="/business/index.html?id=1">经营证照</a>
          <span class="marginh10">|</span>
          <a @click="showImgUrl3 = !showImgUrl3">营业执照</a>
          <span class="marginh10">|</span>
          <a @click="showImgUrl = !showImgUrl">食品经营许可</a>
          <span class="marginh10">|</span>
          <a href="/consumption/index.html">保健食品消费提示</a>
          <span class="marginh10">|</span>
          <a @click="showImgUrl2 = !showImgUrl2">出版物经营许可证</a>
        </div>
<!--         <div class="flex-container left"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21020202000055" target="blank" class="flex-container left" style="height:17px;line-height: 17px;"><img src="/static/img/ba.png" width="12" alt="" style="padding-bottom: 2px;"></a><div class="flex1 marginl5"><a href="http://www.beian.miit.gov.cn/" target="blank">辽ICP备13005630号-2</a><span class="marginh10">|</span>辽网文（2020）3277-038号<span class="marginh10">|</span>增值电信业务经营许可证： 辽B2-20140019<span class="marginh10">|</span>广播电视节目制作：辽字第00705号</div></div>
        <div>2020  ©  大连大商天狗电子商务有限公司版权所有<span class="marginh10">|</span><a href="/business/index.html?id=1">经营证照</a><span class="marginh10">|</span><a @click="showImgUrl3 = !showImgUrl3">营业执照</a><span class="marginh10">|</span><a @click="showImgUrl = !showImgUrl">食品经营许可</a><span class="marginh10">|</span><a href="/consumption/index.html">保健食品消费提示</a><span class="marginh10">|</span><a @click="showImgUrl2 = !showImgUrl2">出版物经营许可证</a></div>
        <div><a href="http://www.lnjubao.cn" target="blank">省举报入口</a></div> -->
        </div>
      </div>
      <div class="mask flex-container center" @click="showImgUrl = !showImgUrl" style="display:none" v-show="showImgUrl">
        <img src="/static/img/business/0002.jpg" alt="">
      </div>
      <div class="mask flex-container center" @click="showImgUrl2 = !showImgUrl2" style="display:none" v-show="showImgUrl2">
        <img src="/static/img/business/0003.jpg" alt="">
      </div>
      <div class="mask flex-container center" @click="showImgUrl3 = !showImgUrl3" style="display:none" v-show="showImgUrl3">
        <img src="/static/img/business/0004.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      showImgUrl: false,
      showImgUrl2: false,
      showImgUrl3: false
    }
  },
  methods: {
    serviceItem (id) {
      let data = this.common.serviceData() // 证件数据
      // let id = this.common.getUrlKey('id') || 1; //取新闻ID
      // console.log(id)
      // this.num = data['data_'+id].length;
      return data[id]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
  background: #2A2B30;
  min-width: 1280px;
}
.foot a,.foot .color_1{
  color: #BFC3C6;
}
</style>
