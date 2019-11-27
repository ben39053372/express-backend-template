const axios = require('axios');
require('dotenv').config

const appsecret = process.env.APPSECRET
const appid = process.env.APPID

axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`)
    .then( res => {
        console.log(res);
        process.env.ACCESS_TOKEN = res.body.access_token
    })
    .catch( err => {
        console.log(err);
    })