let express = require('express');
let app = express();
require('dotenv').config()
// inserting public files
app.use('/public',express.static(__dirname + '/public'))

// Implement a Root-Level Request Logger Middleware

app.use((req,res,next)=>{
  console.log(req.method + " "+ req.path + " - " + req.ip)
  next();
});
// setting the route

app.get('/',(req,res)=>{
  res.sendFile(__dirname +'/views/index.html');
})
// serving a json 
app.get('/json',(req,res)=>{

   
    // use .env
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({"message": "HELLO JSON"})
  }else{
    console.log('goodbye')
    res.json({"message": "Hello json"})
  }
})





































 module.exports = app;
