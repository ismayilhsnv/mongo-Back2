const express = require("express")
const { ProductController } = require("../controller/Product.controller")
const router = express.Router()


router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", ProductController.add);
router.put("/:id", ProductController.edit);
router.delete("/:id", ProductController.delete)

module.exports = router