module.exports=(sequelize,DataTypes)=>{
    const ActivityCategories=sequelize.define("ActivityCategories",{
            activity:{
    type: DataTypes.STRING,
    allowNull: false,
},
description:{
    type: DataTypes.TEXT,
    allowNull: false,
},

})
 return ActivityCategories
}