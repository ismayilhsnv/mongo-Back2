const mongoose = require("mongoose")

const Product = mongoose.model("Product", new mongoose.Schema({
    price: Number,
    desc: String,
    image: String
}))

module.exports = { Product }