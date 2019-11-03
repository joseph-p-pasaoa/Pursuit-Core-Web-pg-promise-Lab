/*
Joseph P. Pasaoa
Pg-promise Lab
*/


/* HELPERS */
const log = console.log;


/* MODULE INITS */
const express = require('express');
    const app = express();
    const port = 9000;
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
const cors = require('cors')
    app.use(cors());


/* SERVER INIT */
app.listen(port, () => {
  log(`JoeyServer is now up, running, and other things-ing on ${port}. Zug zug.`);
});


/* ROUTING */
// Imports
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
// Connects
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


/* NO-ROUTE CATCH */
app.use("*", (req, res) => {
  res.status(404).send('error: no such route found on this JoeyServer. try again.');
});
