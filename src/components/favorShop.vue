<template>
    <div id="favorShop">
        <el-card :body-style="{ padding: '0px' }">
            <img src="http://opoo4xr3d.bkt.clouddn.com/favor-rst-bg1.jpg">
            <div style="padding: 14px;">
                <a href="javascript:;">{{shop.name}}</a>
                <div class="bottom clearfix">
    
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'favorShop',
    data() {
        return {}
    },
    props: ['shop']
}
</script>
<style lang="less" scoped>
#favorShop {
    .el-card {
        width: 245px;
        height: 220px;
        float: left;
        margin-right: 10px;
        margin-bottom: 20px;
        img {
            display: block;
            width: 100%;
            height: 85px;
            filter: blur(3px);
        }
    }
}
</style>
