const Posts = require('../models/posts.js');


class PostController {

    //fetch all posts
    async getAllPosts(req, res, next){
        try{
            const allPost = await Posts.find()
            res.status(200).json(allPost)
        }
        catch(error){
            res.status(500).json("server error")
        }
    }

    async getPostById(req, res, next){
        try {
            const post = await Posts.find({_id: req.params.id})
            res.status(200).json(post)
            
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    async createNewPost(req, res, next){
        try {
            const data = await Posts.create(req.body)
            res.status(200).json(data)
            
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    async editPost (req, res, next){
        try {
           const data = await Posts.findOneAndUpdate({_id: req.params.id},req.body, {
            new: true
           })
           res.status(200).json(data)

        } catch (error) {
            res.status(500).json("server error")
        }
    }

    }

module.exports = new PostController