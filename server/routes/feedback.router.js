const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error)
        res.sendStatus(500);
    });
})


router.post('/', (req, res) => {
    const {feeling, understanding, support, comments} = req.body
    pool.query('INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4) RETURNING *', [feeling, understanding, support, comments]).then((result) => {
     res.send(result.rows);
    }).catch((error) => {
        console.log('Error POST /api/feedback', error)
        res.sendStatus(500);
    });
})
module.exports = router;