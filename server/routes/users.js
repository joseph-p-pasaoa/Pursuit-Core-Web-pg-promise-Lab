/*
Joseph P. Pasaoa
Users Route | Pg-promise Lab
*/


/* HELPERS */
const log = console.log;


/* MODULE INITS */
const express = require('express');
    const router = express.Router();
const db = require('../db.js');



/* ROUTES */
router.get('/all', (req, res) => {
    db.any('SELECT * FROM users')
      .then(function(data) {
          const response = {
            users: data
          };
          res.send(response);
      })
      .catch (function(error) {        
          res.send('An error occurred: ' + error);
      });
});

router.post('/register', (req, res) => {
    const user = req.body;
    db.none('INSERT INTO users(firstname, lastname, age) VALUES($1, $2, $3)', [user.firstname, user.lastname, user.age])
      .then(() => {
          let response = {
            addedUser: req
          };
          res.send(response);
      })
      .catch (error => {
          res.send("An error occurred: " + error)
      });
});


module.exports = router;
