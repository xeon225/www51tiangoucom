<template>
  <div class="pagination" v-show="page.length > 1">
    <div class="flex-container center" style="font-size:24px;">
      <span class="baseIcon baseIcon-pullleft marginr30" style="font-size:24px;"></span>
      <span class="pageBtn marginh10" :class="item === currentPage && 'current'" v-for="item in page" v-text="item" @click="sendData(item)"></span>
      <span class="baseIcon baseIcon-pullright marginl30" style="font-size:24px;"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pageSum:{
      type:Number,
      default:0
    },
    pageNum:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    sendData (n) {
      this.currentPage = n;
      this.$emit('sendData', n)
    }
  },
  computed:{
    page(){
      let that = this;
      let n = that.pageSum;
      let p = that.pageNum;
      return Array.from({length:Math.ceil(n/p)}, (v,k) => k + 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBtn{
  width:30px;
  height:30px;
  border-radius:50%;
  background: #fff;
  text-align:center;
  color:#666;
  font-size:14px;
  line-height: 30px;
}
.pageBtn.current{
  width:30px;
  height:30px;
  border-radius:50%;
  background: #ff4c48;
  text-align:center;
  color:#fff;
  font-size:14px;
  line-height: 30px;
}


</style>
