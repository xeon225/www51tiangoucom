<template>
  <div id="store">
    <!-- 头部导航 -->
    <div class="content">
      <tg-head :active="3"></tg-head>
    </div>
    <div class="bg-store">
      <div class="content paddingt50">
        <img src="/static/img/text-store_1.png" alt="" class="marginl50">
        <div class="marginl50 margint30 paddingb20">
          <div class="btn round big white"><a href="mailto:cooperate@51tiangou.com">马上申请</a></div>
          <div class="btn round big reverse white marginl30"><a href="/static/xls/商家入驻表格.xlsx">下载申请资料</a></div>
        </div>
        <img src="/static/img/icon-store.png" alt="" class="marginl25 margint50">
      </div>
      
      <div class="content" style="margin-top:150px;">
        <div class="flex-container top pos-r" style="padding-bottom:150px;">
          <div class="flex1 pos-r">
            <img src="/static/img/img-store_01.png" height="500" alt="" class="pos-a" style="right:140px;top:90px;">
          </div>
          <div class="flex1">
            <div style="padding:170px 0 0 90px;">
              <div class="flex-container left top">
                <div style="width:60px;">
                  <img src="/static/img/icon-01.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">申请资格查询</div>
                  <div class="lh-32 margint20">
                    <span style="color:#2AB795">企业：</span>合法登记的企业，满足入驻天狗的所有相关要求（<a href="/static/xls/商家入驻表格.xlsx" style="color:#2AB795">《入驻要求》</a>），不接受个体工商户入驻；
                  </div>
                </div>
              </div>
              <div class="flex-container left top margint35">
                <div style="width:60px;">
                  <img src="/static/img/icon-02.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">准备入驻资料</div>
                  <div class="lh-32 margint20">
                    按申请资格要求，准备入驻资料；<br>资料需盖公章；
                  </div>
                </div>
              </div>
              <div class="flex-container left top margint35">
                <div style="width:60px;">
                  <img src="/static/img/icon-03.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">注册并提交入驻资料</div>
                  <div class="lh-32 margint20">
                    登录官网注册；<br>选择经营的类目；<br>上传新品牌提报资料表及资质；<br>提交审核；
                  </div>
                </div>
              </div>
            </div>           
          </div>
          <div class="iconLine after pos-a top0 bottom0">
            <div class="radiusSix pos-r" v-show="false">
              
            </div>
            <img src="/static/img/icon-line_1.png" alt="">
          </div>
        </div>
        <div class="flex-container top pos-r">
          <div class="flex1" style="padding-bottom:290px;">
            <div style="padding-right:110px; padding-top:120px;">
              <div class="text-right" style="color:#2AB795;font-size:34px;">阶段二  [ 等待天狗审核 ]</div>
              <div class="flex-container right top fs-18 margint50">
                  <div class="btn store green">审核资质有效性和是否符合入驻要求</div>
              </div>
              <div class="flex-container right top fs-18 margint30">
                  <div class="btn store green">审核通过：进入下一流程，提交纸质版资料</div>
              </div>
              <div class="flex-container right top fs-18 margint30">
                  <div class="btn store green">审核未通过：如因缺少相关文件可修改后重新提交</div>
              </div>
            </div>           
          </div>
          <div class="flex1 pos-r">
            <img src="/static/img/img-store_02.png" height="500" alt="" class="pos-a left50 top0">
          </div>
          <div class="iconLine after top0 pos-a bottom0" style="padding-top:70px;">
            <img src="/static/img/icon-line_2.png" alt="">
          </div>
        </div>
        <div class="flex-container top pos-r" style="padding-bottom:150px;">
          <div class="flex1 pos-r">
            <img src="/static/img/img-store_03.png" height="500" alt="" class="pos-a" style="right:140px;top:0px;">
          </div>
          <div class="flex1">
            <div style="padding:70px 0 0 110px;">
              <div style="color:#2AB795;font-size:34px;">阶段三  [ 签署协议并缴费 ]</div>
              <div class="flex-container left" style="margin-top:70px;">
                <div style="width:60px;">
                  <img src="/static/img/icon-01.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">同意入驻天狗协议</div>
                </div>
              </div>
              <div class="flex-container left margint25">
                <div style="width:60px;">
                  <img src="/static/img/icon-02.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">缴纳质保金和平台使用年费</div>  
                </div>
              </div>
              <div class="flex-container left margint25">
                <div style="width:60px;">
                  <img src="/static/img/icon-03.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">登录后台激活账号</div>
                </div>
              </div>
              <div class="flex-container left margint25">
                <div style="width:60px;">
                  <img src="/static/img/icon-04.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20 flex1">
                  <div class="btn store green">确认完善店铺信息</div>
                </div>
              </div>
            </div>           
          </div>
          <div class="iconLine after pos-a top0 bottom0 paddingt15">
            <img src="/static/img/icon-line_3.png" alt="">
          </div>
        </div>
        <div class="flex-container top pos-r">
          <div class="flex1" style="padding-bottom:200px;">
            <div style="padding-right:110px; padding-top:120px;">
              <div class="text-right" style="color:#2AB795;font-size:34px;">阶段四  [ 开店经营 ]</div>
              <div class="flex-container right fs-18 margint50">
                <div style="width:60px;">
                  <img src="/static/img/icon-01.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20">
                  <div class="btn store green">商户发布商品并装修店铺</div>
                </div>
              </div>
              <div class="flex-container right fs-18 margint30">
                <div style="width:60px;">
                  <img src="/static/img/icon-02.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20">
                  <div class="btn store green">产品审核</div>
                </div>
              </div>
              <div class="flex-container right fs-18 margint30">
                <div style="width:60px;">
                  <img src="/static/img/icon-03.png" width="60" alt="">
                </div>
                <div class="fs-18 marginl20">
                  <div class="btn store green">正式上线经营</div>
                </div>
              </div>
            </div>           
          </div>
          <div class="flex1 pos-r">
            <img src="/static/img/img-store_04.png" height="500" alt="" class="pos-a left50 top0">
          </div>
          <div class="iconLine before top0 pos-a bottom0" style="padding-top:70px;">
            <img src="/static/img/icon-line_4.png" alt="">
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
  name: 'Store',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-store{
    background: url('/static/img/bg-store.png') no-repeat center top;
    background-size: 100% auto;
  }
  .btn.round{
    border-radius:50px;
    font-size:30px;
    color:#5DC48E;
    padding: 23px 39px;
  }
  .btn.round a{
    color:#5DC48E;
  }
  .btn.round:hover a{
    color:#fff;
  }
  .btn.round:hover{
    background:none;
    border-color:#fff;
  }
  .btn.reverse{
    background: none;
    border-color:#fff;
  }
  .btn.reverse a{
    color:#fff;
  }
  .btn.reverse:hover a{
    color:#5DC48E;
  }
  .btn.reverse:hover{
    border-color:#fff;
    background: #fff;
    color:#5DC48E;
  }
  .iconLine{
    width:121px;
    left:50%;
    margin-left:-60px;
  }
  .iconLine.before:before{
    content:'';
    position: absolute;
    width:5px;
    left:58px;
    height:100px;
    top:0;
    background: #D6F1EB;
    z-index: -1;
  }
  .iconLine.after:after{
    content:'';
    position: absolute;
    width:5px;
    left:58px;
    bottom:0;
    top:0;
    background: #D6F1EB;
    z-index: -1;
  }
  .btn.store{
    color:#2AB795;
    background:rgba(42,183,149,.15);
    border:0;
    border-radius:50px;
    font-size:22px;
    padding: 6px 24px;
  }
  .radiusSix{
    width:120px;
    height:70px;
    border-radius:7px;
    background: rgba(214,241,235,1);
    position: absolute;
    margin-top:33px;
  }
  .radiusSix:before{
    content: '';
    width:120px;
    height:70px;
    border-radius:7px;
    background: rgba(214,241,235,1);
    position: absolute;
    transform:rotate(60deg);
    -ms-transform:rotate(60deg);   /* IE 9 */
    -moz-transform:rotate(60deg);  /* Firefox */
    -webkit-transform:rotate(60deg); /* Safari 和 Chrome */
    -o-transform:rotate(60deg);  /* Opera */
  }
  .radiusSix:after{
    content: '';
    width:120px;
    height:70px;
    border-radius:7px;
    background: rgba(214,241,235,1);
    position: absolute;
    transform:rotate(60deg);
    -ms-transform:rotate(60deg);   /* IE 9 */
    -moz-transform:rotate(60deg);  /* Firefox */
    -webkit-transform:rotate(-60deg); /* Safari 和 Chrome */
    -o-transform:rotate(60deg);  /* Opera */
  }
</style>
