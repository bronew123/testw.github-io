const express = require("express");
const app = express();
const cors = require('cors');
//var bodyParser = require("body-parser");
//var parser = bodyParser.urlencoded({extended:false});
//listen

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  
}))
app.get("/", function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send("<h1>Test</h1>");
});

app.post("/", function (req, res) {
  console.log(req.body);
  console.log("Post received");
  res.send(req.body);
});

app.listen(3000);
