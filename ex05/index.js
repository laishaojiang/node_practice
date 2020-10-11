const {EventEmitter} = require('events')
const emitter = new EventEmitter()
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    // 暗号 搜索算法
    onConn(fn) {
        emitter.on('even',fn)
    }

    connection(arg) {
        emitter.emit('even',arg)
    }
    // ##END##
}
