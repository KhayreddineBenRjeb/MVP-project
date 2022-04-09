DROP DATABASE IF EXISTS tripini;

CREATE DATABASE tripini;

USE tripini;

CREATE TABLE users (
  id_user int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (id_user)
);

CREATE TABLE post (
  id int NOT NULL AUTO_INCREMENT, 
 id_user int,
  plan varchar(255) ,
  country varchar(255),
  country_des varchar(255) ,
  description varchar(255) ,
  contact varchar(255) ,
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id_user)
  
);
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/