<template>
  <div id="consumption">
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
        <div class="flex-container left fs-18 paddingh30 paddingv20" style="background: #EEEFF4"><a href="/index.html">首页</a><i class="baseIcon-right marginh10"></i><strong>消费提示</strong>
        </div>
        <div class="fs-16 paddingh30 paddingv40">
          <div class="text-center text-bolder">
            <div style="font-size:36px">关于防范食品、保健食品<br>
欺诈和虚假宣传行为的消费提示</div>
为帮助消费者科学理性选购食品和保健食品，防范欺诈和虚假宣传违法违规行为，特别提示消费时关注如下
          </div>
          <div class="text-dark paddingt20">
            <div class="margint20 text-bolder">
              一看销售场所资质。
            </div>
            <div class="margint20">到证照齐全的正规场所购买产品，特别要注意有没有营业执照和食品经营许可证。通过网络、会议、电视、直销和电话等方式购买产品，也应先行确认资质信息。</div>
            <div class="margint20 text-bolder">
              二查外包装和说明书。
            </div>
            <div class="margint20">
              仔细查看外包装标签标识产品相关信息，做好“四不”：<br>
  不要购买无厂名、厂址、生产日期和保质期的产品；<br>
  不要购买标签上没有食品生产许可证号的预包装食品；<br>
  不要购买标签或说明书中提及可以预防疾病、有治疗功能的产品；<br>
  不要购买标签上没有保健食品批准文号和保健食品标志（小蓝帽），但声称是保健食品的产品。
            </div>
            <div class="margint20 text-bolder">
              三辨广告和宣传内容。
            </div>
            <div class="margint20">
              科学、理性看待食品、保健食品广告和宣传，凡声称疾病预防、治疗功能的，一律不要购买；<br>
  保健食品广告中未声明“本品不能代替药物”的，一律不要购买；<br>
  不要盲目参加任何以产品销售为目的的知识讲座、专家报告等。
            </div>
            <div class="margint20 text-bolder">
              如遇食品、保健食品欺诈和虚假宣传问题的，可以拨打 <span class="fs-20">12331、12315</span> 热线电话进行投诉举报。
            </div>
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

import tgHead from '../../components/libs/head/index.js';
import tgFoot from '../../components/libs/foot/index.js';

export default {
  name: 'Consumption',
  data () {
    return {
      msg: {
        enL:"CONSUMPTION",
        enR:"TIPS",
        title:"消费提示"
      }
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
