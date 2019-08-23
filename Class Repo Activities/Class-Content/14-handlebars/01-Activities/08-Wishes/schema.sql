DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    wish VARCHAR(255) NOT NULL
);

INSERT INTO wishes (wish) VALUES 
    ("Lots of money"),
    ("Immortality"),
    ("Time travel")