const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');
async function isLoggedIn(req, res, next) {
  
        const token = req.cookies["authToken"];
        if (!token) {
            return res.status(401).json({ 
                success: false,
                data:{},
                error: 'not Authenticated',
                message: 'No token provided' });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({ 
                success: false,
                data:{},
                error: 'not Authenticated',
                message: 'invalid token provided' });
        }
        // if reached then user is authenticated allow them to access api
        req.user={ //req object modify
        id: decoded.id,
        email: decoded.email
        }
        next();
   
}

module.exports = isLoggedIn;