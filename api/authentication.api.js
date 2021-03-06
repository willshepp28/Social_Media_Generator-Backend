const router = require("express").Router();
const models = require("../db/models");
const _ = require("lodash");
const {validateRegisterInputs, validateLoginInputs} = require("../helpers/validators/authentication-input.validator");
const { comparePasswordtoHash } = require("../helpers/encryption/encrypt.encryption");
const jwt = require("jsonwebtoken");
const fs = require("fs");

/**
 * REQUIRMENTS
 * 1. User should be able to login
 * 2. Users should be able to register
 */



router.post("/register", async(request, response) => {
  const inputs = validateRegisterInputs(request.body, response);
   
   models.User.create(inputs.value)
    .then((user) => {
       return response.status(200).json({message: "User succesfully created"});
   }).catch((error) =>{ 
       return response.json(error);
   })
});





router.post("/login", (request, response) => {
    const inputs = validateLoginInputs(request.body, response);

   models.User.findOne({
       where: { email: inputs.value.email}
   })
   .then(async (user) => {

    // if user not found send back 404
    if (!user) {
        return response.status(404).json({ message: "User not Found." });
    };

    const passwordValid = await comparePasswordtoHash(inputs.value.password, user.dataValues.password)

    // check if password matches hash, if not send back 400
    if(!passwordValid){
        return response.status(400).json({message: "Password is invalid."})
    }

    const token = jwt.sign({id: user.dataValues.id}, fs.readFileSync("./eprivate.key", "utf-8"), {expiresIn: 86400})
    return response.status(200).json({
        id: user.dataValues.id,
        username: user.dataValues.username,
        token: token
    });
    
   })
});






module.exports = router;