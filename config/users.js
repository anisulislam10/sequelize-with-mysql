module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("employe_information",{
        empName:DataTypes.STRING,
        empemail:{
            type:DataTypes.STRING,
            defaultValue:'test@test.com'
        },
        empGender:{
            type:DataTypes.STRING,
        },
        empID:{
            type:DataTypes.STRING
        }

    });
    
       
    
}