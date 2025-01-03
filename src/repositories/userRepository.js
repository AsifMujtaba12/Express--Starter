const Userr=require('../schema/userSchema');



async function findUser(parameters){
    try{
const response = await Userr.findOne({...parameters});
return response; 
    }catch(error){
        console.log('Error finding user', error);
        return null;
    }  
}
async function createUser(userDetails){
    try{
    const response = await Userr.create(userDetails);
    return response;
    }catch(error){
        console.log('Error creating user', error);
        return null;
    }
}
    

module.exports = {
    findUser,
    createUser,
 
};