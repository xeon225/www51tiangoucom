<template>
  <div class="pagination">  
    <div>
      <span class="btn marginr20" v-for="item in page" v-text="item" @click="sendData(item)"></span>
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




</style>
