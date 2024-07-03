-- Active: 1719899812584@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    fullname TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT "NORMAL",
    email TEXT NOT NULL UNIQUE,
    avatar TEXT NOT NULL DEFAULT "https://i.postimg.cc/tCNk9cCC/kindpng-7060042.png",
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);


SELECT * FROM users;