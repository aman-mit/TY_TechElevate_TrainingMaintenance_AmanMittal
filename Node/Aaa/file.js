let person  = [{
    name: 'Ayush',
    age: 23,
    sname : 'Anand'
} , {
    name: 'Om',
    age: 23,
    sname : 'ba'
} , {
    name: 'yyy',
    age: 23,
    sname : 'hh'
}];


const fs  = require('fs');
 fs.writeFile('data.json' , JSON.stringify(person) , (err) => {
        console.log(err);
 })

 fs.readFile('data.json' ,(err , data) => {
     if(!err) {
        let stringyfy = JSON.parse(data);
        console.log(stringyfy);
     }
 })

 //sync way
 fs.appendFileSync('msg.txt' , 'writing a file xxxxxxxxxxxxx.  ');

 let data = fs.readFileSync('msg.txt');
//  console.log(data);
 let stringfy  =data.toString();
 console.log(stringfy);

 //async way
//arguement as 1-filename 2=data 3=err
 fs.appendFile('async.txt' , 'async..' , (err => {
     if(err) {
         console.log(err);
     }
 }));

 fs.readFile('async.txt' , (err , data) => {
     if(err) {
         console.log(err);
     } else {
         let stringfy = data.toString();
         console.log(stringfy);
     }
 })

 //
 const fs1 = require('fs');
 fs1.writeFileSync('msg1.txt' , "Ayush Anand Anand");

 fs1.readFile('msg1.txt' ,(err , data)=> {
     if(err) {
         console.log(err);
     }
     else {
         let stringfydata = data.toString() ;
         fs1.writeFile('msg2.txt' , stringfydata , (err => {
             if(!err) {
                 console.log(stringfydata);
             }
         }))
     }
 })