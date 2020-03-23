const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const authenticationAPI = require("./api/authentication.api");
const PORT = process.env.PORT || 5000;


application = express();

application.use(cors());
application.use(helmet());
application.use(morgan("combined"));

application.use(bodyParser.urlencoded());
application.use(bodyParser.json());


application.get("/", (request, response) => {
    return response.json("You are in the Social Media Generator API");
});


application.use("/api/authentication", authenticationAPI);




application.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});