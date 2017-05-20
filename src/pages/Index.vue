<template>
    <div id="index">
        <h1>首页</h1>
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
import { Http } from "./../providers/http.js"
let http = new Http()
export default {
    name: "index",
    data() {
        return {
            pageSize: 12,
            pageNumber: 0,
            showMoreBtn: true,
            lists: ''
        }
    },
    components: {
        ShopSingle
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
            this.lists = res
        })
    },
    methods: {
        getStoreInfo() {
            this.pageNumber++;
            let param = {
                url: 'api/getStoreInfo',
                params: {
                    pageSize: this.pageSize,
                    pageNumber: this.pageNumber
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


