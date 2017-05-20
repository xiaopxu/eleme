<template>
    <div class="shopSingle">
        <div class="shopLogoBox">
            <img :src="list.logo"></img>
            <span>{{ list.avgArriveTime}} 分钟</span>
        </div>
        <div class="shopData">
            <h5>{{list.name}}
                <span v-show="list.branch">({{list.branch}})</span>
            </h5>
            <div class="shopNum">
                <el-rate class="starNum" v-model="list.starValue" disabled allow-half text-color="#ff9900">
                </el-rate>
                <span>{{ list.sellNum }}</span>月售
                <i>{{ list.monthlySales }}</i>单</div>
            <div class="shopDelivery">配送费￥
                <i>{{ list.startdeliverPrice }}</i>
            </div>
            <div class="traitLable">
                <i class="onTime" v-if="list.additionalServices.onTime === '1'">准</i>
                <i class="newlyOpened" v-if="list.additionalServices.newlyOpened === '1'">新</i>
                <i class="foodSecurity" v-if="list.additionalServices.foodSecurity === '1'">保</i>
                <i class="invoice" v-if="list.additionalServices.invoice === '1'">票</i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "shopSingle",
    props: ["list"]
}
</script>

<style lang="less" scope>
.shopSingle {
    float: left;
    padding: 20px;
    height: 140px;
    width: 280px;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    overflow: hidden;
    .shopLogoBox {
        float: left;
        width: 70px;
        padding: 20px;
        color: #999;
        text-align: center;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
            margin-bottom: 12px;
        }
    }
    .shopData {
        float: right;
        width: 170px;
        h5 {
            font-size: 16px;
            margin-bottom: 6px;
            font-weight: 600;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #333;
        }
        .shopNum {
            // margin-left: 10px;
            color: #999;
            .el-rate {
                display: inline-block;
                width: 65px;
                .el-rate__icon {
                    display: inline-block;
                    font-size: 10px;
                    margin-right: 1px;
                }
            }
        }
        .shopDelivery {
            color: #999;
            margin-top: 3px;
        }
        .traitLable i {
            display: inline-block;
            width: 16px;
            height: 16px;
            color: #999;
            line-height: 16px;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 3px;
            margin-top: 9px;
            margin-right: 3px;
            font-style: normal;
        }
        .traitLable i.onTime {
            color: #fff;
            background-color: #1e89e0;
        }
        .traitLable i.newlyOpened {
            color: #fff;
            background-color: #e75959;
        }
    }
}
</style>

