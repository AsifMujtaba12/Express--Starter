const { findUser } = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require("../config/serverConfig");
async function loginUser(authDetails){
    const email = authDetails.email;
    const plainPassword = authDetails.password;

    //1. check if there is a regitred user with given email
    const user = await findUser({email});
    if (!user) {
        throw {message: "Couldn't find user with given email", statusCode: 404};
    }
    //2. if user found compare the given plainpassword with the stored hashed password
   const isPasswordValidated =await bcrypt.compare(plainPassword, user.password);

    if (!isPasswordValidated) {
        throw {message: "Invalid password", statusCode: 401};
    }
    //3. if password is validated, create a token and return it
    const token = jwt.sign({email:user.email, userId: user._id },JWT_SECRET, { expiresIn: JWT_EXPIRY });
    return token;
 
}

module.exports = {
    loginUser,
};