const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
         // ##BEGIN## 代码已加密

         //  暗号 二分查找
        readStream.on('data', (data) => {
            console.log(`读取的数据：${data}`)
            reqData.push(data)
            size += data.length
        }) 

        readStream.on('end', () => {
            console.log('读取结束')
            const data = Buffer.concat(reqData, size).toString()
            console.log('data4:', data)
            resolve(JSON.parse(data))
        })
         // ##END##
    })
}
