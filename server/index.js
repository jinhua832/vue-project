//搭建express服务
const express = require('express')
const app = express()
//post 请求表单数据
app.use(express.urlencoded({ extended: true }))

//路由--产品
const router = require('./router')

app.use('/',router)

app.listen(7788,()=>{
    console.log(7788);
})
