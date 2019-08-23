DROP DATABASE IF EXISTS moviePlannerDB;
CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie VARCHAR(255) NOT NULL
);

INSERT INTO movies (movie)
    VALUES 
    ("Hardcore Henry"),
    ("The Big Lebowski"),
    ("Spaceballs"),
    ("Full Metal Jacket");