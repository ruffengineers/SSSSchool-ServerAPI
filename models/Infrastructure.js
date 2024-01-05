module.exports=(sequelize,DataTypes)=>{
    const Infrastructure=sequelize.define("Infrastructure",{
            insfrastcategoryid:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
picture:{
    type: DataTypes.STRING,
    allowNull: false,
},

})
 return Infrastructure
}