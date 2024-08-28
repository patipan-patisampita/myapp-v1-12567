const Post = require('../models/postModel')

//1.Get All Posts :http://localhost:3000/api/posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findPostAll()
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Error Get All posts' })
    }
}

module.exports = { getAllPosts }