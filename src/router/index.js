import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'

const Product = ()=>import('@/views/product/index.vue')
const List = ()=>import('@/views/product/list/index.vue')
const Category = ()=>import('@/views/product/category/index.vue')

const Order = ()=>import('@/views/order/index.vue')
const OrderList = ()=>import('@/views/order/list/index.vue')
const Collection = ()=>import('@/views/order/collection/index.vue')

const Advert = ()=>import('@/views/advert/index.vue')
const AdvertList = ()=>import('@/views/advert/list/index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'/',
                name:'home',
                component:Home
            },
            {
                path:'/product',
                name:'/product',
                component:Product,
                children:[
                    {
                        path:'list', //  访问路径:  /product/list
                        name:'list',
                        component:List,
                    },
                    {
                        path:'category',
                        name:'category',
                        component:Category,
                    }
                ]
            },
            {
                path:'/order',
                name:'/order',
                component:Order,
                children:[
                    {
                        path:'list', 
                        name:'list',
                        component:OrderList,
                    },
                    {
                        path:'collection',
                        name:'collection',
                        component:Collection,
                    }
                ]
            },
            {
                path:'/advert',
                name:'/advert',
                component:Advert,
                children:[
                    {
                        path:'list', 
                        name:'list',
                        component:AdvertList,
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]
const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router