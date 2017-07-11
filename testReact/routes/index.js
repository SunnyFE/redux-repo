const express = require('express')

const router = express.Router()
const renderIndex = (req,res,next) => {
    res.render('index',{
        title:'',
        keywords:'',
        description:'',
        domain:'https://m.test.wingontravel.com/',
        resourceDomain:"https://webresource.test.wingontravel.com/",
        VERSION:'1.1.1'
    })
}
router.get('/',renderIndex)
router.get('index',renderIndex)

module.exports = router