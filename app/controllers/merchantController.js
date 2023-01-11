let models = require('../../models/index')
let bcrypt = require('bcrypt')
let Validator = require('validatorjs')

async function getMerchant(req,res) {
    try {
        let result = await models.Merchant.findAll({
            include: {
                association: 'product',
                attributes: ['id',  'product_name' ,'price', 'quantity']
            }
        }) // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }

        res.json(result)
 } catch (error) {
        res.json(error)
    }
}


async function getMerchantById(req,res) {
    try {
        let result = await models.Merchant.findOne({ where: {id: req.params.id} ,  include: {
            association: 'product',
            attributes: ['id',  'product_name' ,'price', 'quantity']
        } })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createMerchant(req,res) { 
    try {
        let rules = { 
        name: 'required|min:3|max:50',
        email: 'required|email|min:3|max:50',
        password: 'required|min:6',
        address: 'required',
        phone_number: 'required|numeric'

    }
    let validation = new Validator(req.body, rules)
    if(!validation.passes()) {
        res.json(validation.errors.all())
    }


    let salt = bcrypt.genSaltSync(10)
    let password = bcrypt.hashSync(req.body.password, salt)
    req.body.password =password

    let createUser = await models.Merchant.create(req.body)
    
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateMerchant(req,res) {
    try {
        let result = await models.Merchant.findOne({ where: {id: req.params.id} }) 
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateMerchant = await result.update(req.body)
       
        res.json(result) 
    } catch (error) {
        res.json(error)
    }

}

async function deleteMerchant(req,res) {
    try {
    let deleteMerchant = await models.Merchant.destroy ({ where: { id: req.params.id} })

    res.json({message: "Merchant delete", id: req.params.id})    
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getMerchant, getMerchantById, createMerchant, updateMerchant,deleteMerchant
}