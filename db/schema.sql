DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burger (
	id INTEGER AUTO_INCREMENT,
	burger_name VARCHAR(255),
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
	)