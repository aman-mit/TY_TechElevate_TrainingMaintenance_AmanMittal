const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const mongoose = require('mongoose');


app.set('view engine' , 'ejs');
app.set('views' ,  'views');
app.use(adminRoutes);



const mongodburi = 'mongodb://localhost:27017/Practice';
mongoose.connect(mongodburi).then(result => {
    console.log('Mongoose connected');
    app.listen(3500, (err) => {
        if(!err) {
            console.log(err);
        }
    })
      
}).catch(err => {
    console.log(err);
})