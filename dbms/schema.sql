-- DROP DATABASE IF EXISTS Pollster;

-- CREATE DATABASE Pollster;

USE Pollster;

-- DROP TABLE IF EXISTS Setup;

-- CREATE TABLE Setup (
--   id INT,
--   today TIMESTAMP
--     ON UPDATE CURRENT_TIMESTAMP
--     DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO Setup(id) VALUE (1);

-- DROP TABLE IF EXISTS Elections;

-- CREATE TABLE Elections (
--   id INT AUTO_INCREMENT NOT NULL,
--   date DATETIME NOT NULL,
--   PRIMARY KEY(id)
-- );

-- DROP TABLE IF EXISTS UserInfo;
-- DROP TABLE IF EXISTS Users;

-- CREATE TABLE Users (
--   id INT AUTO_INCREMENT NOT NULL,
--   firstName VARCHAR(15) NOT NULL,
--   lastName VARCHAR(15) NOT NULL,
--   email VARCHAR(30) NOT NULL,
--   mobile VARCHAR(15) NOT NULL,
--   password VARCHAR(20) NOT NULL,
--   private_key VARCHAR(70) NOT NULL,
--   public_key VARCHAR(70) NOT NULL,
--   CONSTRAINT Users_unique UNIQUE (email, mobile),
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE UserInfo (
--   id INT AUTO_INCREMENT NOT NULL,
--   user_id INT NOT NULL,
--   address1 VARCHAR(30) NOT NULL,
--   address2 VARCHAR(30),
--   city VARCHAR(30) NOT NULL,
--   state VARCHAR(30) NOT NULL,
--   zipcode VARCHAR(15) NOT NULL,
--   party VARCHAR(15),
--   PRIMARY KEY(id),
--   FOREIGN KEY(user_id) REFERENCES Users(id)
--     ON DELETE CASCADE
--     ON UPDATE RESTRICT
-- );

CREATE TABLE UserBallots (
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  US_Presidential_Election_11_03_2020 VARCHAR(200) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

-- DROP TABLE IF EXISTS Users_1;

-- CREATE TABLE Users_1 (
--   id INT AUTO_INCREMENT NOT NULL,
--   firstName VARCHAR(100) NOT NULL,
--   lastName VARCHAR(100) NOT NULL,
--   email VARCHAR(20) NOT NULL,
--   mobile VARCHAR(15) NOT NULL,
--   PRIMARY KEY(id)
-- );

-- DROP TABLE IF EXISTS Users_2;

-- CREATE TABLE Users_2 (
--   id INT AUTO_INCREMENT NOT NULL,
--   firstName VARCHAR(100) NOT NULL,
--   lastName VARCHAR(100) NOT NULL,
--   email VARCHAR(20) NOT NULL,
--   mobile VARCHAR(15) NOT NULL,
--   PRIMARY KEY(id)
-- );


