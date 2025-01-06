import mongoose from "mongoose"

const Schema  = mongoose.Schema

const userSchema = new Schema({
    fullname: {
        type:String,
        required:[true,'Fullname is required'],
    },
    username: {
        type:String,
        required:[true, 'Username is required'],
        minlength:[3,'Username must be above 3 letters long'],
        unique:true
    },
    email: {
        type:String,
        required:[true, 'Email is required']
    },
    password: {
        type:String,
        required:[true,'Password is required'],
        minlength: [8, 'Password should be longer than 8 characters']
    },
    roles: {
        type:String,
        enum:['Admin','Team Member','Viewer']
    },
    refreshToken:{
        type:String,
        default:""
    },
    tasks: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Task'
    }]
})

const User = mongoose.model('User', userSchema)

export default User