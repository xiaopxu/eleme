<template>
    <div class="header">
        <a href="" class="logo">饿了么</a>
        <div class="top-nav top-nav-left">
            <a href="" class="focus">首页</a>
            <a href="">我的订单</a>
            <a href="">加盟合作</a>
        </div>
        <div class="top-nav top-nav-right">
            <a href="">手机中心</a>
            <a href="">规则中心</a>
            <a href="">手机应用</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.header {
    background-color: #1e89e0;
    height: 60px;
    overflow: hidden;
}

.header .logo {
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

.top-nav-left {
    float: left;
}

.top-nav-right {
    float: right;
}

.top-nav {
    overflow: hidden;
}

.top-nav a {
    display: block;
    width: 112px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    text-align: center;
    float: left;
}

.top-nav .focus {
    background-color: #006bc7;
}

.top-nav a:hover {
    background-color: #0c77d1;
}
</style>


