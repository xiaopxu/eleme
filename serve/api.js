var express = require('express')
var router = express.Router()
var db = require('./db')
    //请求用户信息
router.post('/api/getUserInfo', (req, res) => {
    let param = {
        sex: req.body.sex
    }
    db.User.findOne(param, (err, data) => {
        console.log(req.body)
        if (err) {
            console.log('NG')
            res.send(err)
        } else {
            console.log('OK')
            res.send(data)
        }
    })
})

module.exports = router