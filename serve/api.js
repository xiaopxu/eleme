const express = require('express')
const router = express.Router()
const db = require('./db')
const model = require('./model')

//请求用户信息
router.post('/api/login', (req, res) => {
  let param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  model.AppUser.findOne(param, (err, data) => {
    console.log(data)
    if (err) {
      res.json({
        code: "400",
        data: {},
        message: "登陆失败"
      })
    } else {
      if (data.userPwd === param.userPwd) {
        res.json({
          code: "200",
          data: data,
          message: "登陆成功"
        })
      } else {
        res.json({
          code: "400",
          data: {},
          message: "用户名或密码错误"
        })
      }
    }
  })
})

router.post('/api/getStoreInfo', (req, res) => {
  let param = {
    pageSize: req.body.pageSize || 10,
    pageNumber: req.body.pageNumber || 0
  }

  model.partnerStore.find().skip(param.pageSize * param.pageNumber).limit(param.pageSize).exec((err, data) => {
    if (err || data === null || (Array.isArray(data) && data.length === 0)) {
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
