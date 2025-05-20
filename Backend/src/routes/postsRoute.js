const express = require("express");
const router = express.Router();

const PostController = require("../controllers/postController");
const middlewareController = require("../controllers/middlewareController");


router.get("/", PostController.getAllPosts)
router.get('/:id', PostController.getPostById)
router.post('/',middlewareController.verifyToken, PostController.createNewPost)
router.put('/:id',middlewareController.verifyToken, PostController.editPost)

module.exports = router