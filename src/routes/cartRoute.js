const express = require('express');  
const { getCartById } = require('../controllers/cartController');
const cartRouter = express.Router();

cartRouter.get('/:id', getCartById);

module.exports = cartRouter;  //exporting the router so that it can be used in the main server file.

