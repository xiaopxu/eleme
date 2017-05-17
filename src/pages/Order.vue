<template>
    <div id="order">
        <sidebar></sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
import sidebar from "./../components/sidebar"
export default {
    name: "order",
    data() {
        return {

        }
    },
    components: {
        sidebar
    }
}
</script>
<style lang="less" scoped>
@import url('./../../static/css/theme');
</style>


