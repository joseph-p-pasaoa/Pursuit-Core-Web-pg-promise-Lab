/*
Joseph P. Pasaoa
Posts Route | Pg-promise Lab
*/


/* TODO
    /posts/all      ... db.any()
    /posts/:user_id ... db.one()
    /posts/register ... db.none()
*/


/* HELPERS */
const log = console.log;


/* MODULE INITS */
const express = require('express');
    const router = express.Router();
    router.use(express.json());
    router.use(express.urlencoded({extended: false}));
const db = require('../db.js');


/* ROUTES */ // GO ES5 GO!
router.get('/all', (req, res) => {
    db.any("SELECT * FROM posts")
      .then(data => {
          res.json({
              status: "ff6 SUCCESS music plays",
              payload: data
          });
      })
      .catch(err => {
        res.json({
            status: "ff6 FAIL gameover music plays",
            message: err
        });
      });
});

router.get('/:user_id', (req, res) => {
    db.any("SELECT * FROM posts WHERE poster_id = $1", req.params.user_id)
      .then(data => {
          res.json({
              status: "ff6 SUCCESS music plays",
              payload: data
          });
      })
      .catch(err => {
          res.json({
              status: "ff6 FAIL gameover music plays",
              message: err
          });
      });
});

router.post('/register', (req, res) => {
    res.send('Creating new post!');
});


module.exports = router;
