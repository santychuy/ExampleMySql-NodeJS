CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE IF NOT EXISTS employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
	salary INT(11) DEFAULT NULL,
	PRIMARY KEY(id)
);

INSERT INTO employees VALUES 
	(1, 'Santy', 3000),
	(2, 'Chuy', 2500),
	(3, 'Sebastian', 2700);

DESCRIBE employees;

SELECT * FROM employees;