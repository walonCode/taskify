import Task from "../models/taskSchema.js";
import User from "../models/userSchema.js";

const createTask = async(req,res) => {
    try {
        const { title, description,createdBy,assignedTo } = req.body
        if(!title || !description || !createdBy || !assignedTo){
            res.status(404).json({mesasage:"All fields are required"})
        }
        const task = await Task.findOne({ title })
        if(task){
            res.status(409).json({message: 'Task already exist'})
        }

        const user = await User.findById({assignedTo})
        if(!user){
            res.status(404).json({message: "Invalid User"})
        }
        const newTask = new task({
            title,
            description,
            createdBy,
            assignedTo
        })

        await newTask.save()
        user.tasks = newTask._id
        await user.save()
        
        res.status(201).json({message:newTask})
    }catch(error){
        res.status(400).json({message:error})
    }    
}

const updateTask = async(req,res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        if(!id){
            res.status(400).json({message:"Please provide an Id"})
        }
        if(!status){
            res.status(400).json({message:'Field is required'})
        }
        const task = await task.findById({ id })
        if(!task){
            res.status(404).json({message:"Invalid task id"})
        }

        const validTransitions = {
            'To Do' : 'In Progress',
            'In Progress' : 'Completed'
        }

        if(task.status !== 'Completed' && validTransitions[task.status] !== status){
            res.status(400).json({message:'Invalid status change'})
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status, updatedAt:Date.now()},
            { new : true}
        )

        res.status(200).json(updatedTask)

    }catch(error){
        res.status(400).json({message:error})
    }
}

const deleteTask = async(req,res) => {

}

const getAllTask = async(req,res) => {

}

const getTask = async(req,res) => {

}

export {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    getTask
}