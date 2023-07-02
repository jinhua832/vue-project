<template lang="">
    <div>
        <!-- 顶部 -->
        <div class="header">
            <div class="open">
                <span v-if="!isCollapse" class="iconfont icon-toggle-left" @click="changeMenu"></span>
                <span v-else class="iconfont icon-toggle-right" @click="changeMenu"></span>
            </div>
        </div>
        <!-- 内容 -->
        <router-view></router-view>
    </div>
</template>
<script>

export default {
   props:['isCollapse'],
   methods:{
    changeMenu(){
        this.$emit('changeShow')
    }
   }
}
</script>
<style lang="less" scoped>
.header{
    height: 50px;
    background: #42A7FF;
    color: #fff;
    line-height: 50px;
    .open{
        .iconfont{
            font-size: 24px;
            cursor: pointer;
        }
    }
}
</style>