import {
    createUserModel,
    getUsersModel,
    getOneUserModel,
    updateUserModel,
    deleteUserModel,
} from "../models/usersModel.js";

class usersController {
    async createUser(request, response) {
        const { name, surname, username } = request.body;

        let action;

        try {
            action = await createUserModel({ name, surname, username });
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async getUsers(request, response) {
        let action;

        try {
            action = await getUsersModel();
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows);
        }
    }

    async getOneUser(request, response) {
        const id = request.params.id;
        let action;

        try {
            action = await getOneUserModel(id);
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async updateUser(request, response) {
        const id = request.params.id;
        const { name, surname, username } = request.body;
        let action;

        try {
            action = await updateUserModel({ id, name, surname, username });
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }

    async deleteUser(request, response) {
        const id = request.params.id;
        let action;

        try {
            action = await deleteUserModel(id);
        } catch (error) {
            return response.status(403).json(error.message);
        }

        if (action !== undefined) {
            return response.json(action.rows[0]);
        }
    }
}

export default new usersController();
