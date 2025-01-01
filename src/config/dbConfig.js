// code tthat connects us to the db
const serverConfig = require('./serverConfig.js');
const mongoose = require('mongoose');
// the below fxn is used to connect to md server
async function connectDB(){
try{
   await mongoose.connect(serverConfig.DB_URL);
   console.log('Successfully Database connected');
}catch(error){
  console.log('Error connecting');
  console.log(error);

}
}
module.exports =connectDB;