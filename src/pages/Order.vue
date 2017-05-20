<template>
    <div id="order">
        <el-row class="tac">
            <sidebar></sidebar>
            <el-col :span="8">
                <router-view></router-view>
            </el-col>
        </el-row>
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


