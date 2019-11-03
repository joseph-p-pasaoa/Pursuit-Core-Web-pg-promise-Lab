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


/* MIDDLEWARE */
const getUsers = (req, res, next) => {
  let insertQuery = `SELECT * FROM posts`;
  if (req.params.user_id) {
    insertQuery += ` WHERE poster_id = $1`;
  }
  db.any(insertQuery, req.params.user_id)
    .then(data => {
        if (data.length === 0) {
          res.status(404).json({
              status: "ff6 FAIL gameover music plays",
              message: "no results found"
          });
        } else {
          res.json({
              status: "ff6 SUCCESS music plays",
              payload: data
          });
        }
    })
    .catch(err => {
      res.json({
          status: "ff6 FAIL gameover music plays",
          message: err
      });
  });
}

const addUser = (req, res, next) => {
  const insertQuery = `
    INSERT INTO users (firstName, lastName, age) VALUES
      ($1, $2, $3);
    `;
  db.none(insertQuery, [req.body.firstName, req.body.lastName, req.body.age]);
  res.json({
      status: "ff6 SUCCESS music plays",
      message: "user created",
      submitted: req.body
  });
}


/* ROUTES */ // GO ES5 GO!
router.get('/all', getUsers);
router.get('/:user_id', getUsers);
router.post('/register', addUser); // SHOULD NOT PREVENT MULTIPLE IDENTICAL NAMES


module.exports = router;
