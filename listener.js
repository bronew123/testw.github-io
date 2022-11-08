const express = require("express");
const app = express();
const cors = require('cors');
//var bodyParser = require("body-parser");
//var parser = bodyParser.urlencoded({extended:false});
//listen

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin:'*',
  
}))
app.get("/", function (req, res) {
  res.send("<h1>Test</h1>");
});

app.post("/", function (req, res) {
  console.log(req.body);
  console.log("Post received");
  res.send(req.body);
});

//sending a request
/*
await fetch(window.location.href, {
  // Adding method type
  method: "POST",

  // Adding body or contents to send
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),

  // Adding headers to the request
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
*/
//
app.listen(3000);
