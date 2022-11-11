const express = require('express');
const router = express.Router();
const productData = require('../data/products.json')
const {logData} = require('../middlewares/logger')

router.get('/', logData, (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = productData.filter((product) => {
           return product.category === category
        }) 
        if (filteredProducts.length !== 0) {
            res.json(filteredProducts)
        } else {
            res.send("Sorry no product in the category")
        }
    } else {
        res.json(productData)
    }
})

//Route Params
router.get('/:productID', (req, res) => {
    const { productID } = req.params;
    if (productID <= productData.length) {
        res.json(productData[productID - 1])
    } else {
        res.send("Index doesn't exist")
    }
})


router.post('/', (req, res) => {
    console.log(req.body);
    res.send("POST");
})

router.patch('/:productID', (req, res) => {
    res.send("PATCH")
})

router.delete('/:productID', (req, res) => {
    res.send("DELETE")
})

module.exports = router;
