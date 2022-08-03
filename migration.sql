DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    userid serial PRIMARY KEY,
    name text
);
CREATE TABLE accounts (
    accountid serial PRIMARY KEY,
    checking int, 
    savings int, 
    userid int, 
    FOREIGN KEY (userid) REFERENCES users(userid)
);


INSERT INTO users (name) VALUES 
('Alex'),
('John'),
('Paul'),
('Luke'), ('Tony'), ('Nancy'), ('Martha'), ('Logan'), ('Karen'), ('Isaiah'), ('Abby'), ('Maverick'), ('Tommy'), ('Jacob'), ('Anna');


INSERT INTO accounts (checking, savings, userid) VALUES 
(100, 10000, 1),
(10, 1000, 2),
(200, 2000, 3), 
(500, 5000, 4),
(800, 10000, 5), 
(200, 2000, 6),
(770, 7000, 7), 
(20, 3000, 8), 
(60, 4300, 9), 
(90, 6400, 10), 
(400, 1200, 11), 
(550, 4500, 12),
(230, 7900, 13), 
(780, 1200, 14), 
(920, 100, 15); 




