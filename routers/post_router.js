const post = require("../models/post")
const auth = require("../middleware/auth.js")
const upload = require("../controllers/uploadfile_controller.js")
const express = require('express')
const post_router = express.Router()

//function for adding post
post_router.post('/createpost',[upload], (req, res) => {
    req.files.map(function (items) {
        const Post = new post({
            status: req.body.status,
            name: req.body.name,
            image: items.filename
        }
        )
        Post.save().then(function () {
            res.send("post has been added")
        }).catch(function (e) {
            res.send(e)
        })
    })
})


//function for getting post
post_router.get('/findPost', async (req, res) => {
    post.find().then(function (findAllpost) {
        res.send(findAllpost).catch(function (e) {
            res.send(e)
        })
    })
})

//function for getting post by id
post_router.get('findPostById/:_id', (req, res) => {
    post.findById(req.params._id)
        .then(function (postById) {
            res.send(postById).catch(function (e) {
                res.send(e)
            })
        })
})

module.exports = post_router;