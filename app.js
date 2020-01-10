const express = require('express')
require('./database/settings')
const bodyParser = require('body-parser');
const user_router = require('./routers/user_router')
const post_router = require('./routers/post_router')
const path = require("path");

const app = express()
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false }));
app.use(user_router)
app.use(post_router)

app.listen(3000)