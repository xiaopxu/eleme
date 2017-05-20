<template>
    <div class="type-nav">
        <div class="nav-title">
            商家分类
        </div>
        <div class="nav-content">
            <el-tabs v-model="initType" type="card">
                <div v-for="typeList in typeLists">
                    <el-tab-pane :label="typeList.title" :name="typeList.id">
                        <span v-for="childList in typeList.childLists">
                            <el-button @click="getStoreInfo({typeList:typeList,childList:childList})">{{ childList.title }}</el-button>
                        </span>
                    </el-tab-pane>
                </div>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: "type-nav",
    methods: {
        getStoreInfo(list) {
            console.log(list)
            this.$emit('getStoreType', { typeListId: list.typeList.id, childListId: list.childList.id })
        }
    },
    data() {
        return {
            initType: '0',
            typeLists: [
                {
                    id: '0',
                    title: "全部商家",
                    childLists: [
                        {
                            id: '0',
                            title: "全部快餐便当"
                        }
                    ]
                },
                {
                    id: '1',
                    title: "快餐便当",
                    childLists: [
                        {
                            id: '0',
                            title: "全部快餐便当"
                        },
                        {
                            id: '1',
                            title: "简餐"
                        },
                        {
                            id: '2',
                            title: "汉堡"
                        }
                    ]
                },
                {
                    id: '2',
                    title: "特色菜系",
                    childLists: [
                        {
                            id: '0',
                            title: "全部快餐便当"
                        },
                        {
                            id: '1',
                            title: "简餐"
                        },
                        {
                            id: '2',
                            title: "汉堡"
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        console.log(this.typeLists)
    },

}
</script>
<style lang="less" scoped>
@import url("./../../static/css/theme.less");
</style>


