
const express = require('express');
const router = express.Router();

const messageController = require('../controller/message');

router.get('/allMessage' , messageController.getAllMesaage);




module.exports = router;
