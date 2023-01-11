
let models = require('../../models/index')
let jwt    = require('jsonwebtoken')
let bcrypt = require('bcrypt')

async function login(req,res) {
    try {
        let result = await models.Merchant.findOne({where: {email: req.body.email}}) 
        if(result.length < 1) {
            res.send("merchant not found")
        }

        let password = req.body.password
        let match = await bcrypt.compare(password, result.password)
        if(!match) {
            res.send("Email or password wrong")
        } 

        let payload = {
            id : result.id,
            name: result.name,
            email: result.email,
        }
        let token = jwt.sign(payload, 'secret')

        res.json({message: "login success", access_token: token})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    login
}