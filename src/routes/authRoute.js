//Resorces--->users
const express = require('express');
const {login } = require('../controllers/authController');
//We have to intilixe a rputer object to add routes in a new file
// Routers are used for segregationg your routes in different modules.
const authRouter = express.Router();//objct used to make routing 

authRouter.post('/login', login); //this is the route REGSTRATION


module.exports = authRouter; //exporting the router so that it can be used in the main server file.