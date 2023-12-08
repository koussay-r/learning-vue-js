const mongoose = require('mongoose')
const schema = mongoose.Schema({
    img: String,
      title: String,
      reviews: String,
      prevPrice: String,
      newPrice: String,
      company: String,
      color: String,
      category: String,
})
const model=mongoose.model("products",schema,"products")
module.exports =model