const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const userStrategy = require('../strategies/user.strategy');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');


router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.secret);
    pool.query('SELECT * FROM "secret";')
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
});

module.exports = router;