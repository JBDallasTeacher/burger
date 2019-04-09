-- Drops the burgersdb if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR 255 NOT NULL,
  devoured BOOLEAN DEFAULT false,

);