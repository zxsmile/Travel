const crypto = require('crypto')

module.exports={
    MD5_SUFFIX:'zggdse447jjgjhja^&&^$$###7878[900(juaygxnxjasuaus^78%^$#@!!)u我i我i的那些年UUHhx',
    md5:function(str){
        var obj = crypto.createHash('md5')
        obj.update(str+this.MD5_SUFFIX)
        return obj.digest('hex')
    }
}
