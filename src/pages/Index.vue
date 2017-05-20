<template>
    <div id="index">
        <h1>首页</h1>
        <StoreType @getStoreType="getStoreInfo"></StoreType>
        <div class="clear">
            <div v-for="list in lists">
                <ShopSingle :list="list"></ShopSingle>
            </div>
        </div>
        <div class="moreBtn" v-if="showMoreBtn" @click="getStoreInfo">点击加载更多...</div>
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
            lists: '',
            listTypeId: '',
            childTypeId: ''
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
        getStoreInfo(type) {
            if (type) {
                this.listTypeId = type.typeListId
                this.childTypeId = type.childListId
            }
            let param = {
                url: 'api/getStoreInfo',
                params: {
                    pageSize: this.pageSize,
                    pageNumber: this.pageNumber,
                    listTypeId: this.listTypeId || '',
                    childTypeId: this.childTypeId || ''
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
            getStoreInfo({ listTypeId: this.listTypeId, childTypeId: this.childTypeId })
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


