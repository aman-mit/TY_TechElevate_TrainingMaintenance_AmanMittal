const express = require('express');
const app = express();
const sendRouter = require('./Router/sendMSG');
const bodyparser = require('body-parser');
const messageRouter = require('./Router/message');

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(bodyparser.urlencoded ({extended : true}))
app.use(sendRouter);
app.use(messageRouter);






app.listen(2000 , (err) => {
    if(!err) {
        console.log('Port :2000');
    }
});