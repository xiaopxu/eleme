<template>
    <div id="sidebar">
        <el-row class="tac">
            <el-col :span="4">
                <div v-for="list in sidebarList" class="sidebar-box">
                    <h2 :class="{canlink : list.path}" @click="goPage(list)">{{list.title}}</h2>
                    <div v-for="child in list.children">
                        <a @click="goPage(child)" :class="{active : activeTabTitle == child.title}">{{child.title}}</a>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "sidebar",
    methods: {
        goPage(list) {
            if (typeof list.title != 'string') {
                this.$message.error('page名称传输错误');
                return
            }
            if (list.title == "我的订单" || list.title == "我的资产" || list.title == "我的资料") {
                return
            }
            this.activeTabTitle = list.title;
            this.$router.push('/' + list.path)
        }
    },
    data() {
        return {
            activeTabTitle: "近三月订单",
            sidebarList: [
                {
                    title: '个人中心',
                    path: 'order/personalCenter',
                    icon: 'home',
                },
                {
                    title: '我的订单',
                    icon: '',
                    children: [
                        {
                            title: '近三月订单',
                            path: 'order/nearby',
                            icon: ''
                        },
                        {
                            title: '待评价订单',
                            path: 'order/pending',
                            icon: ''
                        },
                        {
                            title: '退单记录',
                            path: 'order/pending',
                            icon: 'chargeback'
                        }
                    ]
                },
                {
                    title: '我的资产',
                    icon: '',
                    children: [
                        {
                            title: '我的红包',
                            path: 'order/nearby',
                            icon: ''
                        },
                        {
                            title: '账户余额',
                            path: 'order/pending',
                            icon: ''
                        },
                        {
                            title: '我的积分',
                            path: 'order/pending',
                            icon: 'chargeback'
                        }
                    ]
                },
                {
                    title: '我的资料',
                    icon: '',
                    children: [
                        {
                            title: '个人资料',
                            path: 'order/nearby',
                            icon: ''
                        },
                        {
                            title: '地址管理',
                            path: 'order/pending',
                            icon: ''
                        },
                        {
                            title: '安全中心',
                            path: 'order/pending',
                            icon: 'chargeback'
                        },
                        {
                            title: '修改密码',
                            path: 'order/pending',
                            icon: 'chargeback'
                        }
                    ]
                },
                {
                    title: '我的收藏',
                    icon: ''
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./../../static/css/theme');
#sidebar {
    padding-left: 50px;
    .canlink {
        cursor: pointer;
    }
    .sidebar-box {
        margin-bottom: 40px;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    a {
        display: block;
        color: #666;
        font-size: 14px;
        margin-bottom: 10px;
    }
    a.active {
        color: @blue;
    }
}
</style>


