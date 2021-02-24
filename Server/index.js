const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const cors  = require('cors')
const User = require('./User');
//Dot env

let port = process.env.PORT;
if (port == null || port === "") {
  port = 3000;
}


//Connection to DB
mongoose.connect("mongodb+srv://dbUser:Bhola1009@placement.ldkbe.mongodb.net/dbUser?retryWrites=true&w=majority",
    { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
},
    ()=>{
    console.log("Connected to db");
});

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
  app.use(express.static(path.join(__dirname, "/../build")));


app.get('/api',(req,res)=>{
    User.find({}, (err, result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.json(result);
        }
   })
})




app.post('/api',(req,res)=>{
   console.log(req.body)

   User.find(req.body,
   (err,result)=>{
      if(err){
          res.status(401);
          res.send(err);
      } 
      if(result){
          res.status(200);
          res.json(result);
      }
   })
});
app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`${__dirname}/../build/index.html`));
    } catch (e) {
      res.send("Welcome to Rancho Labs");
    }
  });
  
app.listen(port, function() {
    console.log("Server started on port " + port);
  });
