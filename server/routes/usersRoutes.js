import express from "express";
import usersController from "../controllers/UsersController.js";

const router = express();

router.post("/users", usersController.createUser);
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getOneUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

export default router;
