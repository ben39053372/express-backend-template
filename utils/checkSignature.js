const crypto = require('crypto');

const checkSignature = (token, signature, timestamp, nonce) => {
    console.log("signature:", signature)
    var list = [token, timestamp, nonce];
    console.log("token, timestamp, nonce", list)
    const beforeHash = list.sort().join('')
    const hash = crypto.createHash('sha1').update(beforeHash).digest('hex')
    if(hash === signature) return true
    else return false
}

module.exports = checkSignature