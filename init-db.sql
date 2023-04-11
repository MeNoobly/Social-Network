CREATE TABLE
    users(
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL
    );

CREATE TABLE
    posts(
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        title VARCHAR(255) NOT NULL,
        body VARCHAR(255) NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

INSERT INTO
    users (date, name, surname, username)
VALUES (NOW(), 'Nick', 'Chupin', 'rixy'), (NOW(), 'Mike', 'Dean', 'music'), (
        NOW(),
        'Kendrick',
        'Lamar',
        'rap'
    );

INSERT INTO
    posts (date, title, body, user_id)
VALUES (NOW(), 'some', 'some', 1), (NOW(), 'some', 'some', 1), (NOW(), 'some', 'some', 2);