const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const { Database } = require('sqlite3');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:'',
    database:'plants'
})

app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/plantdetails',(req,res)=>{
    const sql = "SELECT * from plantdetails";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/plantdetails/:id', (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM plantdetails WHERE id = ?";
    db.query(sql, [id], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.status(404).json({ message: "Plant not found" });
      return res.json(data[0]);
    });
  });
  
app.listen(8081,()=> {
    console.log("listening");
})

