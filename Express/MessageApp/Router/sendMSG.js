const express = require('express');
const router = express.Router();
const sendController = require('../controller/sendMsg');

router.get('/' , sendController.getMessageForm);
router.post('/message' , sendController.postMessageForm);


module.exports = router ;