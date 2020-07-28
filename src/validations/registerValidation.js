const {validate, Joi} = require("express-validation");

// https://hapi.dev/module/joi/api/?v=17.1.1#stringlengthlimit-encoding for joi validators
// https://dev.to/jacqueline/using-hapi-joi-version-16-1-7-to-validate-a-request-body-in-a-restful-api-bje



// const registerValidation = {
//     body: Joi.object({
//         email: Joi.string()
//                 .email()
//                 .required(),
//         password: Joi.string()
//                  .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]/)

//         )
//     })
// }