const mongoose = require('mongoose')

const appUserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  sex: String
})

const partnerStoreSchema = new mongoose.Schema({
  storeId: String
})

const Models = {
  AppUser: mongoose.model('appUser', appUserSchema, 'appUser'),
  partnerStore: mongoose.model('partnerStore', partnerStoreSchema, 'partnerStore')
}

module.exports = Models