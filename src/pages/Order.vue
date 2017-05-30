<template>
    <div id="order">
        <el-row :span="24" style="height:54px;line-height:54px">
            <div>当前位置：浦东新区三林三林路
                <a href="javascript:;">[切换地址]</a>
            </div>
        </el-row>
        <el-row class="tac">
            <el-col :span="4">
                <sidebar></sidebar>
            </el-col>
            <el-col :span="20" class="right-content">
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
<style lang="less">
@import url('./../../static/css/theme');
#order {
    background-color: #f7f7f7;
    .right-content {
        border: 1px solid #eee;
        min-height: 680px;
        padding: 20px 18px;
        background-color: #fff;
    }
}
</style>


