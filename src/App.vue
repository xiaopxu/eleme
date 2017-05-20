<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header"
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  min-width: 960px;
}
</style>
