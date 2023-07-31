var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.render('contacto') //view/contacto.hbs
})

module.exports = router