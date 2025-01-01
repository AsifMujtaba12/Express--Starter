const express =require('express');
// const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig.js');
const app = express();

app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded({extended:true}));//

app.post('/ping', function (req, res) {
    console.log(req.body);
    return res.json({
        message: 'API is running!'
    })
});

app.listen(ServerConfig.PORT, async ()=>{
     await connectDB();
     console.log(`Server is running on port ${ServerConfig.PORT}`);

});