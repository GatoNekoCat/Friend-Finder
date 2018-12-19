### Schema

CREATE DATABASE friendfinder_db;
USE friendfinder_db;

CREATE TABLE friends
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	score INT(255) NOT NULL,
	PRIMARY KEY (id)
);
