const Joi = require("@hapi/joi");


// Checks if input is valid, if not sends error in response. if valid returns
function ifNoInputErrorsReturn(validateInput, response){
    if(validateInput.error){
        return response.status(400).json(validateInput.error.stack);
    }
    return validateInput;
}





// Validates the inputs when users register
function validateRegisterInputs(input, response){

    const schema  = Joi.object({
        email: Joi.string().min(3).email().required(),
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(6).max(30).required()
    });
    
    return ifNoInputErrorsReturn(schema.validate(input), response)
};




// Valids login inputs
function validateLoginInputs(input, response){

    const schema  = Joi.object({
        email: Joi.string().min(3).email().required(),
        password: Joi.string().min(6).max(30).required()
    });

    return ifNoInputErrorsReturn(schema.validate(input), response)
};


module.exports = {
    validateRegisterInputs,
    validateLoginInputs
};