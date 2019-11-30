const sendMessageController = require('./sendMsg')

exports.getAllMesaage = (req, res, next) => {
    res.render('message' , {
        Message : sendMessageController.Message
    });
}