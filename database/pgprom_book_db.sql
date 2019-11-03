/*
Joseph P. Pasaoa
Pg-promise Lab
*/


\c template1


/* CREATE DATABASE */
DROP DATABASE IF EXISTS pgprom_book_db;
CREATE DATABASE pgprom_book_db;
\c pgprom_book_db;

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   firstname VARCHAR(36),
   lastname VARCHAR(36),
   age INT
);

CREATE TABLE posts (
   post_id SERIAL PRIMARY KEY,
   poster_id INT REFERENCES users (user_id) ON DELETE CASCADE,
   body TEXT
);


/* SEED INFO */
INSERT INTO users (firstname, lastname, age) VALUES
   ('Adam', 'Addams', 40),
   ('Beth', 'Brown', 51),
   ('Cal', 'Cassady', 14),
   ('Don', 'Donner', 33),
   ('Eve', 'Edwards', 83);

INSERT INTO posts (poster_id, body) VALUES
   (1, 'I am Adam! Hello!'),
   (1, 'I like pancakes'),
   (2, 'I am Beth! Welcome to my blog.'),
   (2, 'My zodiac sign is Gemini'),
   (3, 'I am Cal! This is my first post :)'),
   (4, 'I am Don! Hello world!'),
   (4, 'I enjoy long walks on the beach'),
   (5, 'I am Eve! Welcome!'),
   (5, 'I like turtles'),
   (5, 'My favorite number is 8');


/* QUERIES */
SELECT * FROM users;
SELECT * FROM posts;
