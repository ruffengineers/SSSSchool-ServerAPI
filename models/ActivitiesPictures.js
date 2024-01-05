module.exports=(sequelize,DataTypes)=>{
    const ActivitiesPictures=sequelize.define("ActivitiesPictures",{
            activityid:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
picture:{
    type: DataTypes.STRING,
    allowNull: false,
},

})
 return ActivitiesPictures
}