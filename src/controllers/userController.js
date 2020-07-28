const model = require("../db/config/models/index");

 const registerUser = async (req,res) => {

    const {username, password, email} = req.body;

    const result = await model.User.create({
        username: username,
        password: password,
        email: email
    })

    res.status(200).send("success");

}

module.exports = {
    registerUser
}