CREATE DATABASE burgers_db; 
USE  burgers_db; 

CREATE table burgers (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL, 
devoured boolean  NOT NULL, 
current_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
); 