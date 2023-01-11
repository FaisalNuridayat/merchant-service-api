let express = require('express')
let router = express.Router()
let authController = require('../controllers/authController')
let merchantController = require('../controllers/merchantController')
let productController = require('../controllers/productController')
let authMiddleware = require('../middlewares/authMiddleware')


router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
router.post('/login', authController.login)

router.get('/merchant', authMiddleware.isAunthenticate ,merchantController.getMerchant)
router.get('/merchant/:id', authMiddleware.isAunthenticate ,merchantController.getMerchantById)
router.post('/merchant', authMiddleware.isAunthenticate, merchantController.createMerchant)
router.put('/merchant/:id', authMiddleware.isAunthenticate, merchantController.updateMerchant)
router.delete('/merchant/:id', authMiddleware.isAunthenticate, merchantController.deleteMerchant)


router.get('/product', productController.getProduct)
router.get('/product/:id', productController.getProductById)
router.post('/product', productController.createProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)


module.exports = router