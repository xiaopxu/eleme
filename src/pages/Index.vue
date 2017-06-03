<template>
    <div id="index">
        <h1>首页</h1>
        <StoreType @sendStoreType="refreshStoreData"></StoreType>
        <div class="clear">
            <div v-for="list in lists">
                <ShopSingle :listShop="list"></ShopSingle>
            </div>
        </div>
        <div class="moreBtn" v-if="showMoreBtn" @click="getNextPage">点击加载更多...</div>
    </div>
    </div>
</template>
<script>
import ShopSingle from "./../components/shopSingle"
import StoreType from "./../components/storeType"
import { Http } from "./../providers/http.js"
let http = new Http()
export default {
    name: "index",
    data() {
        return {
            pageSize: 12,
            pageNumber: 0,
            showMoreBtn: true,
            // value5: 3.7,
            lists: [],  //门店数组，用于展示门店
            storeType1: "0",
            storeType2: "0"
        }
    },
    components: {
        ShopSingle,
        StoreType
    },
    mounted() {
        let param = {
            url: 'api/getStoreInfo',
            params: {
                pageSize: this.pageSize,
                pageNumber: this.pageNumber
            }
        }
        http.post(param).then(res => {
            this.lists = res;
            if (res.length < this.pageSize) {
                this.showMoreBtn = false;
            }
        })
    },
    methods: {
        refreshStoreData(storeData) {
            this.lists = storeData.lists;
            this.storeType1 = storeData.storeType1;
            this.storeType2 = storeData.storeType2;
            if (this.lists.length < this.pageSize) {
                this.showMoreBtn = false;
            } else {
                this.showMoreBtn = true;
            }
            this.pageNumber = 0;
        },
        getStoreInfo() {
            let param = {}
            if (this.storeType1 === "0" && this.storeType2 === "0") {
                param = {
                    url: 'api/getStoreInfo',
                    params: {
                        pageSize: this.pageSize,
                        pageNumber: this.pageNumber
                    }
                }
            } else {
                param = {
                    url: 'api/getStoreInfoByTypeId',
                    params: {
                        pageSize: this.pageSize,
                        pageNumber: this.pageNumber,
                        storeType1: this.storeType1,
                        storeType2: this.storeType2
                    }
                }
            }

            http.post(param).then(res => {
                res.forEach(item => {
                    this.lists.push(item);
                });
                if (res.length < this.pageSize) {
                    this.showMoreBtn = false;
                }
            })
        },
        getNextPage() {
            this.pageNumber++;
            this.getStoreInfo()
        }
    }
}
</script>
<style lang="less" scoped>
// @import url("./../../static/css/theme.less");
.clear {
    overflow: hidden;
}

.moreBtn {
    line-height: 3;
    background-color: #ddd;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    color: #777;
    width: 100%;
}
</style>


