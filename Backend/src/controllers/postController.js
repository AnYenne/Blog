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

    async getPostById(req, res, next){
        try {
            const post = await Posts.find({_id: req.params.id})
            res.status(200).json(post)
            console.log("received posts", post)
            
        } catch (error) {
            console.error("can't find the data")
            res.status(500).json("server error")
        }
    }

    async createNewPost(req, res, next){
        try {
            const data = await Posts.create(req.body)
            res.status(200).json(data)
            console.log("submited successfully", data)
            
        } catch (error) {
            console.error("can't submit the data")
            res.status(500).json("server error")
        }
    }

    async editPost (req, res, next){
        try {
           const data = await Posts.findOneAndUpdate({_id: req.params.id},req.body, {
            new: true
           })
           res.status(200).json(data)
           console.log("updated successfully", data)

        } catch (error) {
            console.error("can't update the data")
            res.status(500).json("server error")
        }
    }

    }

module.exports = new PostController