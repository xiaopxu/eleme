<template>
    <div id="index">
        <h1>首页</h1>
        <shopSingle v-for="list in list" list="list"></shopSingle>
    </div>
</template>
<script>
import shopSingle from "./components/shopSingle"
export default {
    name: "index",
    data() {
        return {
            list: [
                {
                    shopLogo: '',
                    expendTime: '40',
                    shopName: '必胜宅急送',
                    sellNum: '575',
                    shopRank: '99',
                    deliveryMoney: '9',
                    traitLable: '票'
                },
                {
                    shopLogo: '',
                    expendTime: '41',
                    shopName: '必胜宅急送3',
                    sellNum: '575',
                    shopRank: '',
                    deliveryMoney: '9',
                    traitLable: '票'
                },
                {
                    shopLogo: '',
                    expendTime: '42',
                    shopName: '必胜宅急送4',
                    sellNum: '575',
                    shopRank: '',
                    deliveryMoney: '9',
                    traitLable: '票'
                }
            ]

        }
    }
}
</script>
<style lang="less" scoped>

</style>


