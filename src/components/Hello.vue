<template>
  <div class="hello">
    <Header1></Header1>
    <button @click="getUserInfo">获取用户数据</button>
  </div>
</template>

<script>
//引入公用组件
import Header1 from "./header"
//当前组件逻辑
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header1
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
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
}
</style>
