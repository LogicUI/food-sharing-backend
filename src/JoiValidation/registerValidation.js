

const Joi = require('joi-plus');


const registerSchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().
	required().
	password({
		min: 8,
		lowercase: true,
		uppercase: true,
	}),
    email: Joi.string().required().email()
});


module.exports = registerSchema;