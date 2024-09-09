import mongoose from "mongoose"

const registerSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    country:{
        type:String,
        required:true,
    },

    phone:{
        type:Number,
        required:true
    },


})

const User=mongoose.models.user || mongoose.model('user', registerSchema)
export default User