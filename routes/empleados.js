const express = require('express');
const router = express.Router();

const conMySql = require('../database');

router.get('/', (req, res) => {
    conMySql.query('SELECT * FROM employees', (error, rows, fields) => {
        if (!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

router.get('/:id', (req, res) => {
    conMySql.query('SELECT * FROM employees WHERE id = ?', [id], (error, rows, fields) => {
        if (!error){
            res.json(rows[0]);
        }else{
            console.log(error);
        }
    });
});



module.exports = router;