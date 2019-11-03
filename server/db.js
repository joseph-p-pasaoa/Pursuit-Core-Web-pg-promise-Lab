/*
Joseph P. Pasaoa
Database Connection Module | Pg-Promise Lab
*/


const pgp = require('pg-promise')();
    const dbConnection = {
      host: 'localhost',
      port: 5432,
      database: 'pgprom_book_db'
    };
    const db = pgp(dbConnection);


module.exports = db;
