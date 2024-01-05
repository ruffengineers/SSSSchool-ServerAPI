module.exports=(sequelize,DataTypes)=>{
    const InfrastCategories=sequelize.define("InfrastCategories",{
        category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        caption:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
    
    })
    return InfrastCategories
    }
    
    