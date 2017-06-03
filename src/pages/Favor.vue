<template>
    <div id="favor">
        <h3>我的收藏</h3>
        <div class="favor-feasible">
            <h4>当前区域共有
                <span>{{favorShopCount}}</span>
                家可配送
            </h4>
            <el-row>
                <div v-for="shop in favorShopList">
                    <favorShop :shop="shop"></favorShop>
                </div>
            </el-row>
    
        </div>
        <div class="favor-infeasible">
            <h4>当前区域不可配送的商家</h4>
        </div>
    </div>
</template>
<script>
import favorShop from './../components/favorShop'
import { Http } from "./../providers/http.js"
let http = new Http()
export default {
    name: 'favor',
    components: {
        favorShop
    },
    data() {
        return {
            favorShopList: [],
            favorShopCount: "0"
        }
    },
    methods: {
        getFavorShop(userId) {
            let param = {
                url: 'api/getFavorShop',
                params: {
                    userId: userId
                }
            }
            http.post(param)
                .then(res => {
                    this.favorShopList = res;
                    this.favorShopCount = res.length;
                })
        }
    },
    mounted() {
        this.getFavorShop('5916c556ee1d9b37d83083a9')
    }
}
</script>
<style lang="less" scoped>
#favor {
    h3 {
        border-bottom: 2px solid #f4f4f4;
        padding: 0 20px 11px;
        font-size: 18px;
        font-weight: 700;
    }
    .favor-feasible {
        width: 100%;
        margin-top: 30px;
        h4 {
            font-size: 14px;
            margin-bottom: 12px;
            span {
                color: red;
            }
        }
    }
    .favor-infeasible {
        margin-top: 30px;
        h4 {
            font-size: 14px;
            margin-bottom: 12px;
        }
    }
}
</style>