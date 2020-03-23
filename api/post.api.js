const router = require("express").Router();




router.get("/", (request, response) => {
    return response.status(200).json("Welcome to the post api");
});





module.exports = router;