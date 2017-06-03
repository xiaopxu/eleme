<template>
    <div class="type-nav">
        <div class="nav-title">
            商家分类
        </div>
        <div class="nav-content">
            <el-tabs v-model="initType" type="card" @tab-click="getstoreType1">
                <div v-for="typeList in typeLists">
                    <el-tab-pane :label="typeList.title" :name="typeList.id">
                        <span v-for="childList in typeList.childLists">
                            <el-button @click="getstoreType2(typeList,childList)">{{ childList.title }}</el-button>
                        </span>
                    </el-tab-pane>
                </div>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { Http } from "./../providers/http.js"
let http = new Http()
export default {
    name: "type-nav",
    methods: {
        getStoreInfo(typeListId, typeId) {
            let param = {}
            if (typeListId === "0" && typeId === "0") {
                param = {
                    url: 'api/getStoreInfo',
                    params: {
                        pageSize: 12,
                        pageNumber: 0
                    }
                }
            } else {
                param = {
                    url: 'api/getStoreInfoByTypeId',
                    params: {
                        pageSize: 12,
                        pageNumber: 0,
                        storeType1: typeListId,
                        storeType2: typeId
                    }
                }
            }
            http.post(param).then(res => {
                this.lists = res;
                this.$emit("sendStoreType", {
                    lists: this.lists,
                    storeType1: typeListId,
                    storeType2: typeId
                });
            })
            // this,$emit('getStoreType',{参数})
        },
        getstoreType1(type) {
            console.log(type.name)
            event.stopPropagation()
            this.getStoreInfo(type.name, '0')
        },
        getstoreType2(typeList, childList) {
            console.log(typeList.id)
            console.log(childList.id)
            event.stopPropagation()
            this.getStoreInfo(typeList.id, childList.id)
        }
    },
    data() {
        return {
            initType: '0',
            lists: [],
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


