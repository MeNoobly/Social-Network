import {
    createPostModel,
    getPostsModel,
    getOnePostModel,
    updatePostModel,
    deletePostModel,
} from "../models/PostsModel.js";

class postsController {
    async createPost(request, response) {
        const { title, body, user_id } = request.body;

        let action;

        try {
            action = await createPostModel({ title, body, user_id });
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async getPosts(request, response) {
        let action;

        try {
            action = await getPostsModel();
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows);
        }
    }

    async getOnePost(request, response) {
        const id = request.params.id;
        let action;

        try {
            action = await getOnePostModel(id);
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async updatePost(request, response) {
        const id = request.params.id;
        const { title, body } = request.body;
        let action;

        try {
            action = await updatePostModel({ id, title, body });
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async deletePost(request, response) {
        const id = request.params.id;
        let action;

        try {
            action = await deletePostModel(id);
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }
}

export default new postsController();
