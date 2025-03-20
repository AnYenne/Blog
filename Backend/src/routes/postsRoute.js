const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

router.get("/", PostController.getAllPosts)
router.get('/:id', PostController.getPostById)
router.post('/',PostController.createNewPost)

module.exports = router