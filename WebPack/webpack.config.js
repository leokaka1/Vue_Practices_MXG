// 需要导入path去改变相对路径为绝对路径
const path = require('path')
module.exports = {
    // 入口模块文件路径
    entry : './src/main.js',
    // 出口
    output:{
        // path:'./dist/',
        // 必须引用path去改变绝对路径
        path:path.join(__dirname,"./dist/"),
        filename:'bundle.js'
    }
}