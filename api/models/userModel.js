import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        
    },
    avatar:{
        type:String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-profile-picture&psig=AOvVaw1hYSln7JUp-tW5xJbWOnwB&ust=1707462017123000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLj39_6Vm4QDFQAAAAAdAAAAABAE"
    },
},
{
    timestamps:true
});

const User= mongoose.model('User', userSchema);
export default User;