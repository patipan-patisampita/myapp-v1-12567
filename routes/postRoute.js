const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


//1.Get All Users:http://localhost:3000/api/posts/
router.get('/', postController.getAllPosts)

module.exports = router