DROP TABLE IF EXISTS bank;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    userid serial PRIMARY KEY,
    name text
);
CREATE TABLE accounts (
    accountid serial PRIMARY KEY,
    checking int, 
    savings int
);
CREATE TABLE bank (
    id serial,
    accountid int,
    userid int, 
    FOREIGN KEY (accountid) REFERENCES accounts(accountid),
    FOREIGN KEY (userid) REFERENCES users(userid)
);


INSERT INTO users (name) VALUES ('Alex');
INSERT INTO users (name) VALUES ('John');
INSERT INTO users (name) VALUES ('Paul');
INSERT INTO users (name) VALUES ('Luke');
INSERT INTO users (name) VALUES ('Tony');
INSERT INTO users (name) VALUES ('Nancy');
INSERT INTO users (name) VALUES ('Martha');
INSERT INTO users (name) VALUES ('Logan');
INSERT INTO users (name) VALUES ('Karen');
INSERT INTO users (name) VALUES ('Isaiah');
INSERT INTO users (name) VALUES ('Abby');
INSERT INTO users (name) VALUES ('Maverick');
INSERT INTO users (name) VALUES ('Tommy');
INSERT INTO users (name) VALUES ('Jacob');
INSERT INTO users (name) VALUES ('Anna');


INSERT INTO accounts (checking, savings) VALUES (100, 10000);
INSERT INTO accounts (checking, savings) VALUES (10, 1000);
INSERT INTO accounts (checking, savings) VALUES (200, 2000); 
INSERT INTO accounts (checking, savings) VALUES (500, 5000);
INSERT INTO accounts (checking, savings) VALUES (800, 10000); 
INSERT INTO accounts (checking, savings) VALUES (200, 2000); 
INSERT INTO accounts (checking, savings) VALUES (770, 7000); 
INSERT INTO accounts (checking, savings) VALUES (20, 3000); 
INSERT INTO accounts (checking, savings) VALUES (60, 4300); 
INSERT INTO accounts (checking, savings) VALUES (90, 6400); 
INSERT INTO accounts (checking, savings) VALUES (400, 1200); 
INSERT INTO accounts (checking, savings) VALUES (550, 4500);
INSERT INTO accounts (checking, savings) VALUES (230, 7900); 
INSERT INTO accounts (checking, savings) VALUES (780, 1200); 
INSERT INTO accounts (checking, savings) VALUES (920, 100); 

INSERT INTO bank (accountid, userid) VALUES (1,4);--
INSERT INTO bank (accountid, userid) VALUES (2,9);--
INSERT INTO bank (accountid, userid) VALUES (3,14);--
INSERT INTO bank (accountid, userid) VALUES (4,15);--
INSERT INTO bank (accountid, userid) VALUES (5,11);--
INSERT INTO bank (accountid, userid) VALUES (6,3);--
INSERT INTO bank (accountid, userid) VALUES (7,13);--
INSERT INTO bank (accountid, userid) VALUES (8,2);--
INSERT INTO bank (accountid, userid) VALUES (9,12);--
INSERT INTO bank (accountid, userid) VALUES (10,6);--
INSERT INTO bank (accountid, userid) VALUES (11,7);--
INSERT INTO bank (accountid, userid) VALUES (12,1);--
INSERT INTO bank (accountid, userid) VALUES (13,5);--
INSERT INTO bank (accountid, userid) VALUES (14,8);--
INSERT INTO bank (accountid, userid) VALUES (15,10);--



