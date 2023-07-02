<template lang="">
    <div>
        <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        background-color="#112f50"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollapse"
       >
      <el-menu-item>
        <span slot="title">首客生鲜采购系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">
            <i class="el-icon-setting"></i>
             <span slot="title">产品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/category">
            <i class="el-icon-setting"></i>
             <span slot="title">产品分类</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/list">
            <i class="el-icon-setting"></i>
             <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/collection">
            <i class="el-icon-setting"></i>
             <span slot="title">订单汇总</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/advert">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/list">
            <i class="el-icon-setting"></i>
             <span slot="title">产品列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    props:['isCollapse']
}
</script>
<style lang="less" scoped>
    .el-menu{ 
        border-right: 0;
    }
    /deep/ .is-active{
        background: #1e78bf!important;
        color: #fff!important;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>