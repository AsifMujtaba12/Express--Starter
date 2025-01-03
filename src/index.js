const express =require('express');
// const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig.js');
const connectDB = require('./config/dbConfig.js');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const Userr = require('./schema/userSchema.js');
const userRouter = require('./routes/userRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const authRouter = require('./routes/authRoute.js');
const isLoggedIn = require('./validation/authValidator.js');
app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded({extended:true}));//

//Routing Middleware
//if req route starts with /users then handel it using userRoute
app.use('/users', userRouter); //middleware connects the router to the server
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.get('/ping',isLoggedIn, function (req, res) {
    console.log(req.body);
    console.log(req.cookies);

    return res.json({
        message: 'API is running!'
    })
});

app.listen(ServerConfig.PORT, async ()=>{
     await connectDB();
     console.log(`Server is running on port ${ServerConfig.PORT}`);
//   const newUser= await Userr.create({
//     email:"user@exa.com",
//     password:"12345678923",
//     firstName:"Johnoauij",
//     lastName:"Doetughk",
//     mobNumber:'1234567891'
//   });
//   console.log('Created new user');
//   console.log(newUser);
     
});
