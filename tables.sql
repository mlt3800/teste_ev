-- Active: 1679477059756@@35.226.146.116@3306@jbl-4416472-mauricio-toledo
CREATE TABLE IF NOT EXISTS Competition_Creator (
  
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255)  NOT NULL UNIQUE
  
  
  

);
CREATE TABLE IF NOT EXISTS Atletas (
id VARCHAR(255)NOT NULL PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
atletas VARCHAR(255) NOT NULL UNIQUE,
value VARCHAR(255) NOT NULL,
unidade CHAR(2) NOT NULL,
FOREIGN KEY(name) REFERENCES Competition_Creator(name)



);


DROP TABLE Competition_Creator, Atletas