import express from "express";
import postsController from "../controllers/PostsController.js";

const router = express();

router.post("/posts", postsController.createPost);
router.get("/posts", postsController.getPosts);
router.get("/posts/:id", postsController.getOnePost);
router.put("/posts/:id", postsController.updatePost);
router.delete("/posts/:id", postsController.deletePost);

export default router;
