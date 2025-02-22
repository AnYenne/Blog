const Posts = require('../models/posts.js');
class PostController {

    //fetch all posts
    async getAllPosts(req, res, next){
        try{
            const allPost = await Posts.find()
            res.status(200).json(allPost)
            console.log("received posts",allPost)
        }
        catch(error){
            console.error("can't find")
            res.status(500).json("server error")
        }
    }

    }

module.exports = new PostController