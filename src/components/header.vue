<template>
    <div id="header">
        <a href="" class="logo">{{logo}}</a>
        <div class="top-nav top-nav-left">
            <a href="javascript:void(0)" @click="goPage('')" class="focus">首页</a>
            <a href="javascript:void(0)" @click="goPage('order')">我的订单</a>
            <a href="javascript:void(0)">加盟合作</a>
        </div>
        <div class="top-nav top-nav-right">
            <a href="javascript:void(0)">手机中心</a>
            <a href="javascript:void(0)">规则中心</a>
            <a href="javascript:void(0)">手机应用</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "header",
    data() {
        return {
            logo: '饿了么'
        }
    },
    mounted() {
        console.log("mounted")
    },
    methods: {
        goPage(page) {
            if (typeof page != 'string') {
                this.$message.error('page名称传输错误');
                return
            }
            this.$router.push({ path: '/' + page })
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./../../static/css/main');
#header {
    background-color: @blue;
    height: 60px;
    overflow: hidden;
    .logo {
        float: left;
        color: #fff;
        width: 100px;
        height: 60px;
        padding: 0 10px;
        font-weight: bold;
        font-size: 30px;
        line-height: 60px;
        text-align: center
    }
    .top-nav {
        overflow: hidden;
        a {
            display: block;
            width: 112px;
            height: 60px;
            line-height: 60px;
            color: #fff;
            text-align: center;
            float: left;
        }
        a:hover {
            background-color: @blue-hover;
        }
        .focus {
            background-color: @blue-focus;
        }
    }
    .top-nav-left {
        float: left;
    }

    .top-nav-right {
        float: right;
    }
}
</style>


