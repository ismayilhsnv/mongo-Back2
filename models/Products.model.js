const mongoose = require("mongoose")

const Product = mongoose.model("Product", new mongoose.Schema({
    title: String,
    desc: String,
    image: String
}))

module.exports = { Product }