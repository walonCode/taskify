import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    dueDate:{
        type:Date
    },
    createdBy: {
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["To Do","In Progress","Completed"],
        default:"To Do"
    },
    assignedTo: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

taskSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

taskSchema.pre('findOneAndDelete', async function(next) {
    const task = await this.model.findOne(this.getQuery());
    if (task) {
        await User.findByIdAndUpdate(task.assignedTo, {
            $pull: { tasks: task._id }
        });
    }
    next();
});

const Task = mongoose.model('Task',taskSchema)

export default Task