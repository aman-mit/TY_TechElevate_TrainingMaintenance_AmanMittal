const express = require('express');
const router = express.Router();


const adminController = require('../controller/admin')



router.get('/addProduct' , adminController.getAddProductForm);
// router.post()







module.exports = router;