const path = require('path')
const express = require("express")
require('dotenv').config()
const mysql = require ('mysql');
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3001

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'nemshop',
    user: 'root',
    password: 'password',
  });
  
  connection.connect()
// Page Home

// app.get('/home', (req, res) => {
//     connection.query(`SELECT * FROM hocsinh`, (err, data) => {
//       if (err) throw err;
//       res.json(data)
     
     
//     });
//   }),
app.get("/", (req, res) => {
    connection.query(`SELECT * FROM hocsinh`, (err, data) => {
        if (err) throw err;
        res.json(data)
       
       
      });
})

// ZingMp3Router
const ZingMp3Router = require("./src/routes/ZingRouter")
app.use("/api", cors({ origin: '*' }), ZingMp3Router)

// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
