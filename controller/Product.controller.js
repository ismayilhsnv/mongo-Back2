const { Product } = require("../models/Products.model")

const ProductController = {
    getAll: async (req, res) => {
        try {
            const products = await Product.find({})
            res.status(200).send(products)
        }
        catch (error) {
            res.status(404).send("error")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const product = await Product.findById(id)
            res.status(200).send(product)
        }
        catch (error) {
            res.status(404).send("error")
        }
    },
    add: async (req, res) => {
        try {
            const { title, desc, image } = req.body
            const newProduct = new Product({ title, desc, image })
            await newProduct.save()
            res.status(201).send("product is created")
        }
        catch (error) {
            res.status(404).send("error")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { title, desc, image } = req.body
            await Product.findByIdAndUpdate(id,{ title, desc, image })
            res.status(203). send("product updated")
        }
        catch (error) {
            res.status(404).send("error")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Product.findByIdAndDelete(id)
            res.send("product is deleted")
        }
        catch (error) {
            res.send("error")
        }
    }
}
module.exports = { ProductController }