import mongoose from "mongoose";

const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: {
        type:String,
        required:true,
        unique:true
    },
    teamMember: {
        type:Number,
        default:0
    },
    creator: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
})

const Team = mongoose.model('Team',teamSchema)

export default Team