const express = require('express')
const router = express.Router()
const db = require('./db')
const model = require('./model')
const mongoose = require('mongoose')

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

//获取全部门店信息（分页）
router.post('/api/getStoreInfo', (req, res) => {
  let param = {
    pageSize: req.body.pageSize || 10,
    pageNumber: req.body.pageNumber || 0
  }

  model.partnerStore.find()
    .skip(param.pageSize * param.pageNumber)
    .limit(param.pageSize)
    .exec((err, data) => {
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

//获取分类门店信息（分页）
router.post('/api/getStoreInfoByTypeId', (req, res) => {
  let param = {
    pageSize: req.body.pageSize || 10,
    pageNumber: req.body.pageNumber || 0,
    storeType1: req.body.storeType1,
    storeType2: req.body.storeType2
  }
  let cb = (err, data) => {
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
  }
  if (param.storeType1 !== "0" && param.storeType2 !== "0") {
    model.partnerStore.find()
      .where('storeType1').equals(param.storeType1)
      .where('storeType2').equals(param.storeType2)
      .skip(param.pageSize * param.pageNumber)
      .limit(param.pageSize)
      .exec(cb)
  } else if (param.storeType1 === "0" && param.storeType2 !== "0") {
    model.partnerStore.find()
      .where('storeType2').equals(param.storeType2)
      .skip(param.pageSize * param.pageNumber)
      .limit(param.pageSize)
      .exec(cb)
  } else if (param.storeType1 !== "0" && param.storeType2 === "0") {
    model.partnerStore.find()
      .where('storeType1').equals(param.storeType1)
      .skip(param.pageSize * param.pageNumber)
      .limit(param.pageSize)
      .exec(cb)
  }

})

//获取收藏门店
router.post('/api/getFavorShop', (req, res) => {
  let param = {
    _id: mongoose.Types.ObjectId(req.body.userId)
  }
  model.AppUser.findOne()
    .where('_id').equals(param._id)
    .select('favorShop')
    .exec((err, data) => {
      if (err || data === null || (Array.isArray(data) && data.length === 0)) {
        res.json({
          code: "400",
          data: {},
          message: "请求数据失败"
        })
      } else {
        model.partnerStore.find({
          _id: {
            $in: data._doc.favorShop
          }
        }).exec((err, data) => {
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
      }
    })
})

//获取门店菜单
router.post('/api/getMenu', (req, res) => {
  let param = {
    storeId: mongoose.Types.ObjectId(req.body.storeId)
  }
  model.partnerStore.findOne()
    .where('_id').equals(param.storeId)
    .select('menu')
    .exec((err, data) => {
      if (err || data === null || (Array.isArray(data) && data.length === 0)) {
        res.json({
          code: "400",
          data: {},
          message: "请求数据失败"
        })
        return
      }
      model.storeMenu.find({
        _id: {
          $in: data._doc.menu
        }
      }).exec((err, data) => {
        if (err || data === null || (Array.isArray(data) && data.length === 0)) {
          res.json({
            code: "400",
            data: {},
            message: "请求数据失败"
          })
          return
        }
        res.json({
          code: "200",
          data: data,
          message: "请求数据成功"
        })
      })


    })
})
module.exports = router
