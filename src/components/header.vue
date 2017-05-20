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
            <!--下拉菜单-->
            <el-dropdown class="top-nav-user">
                <span class="el-dropdown-link">
                    {{nickName}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="dropdown-item">
                        <i class="el-icon-arrow-down"></i>个人中心</el-dropdown-item>
                    <el-dropdown-item class="dropdown-item">
                        <i class="el-icon-star-on"></i>我的收藏</el-dropdown-item>
                    <el-dropdown-item class="dropdown-item">
                        <i class="el-icon-arrow-down"></i>我的地址</el-dropdown-item>
                    <el-dropdown-item class="dropdown-item">
                        <i class="el-icon-arrow-down"></i>安全设置</el-dropdown-item>
                    <el-dropdown-item class="dropdown-item" divided>
                        <i class="el-icon-setting"></i>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { Http } from './../providers/http.js'
let http = new Http();
export default {
    name: "header",
    data() {
        return {
            logo: "饿了么",
            nickName: ""
        }
    },
    mounted() {
        console.log("mounted")
        //请求用户数据
        // let param = {
        //     url: 'api/getUserInfo',
        //     params: {
        //         uid: "1"
        //     }
        // }
        // http.post(param)
        //     .then(res => {
        //         this.nickName = res.nickName;
        //     })
        //     .catch(err => { })

        // let param2 = {
        //     url: 'api/getStoreInfo',
        //     params: {
        //         storeId: "1"
        //     }
        // }
        // http.post(param2)
        // .then(res => { })
        // .catch(err => { })
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
@import url('./../../static/css/theme');
#header {
    background-color: @blue;
    height: 60px;
    overflow: hidden;
    padding: 0 20px;
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
        padding: 0 10px;
        a {
            display: block;
            width: 112px;
            height: 60px;
            line-height: 60px;
            color: #fff;
            text-align: center;
            float: left;
        }
        .top-nav-user {
            float: left;
            height: 60px;
            line-height: 60px;
            color: #fff;
            margin-left: 100px;
            cursor: pointer;
            i {
                padding-left: 10px;
            }
            .dropdown-item {
                i {
                    padding-right: 10px;
                }
            }
        }
    }
    .top-nav-left {
        float: left;
        a:hover {
            background-color: @blue-hover;
        }
        .focus {
            background-color: @blue-focus;
        }
    }
    .top-nav-right {
        float: right;
        a {
            color: #d2e7f9;
            font-size: 14px;
            width: 90px;
        }
        a:hover {
            color: #fff;
        }
    }
}
</style>


