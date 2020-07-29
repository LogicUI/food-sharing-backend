const model = require("../db/config/models/index");
const bycrypt = require("bcrypt");

const duplicateError = {
    "DUPLICATE_KEY":"23505"
}



 const registerUser = async (req,res) => {

    const saltRounds = 10;

    const {username, password, email} = req.body;
    
    const hashPassword = await bycrypt.hash(password,saltRounds);

    try{
        await model.User.create({
            username: username,
            password: hashPassword,
            email: email
        })
    }catch(error){
        if(error.code === duplicateError.DUPLCATE_KEY){
            res.status(400).send("an email with this account already exists");
        }            
    }

    res.send("successfully created an account");

}

module.exports = {
    registerUser
}