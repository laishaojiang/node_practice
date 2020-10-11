const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    // ##BEGIN## 代码已加密
    // 暗号 递归
    const list = fs.readdirSync(path)
    console.log(list)
    return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${list.map(file =>
`{
    path: '/${file.replace('.vue','')}',
    name: '${file.replace('.vue', '')}',
    component: () => import('./views/${file}')
},
`).join('')}
    ]
})`
// ##END##
}