import db from "../db.js";

export async function createPostModel({ title, body, user_id }) {
    let data;

    try {
        data = await db.query(
            "INSERT INTO posts (title, body, user_id) values ($1, $2, $3) RETURNING *",
            [title, body, user_id]
        );
    } catch (error) {
        throw new Error(`Произошла ошибка при создании поста ${error}`);
    }

    return data;
}

export async function getPostsModel() {
    let data;

    try {
        data = await db.query("SELECT * FROM posts");
    } catch (error) {
        throw new Error(
            `Произошла ошибка при получении постов: ${error.message}`
        );
    }

    return data;
}

export async function getOnePostModel(id) {
    let data;

    try {
        data = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    } catch (error) {
        throw new Error(
            `Произошла ошибка при получении поста: ${error.message}`
        );
    }

    return data;
}

export async function updatePostModel({ id, title, body }) {
    let data;

    try {
        data = await db.query(
            "UPDATE posts SET title = $2, body = $3 WHERE id = $1 RETURNING *",
            [id, title, body]
        );
    } catch (error) {
        throw new Error(
            `Произошла ошибка при обновлении поста: ${error.message}`
        );
    }

    return data;
}

export async function deletePostModel(id) {
    let data;

    try {
        data = await db.query("DELETE FROM posts WHERE id = $1 RETURNING *", [
            id,
        ]);
    } catch (error) {
        throw new Error(
            `Произошла ошибка при удаление поста: ${error.message}`
        );
    }

    return data;
}
