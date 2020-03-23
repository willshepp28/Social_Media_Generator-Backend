const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const authenticationAPI = require("./api/authentication.api");
const userAPI = require("./api/user.api");
const followerAPI = require("./api/follower.api");
const postAPI = require("./api/post.api");
const commentAPI = require("./api/comment.api");
const likeAPI = require("./api/like.api");
const shareAPI = require("./api/share.api");
const saveAPI = require("./api/save.api");


const PORT = process.env.PORT || 5000;


application = express();





/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/
application.use(cors());
application.use(helmet());
application.use(morgan("combined"));

application.use(bodyParser.urlencoded());
application.use(bodyParser.json());


application.get("/", (request, response) => {
    return response.json("You are in the Social Media Generator API");
});




/*
|--------------------------------------------------------------------------
|  API
|--------------------------------------------------------------------------
*/
application.use("/api/authentication", authenticationAPI);
application.use("/api/user", userAPI);
application.use("/api/follower", followerAPI);
application.use("/api/post", postAPI);
application.use("/api/comment", commentAPI);
application.use("/api/like", likeAPI);
application.use("/api/share", shareAPI);
application.use("/api/save", saveAPI);




/*
|--------------------------------------------------------------------------
|  START SERVER
|--------------------------------------------------------------------------
*/
application.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});