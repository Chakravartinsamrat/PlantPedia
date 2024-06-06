const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve files from the uploads directory

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'plants'
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Appends extension
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.get('/plantdetails', (req, res) => {
    const sql = "SELECT * from plantdetails";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get('/plantdetails/:id', (req, res) => {
    const { id } = req.params;
    const sqlPlant = "SELECT * FROM plantdetails WHERE id = ?";
    const sqlRetail = "SELECT * FROM retaildetails WHERE rid = ?"; 

    db.query(sqlPlant, [id], (err, plantData) => {
        if (err) return res.json(err);
        if (plantData.length === 0) return res.status(404).json({ message: "Plant not found" });

        db.query(sqlRetail, [id], (err, retailData) => {
            if (err) return res.json(err);
            return res.json({ plant: plantData[0], retail: retailData });
        });
    });
});


app.post('/addplant', upload.single('image'), (req, res) => {
    const {
        name, scientific_name, adopted_tech, avg_yield, edible_part, family, nutrition,
        pests, planting_material, pollination, source, variety, vernacular_name,
        flowering, fruiting, duration
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const sql = "INSERT INTO plantdetails (name, scientific_name, adopted_tech, avg_yield, edible_part, family, nutrition, pests, planting_material, pollination, source, variety, vernacular_name, flowering, fruiting, duration, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        name, scientific_name, adopted_tech, avg_yield, edible_part, family, nutrition,
        pests, planting_material, pollination, source, variety, vernacular_name,
        flowering, fruiting, duration, image
    ];

    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Plant has been added successfully");
    });
});
// New endpoint to handle contact form submissions
app.post('/contact', (req, res) => {
    const { cname, email, message } = req.body;

    const sql = "INSERT INTO contactdetails (cname, email, message) VALUES (?, ?, ?)";
    const values = [cname, email, message];

    db.query(sql, values, (err, data) => {
        if (err) return res.status(500).json({ success: false, error: err });
        return res.json({ success: true, message: "Contact details have been saved successfully" });
    });
});

app.listen(8081, () => {
    console.log("listening on port 8081");
});
