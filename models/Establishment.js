module.exports=(sequelize,DataTypes)=>{
const Establishment=sequelize.define("Establishment",{
    personName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    picture:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    message:{
        type: DataTypes.TEXT,
        allowNull:false,
    }
})
return Establishment
}

