const mongoose = require('mongoose')

const appUserSchema = new mongoose.Schema({
  name: String,
  sex: String
})

const partnerStoreSchema = new mongoose.Schema({
  storeId: String,
})

const storeMenuSchema = new mongoose.Schema({
  name: String,
  abstract: String,
  price: Number,
  photo: String,
  marking: String,
  sales: Number,
  comment: Array
})

const Models = {
  AppUser: mongoose.model('appUser', appUserSchema, 'appUser'),
  partnerStore: mongoose.model('partnerStore', partnerStoreSchema, 'partnerStore'),
  storeMenu: mongoose.model('menu', storeMenuSchema, 'menu')
}

module.exports = Models
