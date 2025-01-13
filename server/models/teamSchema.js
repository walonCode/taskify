import mongoose from "mongoose";

const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: {
        type:String,
        required:true,
        unique:true
    },
    teamMember:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    creator: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    task: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
    }]
})

const Team = mongoose.model('Team',teamSchema)

export default Team