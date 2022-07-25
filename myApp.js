let express = require('express');
let app = express();
// inserting public files
app.use('/public',express.static(__dirname + '/public'))
// setting the route
app.get('/',(req,res)=>{
  res.sendFile(__dirname +'/views/index.html');
})
// serving a json 
app.get('/json',(req,res)=>{

    console.log(process.env.MESSAGE_STYLE)
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({"message": "Hello Json"})
  }else{
    console.log('goodbye')
    res.json({"message": "HELLO JSON"})
  }
})
// use .env





































 module.exports = app;
