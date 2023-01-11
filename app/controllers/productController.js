let models = require('../../models/index')

async function getProduct(req,res) {
    try {
        let result = await models.Product.findAll() // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }

}

async function getProductById(req,res) {
    try {
        let result = await models.Product.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
    
}

async function createProduct(req,res) {
    try {
        let createProduct = await models.Product.create(req.body)
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateProduct(req,res) {
    try {
        let result = await models.Product.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateProduct = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
    
}

async function deleteProduct(req,res) {
    try {
        let deleteProduct = await models.Product.destroy ({where: {id: req.params.id}})
        
    res.json({ message: "delete product", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getProduct, getProductById,
    createProduct, updateProduct, deleteProduct
}