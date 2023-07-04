const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
} 
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  },
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:process.env.NODE_ENV=='production'?'./':'/',//部署应用包时的基本 URL

  devServer: {
    proxy: {
      '/api': {
        // target:process.env.VUE_APP_BASE_URL,//http://localhost:9898/api
        target: 'http://localhost:9898',//http://localhost:9898/api
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  
})
