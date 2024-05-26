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
app.listen(8081,()=> {
    console.log("listening");
})

