exports.getMessageForm = (req, res, next) =>{
    res.render('addMessage');
}

let Message=[];

exports.postMessageForm = (req, res, next) => {
    const message = req.body;
    console.log(message);
    Message.push(message);
    res.redirect('/allMessage');
}



exports.Message = Message