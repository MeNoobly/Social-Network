import db from "../db.js";

export async function createUserModel({ name, surname, username }) {
    let data;
    const date = new Date();

    try {
        data = await db.query(
            "INSERT INTO users (date, name, surname, username) values ($1, $2, $3, $4) RETURNING *",
            [date, name, surname, username]
        );
    } catch (error) {
        throw new Error(`Произошла ошибка при создании пользователя ${error}`);
    }

    return data;
}

export async function getUsersModel() {
    let data;

    try {
        data = await db.query("SELECT * FROM users");
    } catch (error) {
        throw new Error(
            `Произошла ошибка при получении пользователей: ${error.message}`
        );
    }

    return data;
}

export async function getOneUserModel(id) {
    let data;

    try {
        data = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    } catch (error) {
        throw new Error(
            `Произошла ошибка при получении пользователя: ${error.message}`
        );
    }

    return data;
}

export async function updateUserModel({ id, name, surname, username }) {
    let data;

    try {
        data = await db.query(
            "UPDATE users SET name = $2, surname = $3, username = $4 WHERE id = $1 RETURNING *",
            [id, name, surname, username]
        );
    } catch (error) {
        throw new Error(
            `Произошла ошибка при обновлении пользователя: ${error.message}`
        );
    }

    return data;
}

export async function deleteUserModel(id) {
    let userData, postData;

    try {
        userData = await db.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [id]
        );

        postData = await db.query(
            "DELETE FROM posts WHERE user_id = $1 RETURNING *",
            [id]
        );
    } catch (error) {
        throw new Error(
            `Произошла ошибка при удалении пользователя: ${error.message}`
        );
    }

    return userData;
}
