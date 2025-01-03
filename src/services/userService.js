const { findUser, createUser } = require("../repositories/userRepository");

    async function registerUser(userDetails){
        console.log("hiting service layer")
        // Implement logic to register a new user in your database
       const user= await findUser({
        email: userDetails.email,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        mobNumber: userDetails.mobNumber
        });
        //1. we need to check if the user is already registered or not

        if (user) { 
            const error = new Error('User already exists');
             error.statusCode = 400;
             throw error; 
            }
        //2. if not we create a new user in db
    const newUser = await createUser({
        email: userDetails.email,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        mobNumber: userDetails.mobNumber,
    });

    if (!newUser) {
        const error = new Error('Failed to create user');
        error.statusCode = 500;
        throw error;
    }
    
     //3. return a success message or error message of creating a new user 
     return newUser
    }

module.exports = {
    registerUser
};