CREATE TABLE
    users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL
    );

CREATE TABLE
    posts(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        body VARCHAR(255) NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

INSERT INTO
    users (name, surname, username)
VALUES ('Nick', 'Chupin', 'rixy'), ('Mike', 'Dean', 'music'), ('Kendrick', 'Lamar', 'rap');

INSERT INTO
    posts (title, body, user_id)
VALUES ('some', 'some', 1), ('some', 'some', 1), ('some', 'some', 2);