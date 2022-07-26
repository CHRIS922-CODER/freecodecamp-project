let express = require('express');
let app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
// inserting public files
app.use('/public',express.static(__dirname + '/public'))

// Implement a Root-Level Request Logger Middleware

app.use((req,res,next)=>{
  console.log(req.method + " "+ req.path + " - " + req.ip)
  next();
});
app.use(bodyParser.urlencoded({extended:true}))
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

// chain a middleware to create 

app.get('/now',(req,res,next)=>{
  req.time = new Date().toString()
  console.log(req.time)
  next()
},(req,res)=>{
  res.json({time:req.time});
})

//Get Route Parameter Input from the Client
app.get('/:word/echo',(req,res)=>{
  res.json({echo:req.params.word})
})

// Get Query Parameter Input from the Client
app.get('/name',(req,res)=>{

console.log(req.query);
  res.json({name:req.query.first + " " + req.query.last})
})

//Get Data from POST Requests
app.post('/name',(req,res)=>{

  console.log(req.query);
    res.json({name:req.body.first + " " + req.body.last})
  })







































 module.exports = app;
