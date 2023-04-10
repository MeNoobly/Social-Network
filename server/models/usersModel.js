import db from "../db.js";

export async function createUserModel({ name, surname, username }) {
    let data;

    try {
        data = await db.query(
            "INSERT INTO users (name, surname, username) values ($1, $2, $3) RETURNING *",
            [name, surname, username]
        );
    } catch (error) {
        throw new Error(`Произошла ошибка при создание пользователя ${error}`);
    } finally {
        return data;
    }
}

export async function getUsersModel() {
    let data;

    try {
        data = await db.query("SELECT * FROM userss");
    } catch (error) {
        throw new Error(
            `Произошла ошибка при получение пользователей: ${error.message}`
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
            `Произошла ошибка при получение пользователя: ${error.message}`
        );
    } finally {
        return data;
    }
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
            `Произошла ошибка при обновление пользователя: ${error.message}`
        );
    } finally {
        return data;
    }
}

export async function deleteUserModel(id) {
    let data;

    try {
        data = await db.query("DELETE FROM users WHERE id = $1 RETURNING *", [
            id,
        ]);
    } catch (error) {
        throw new Error(
            `Произошла ошибка при удаление пользователя: ${error.message}`
        );
    } finally {
        return data;
    }
}
