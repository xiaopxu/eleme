<template>
  <div class="hello">
    <button @click="getUserInfo">获取用户数据</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {

    }
  },
  methods: {
    getUserInfo() {
      let param = {
        sex: '1'
      }
      this.$http.post('api/getUserInfo', param)
        .then(res => {
          console.log(res.body)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url('./../../static/css/main');
</style>
