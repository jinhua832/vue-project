<template lang="">
    <div class="layout">
        <!-- 左侧导航 -->
        <div class="menu">
            <Menu></Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content">
            <Content></Content>
        </div>
    </div>
</template>
<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'
export default {
    components:{
        Menu,
        Content
    }
}
</script>
<style lang="less" scoped>
    .layout{
        display: flex;
        .menu{
            width: 200px;
            background: #666;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
        }
        .content{
            width: 100%;
            margin-left: 200px;
        }
    }
</style>