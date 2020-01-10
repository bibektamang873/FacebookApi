const User = require('../models/user')
const express = require('express')
const user_router = express.Router()
const auth = require('../middleware/auth')

// for user insert
user_router.post('/register', (req, res) => {
    var mydata = new User(req.body);
    mydata.save();
    res.status(400).send("User registered")
})

///for login
user_router.post("/login", async function (req, res) {

    try {
        const user = await User.checkCrediantialsDb(req.body.email,
            req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send("Couldn't log in")
    }
})

module.exports = user_router;

