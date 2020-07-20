require("custom-env").env("production");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect:"mysql",

    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

sequelize
    .authenticate()
    .then(function(err){
        console.log("Connection has been established successfully");
    })
    .catch((err)=>{
        console.log("Unabel to connect to the database",err);
    })


