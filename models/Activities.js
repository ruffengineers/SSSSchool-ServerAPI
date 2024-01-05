module.exports=(sequelize,DataTypes)=>{
    const Activities=sequelize.define("Activities",{
            actcategoryid:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
activity:{
    type: DataTypes.STRING,
    allowNull: false,
},
description:{
    type: DataTypes.TEXT,
    allowNull: false,
},

})
 return Activities
}