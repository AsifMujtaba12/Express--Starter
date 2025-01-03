//Resorces--->users
const express = require('express');
const { createUser } = require('../controllers/userController');
//We have to intilixe a rputer object to add routes in a new file
// Routers are used for segregationg your routes in different modules.
const userRouter = express.Router();//objct used to make routing 

userRouter.post('/', createUser); //this is the route REGSTRATION


module.exports = userRouter; //exporting the router so that it can be used in the main server file.