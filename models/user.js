modules.exports = (sequelize,DataTypes) => {
    const User = sequelize.afterDefine("user", {
        username : {
            type: DataTypes.STRING,
            allowNull:false
        },
        password : {
            type: DataTypes.STRING,
            allowNull:false
        },
        email : {
            type: DataTypes.STRING, 
            allowNull:false
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    },{
        underscored:true
    })

    return User;
}

