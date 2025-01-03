const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: [true , 'FirstName is req'],// schema used from mongoose mandatory fields
        minlength:[5, "Minimum length is 5 characters"],
        lowercase:true,
        trim:true, // if the user gives extra spaces then it will atomlly remove
        maxlength:[20, "firstname should be less then or equal 20"]
    },
    lastName: {
        type: String,
        required: [true , 'FirstName is req'],// schema used from mongoose mandatory fields
        minlength:[5, "Minimum length is 5 characters"],
        lowercase:true,
        trim:true, // if the user gives extra spaces then it will atomlly remove
        maxlength:[20, "firstname should be less then or equal 20"]
    },
    mobNumber:{
        type: String,
        trim:true,
        unique:[true, 'ph num is already use'], // if the user gives extra spaces then it will atomlly
        required:[true, 'ph num should be provided'], // if the user gives extra spaces then it will
        minlength:10,
        maxlength:10
    },
    email: {
        type: String,
        required: [true, 'emailshould be provided'], // if the user gives extra spaces then it will
        trim: true,
        unique: [true, 'email is already in use'], 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     

    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"],
        minlength:[6, 'password must be at least 6 characters'],
    },
},{
    timestamps: true, // to automatically record the time when data is created and updated
 //  versionKey: false, // to remove version key from the schema
});
//user  save hona sai phelai pwd modify ho 
userSchema.pre('save', async function(){
    // here we can modify user before saved in db
    const hashedPassword= await bcrypt.hash(this.password,10)
    this.password = hashedPassword;
})
const Userr= mongoose.model('Userr', userSchema);

module.exports=Userr; 