const { registerUser } = require("../services/userService");

async function createUser(req, res, next) {
    // Implement logic to create a new user in your database
try{
    const response = await registerUser(req.body);
    return res.json({
        message:"successfully registred a new user",
        success:true,
        data: response,
        error:{}
        
    })
}catch(error){
    return res.status(error.statusCode).json({
        message:"user already registered",
        success:false,
        data: {},
        error:error
    })
}
}
module.exports = {
createUser
}

//req= ye req wo http req hai jo client server bej raha hai is  req kay andar route mention hai jis pai req arhe hai