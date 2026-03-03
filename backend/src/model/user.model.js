const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username should be unique'],
        required:[true,'username is required'],
        index:true
    },
    email:{
        type:String,
        unique:[true,'email should be unique'],
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'email is required'],
        select:false
    }
})
userSchema.index({username:1,email:1},{unique:true})

module.exports=mongoose.model('user',userSchema)