DROP DATABASE IF EXISTS burgers_db;

-- Create the db burgers
CREATE DATABASE burgers_db;

-- Notify workbench to use database
USE burgers_db;

-- Creates a table burgers, within table we'll create an id & name column
CREATE TABLE burgers(
id	INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45),
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);



