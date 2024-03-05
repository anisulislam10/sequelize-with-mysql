const {Sequelize,DataTypes}=require('sequelize');
const sequelize = new Sequelize('employe_information', 'root', '12345',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {max:5,min:0,idlle:10000}

}
);

sequelize.authenticate().then(()=>{
console.log("Database Connected")
}).catch(err=>{
    console.log("connection error")
});

const db={};
db.Sequelize=sequelize;
db.sequelize=sequelize;
db.users=require('./users')(sequelize,DataTypes);
db.sequelize.sync().then(()=>{
    console.log('Synced..');
})
