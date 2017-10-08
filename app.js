const express  = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const promise = mongoose.connect('mongodb://localhost/attendance', {
//      useMongoClient: true,
//    });
const promise = mongoose.connect("mongodb://abugi:jankara@ds115035.mlab.com:15035/youth_mobile_register", {
  useMongoClient: true,
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

const schema = new mongoose.Schema(
     {
          firstName: String,
          lastName: String,
          otherNames: String,
          passport: String,
          clas: String,
          image: String,
          info: String
     }
);

const Attendance = mongoose.model("Attendance", schema);

app.get("/", function(req, res){
     res.render("index");
});

app.post("/post", function(req, res){

     const firstName = req.body.fn.toUpperCase();
     const lastName = req.body.ln.toUpperCase();
     const otherNames = req.body.on.toUpperCase();
     const passport = req.body.image;
     const clas = req.body.clas;
     const info = req.body.info;

     Attendance.create({firstName, lastName, otherNames, passport, clas, info}, function(err, record){
          if(err){
               console.log(err);
          }else{
               res.redirect("/");
          }
     });
});

app.get("/post", function(req, res){
     Attendance.find({}, function(err, record){
          if(err){
               console.log(err)
          }else{
               res.render("record", {record: record});
          }
     });
});

app.listen(process.env.PORT || 3000, function(){
     console.log("attendance app live on port 3000");
});
