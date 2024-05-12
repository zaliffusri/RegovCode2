const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ success: true, data: data });
    });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }
        if (results.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});


app.listen(8081, () => {
    console.log("listening");
})