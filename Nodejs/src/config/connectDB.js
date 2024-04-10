const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect:'mysql'
});

// let connectDB = async ()=>{
//   try{
//     await sequelize.authenticate()
//     console.log('Connect has been established successfully');
//   }catch(error){
//     console.error('Unable to connect to the database',error)
//   }
// }

// module.exports=connectDB