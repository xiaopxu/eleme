var express = require('express')
var router = express.Router()
var db = require('./db')

//请求用户信息
router.post('/api/getUserInfo', (req, res) => {
  let param = {
    sex: req.body.sex
  }
  db.User.findOne(param, (err, data) => {
    console.log(data)
    if (err) {
      res.json({
        code: "400",
        data: {},
        message: "请求数据失败"
      })
    } else {
      res.json({
        code: "200",
        data: data,
        message: "请求数据成功"
      })
    }
  })
})

module.exports = router
