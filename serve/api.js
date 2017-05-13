const express = require('express')
const router = express.Router()
const db = require('./db')
const model = require('./model')

//请求用户信息
router.post('/api/getUserInfo', (req, res) => {
  let param = {
    uid: req.body.uid
  }
  model.AppUser.findOne(param, (err, data) => {
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

router.post('/api/getStoreInfo', (req, res) => {
  let param = {
    storeId: req.body.storeId
  }
  model.partnerStore.findOne(param, (err, data) => {
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
