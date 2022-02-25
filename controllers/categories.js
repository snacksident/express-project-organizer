let express = require('express')
let db = require('../models')
let router = express.Router()

// GET /categories/
router.get('/', async (req,res)=>{
    // console.log('hit the /categories route')
    let categories = await db.category.findAll()
    console.log(categories[0].dataValues.name)
    res.render('categories/index',{categories})
})

module.exports = router