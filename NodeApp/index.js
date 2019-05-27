//const http = require('http');
const express = require("express");
const app = express();
//var mysql = require("mysql");
var cors = require("cors");
app.use(express.json());
app.listen(3000, () => console.log("listening on port 3000..."));

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "demo_db"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected");
// });

//app.options('/users/:id', cors()) ;
///////////// Swagger integration ////

var swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', router);

var swaggerJSDoc = require("swagger-jsdoc");

//////////////////////////////////////

// Add headers
app.use(function(req, res, next) {
  //Website you wish to allow to connect
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  //Pass to next layer of middleware
  next();
});

// ///////////////////////API FOR USER

//Api for Get all users
app.get("/api/v1/members", (req, res) => {
 
    let results = [
      {
          "id": "1105037",
          "email": "vishnu.tiwary@oracle.com",
          "fullName": "Vishnu Tiwary",
          "userName": "Vish"
      },
      {
        "id": "1105038",
        "email": "moulika.devi@oracle.com",
        "fullName": "Moulika Devi",
        "userName": "Moulika"
    }
  ]
    console.log(results);
    res.json(results);
  
});

