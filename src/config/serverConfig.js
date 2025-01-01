const dotenv=require('dotenv');
dotenv.config();

// here we are exporting env variables 
module.exports = {
PORT:process.env.PORT,
DB_URL:process.env.DB_URL
}