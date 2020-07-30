const registerSchema = require("../JoiValidation/registerValidation");


const registerValidator = (req,res,next) => {
    const {error} = registerSchema.validate(req.body);
    if(error) return res.status(400).json({error: error.details[0].message})
    next()
}

module.exports = registerValidator;