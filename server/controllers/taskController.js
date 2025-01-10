import Task from "../models/taskSchema.js";
import User from "../models/userSchema.js";

const createTask = async(req,res) => {
    try {
        const { title, description,createdBy,assignedTo } = req.body
        if(!title || !description || !createdBy || !assignedTo){
            return res.status(404).json({mesasage:"All fields are required"})
        }
        const task = await Task.findOne({ title })
        if(task){
            return res.status(409).json({message: 'Task already exist'})
        }

        const user = await User.findById({assignedTo})
        if(!user){
            return res.status(404).json({message: "Invalid User"})
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
        res.status(500).json({message:"Server error",error})
    }    
}

const updateTask = async(req,res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        if(!id){
            return res.status(400).json({message:"Please provide an Id"})
        }
        if(!status){
            return res.status(400).json({message:'Field is required'})
        }
        const task = await task.findById({ id })
        if(!task){
            return res.status(404).json({message:"Invalid task id"})
        }

        const validTransitions = {
            'To Do' : 'In Progress',
            'In Progress' : 'Completed'
        }

        if(task.status !== 'Completed' && validTransitions[task.status] !== status){
            return res.status(400).json({message:'Invalid status change'})
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status, updatedAt:Date.now()},
            { new : true}
        )

        res.status(200).json(updatedTask)

    }catch(error){
        res.status(500).json({message:"Server error",error})
    }
}

const deleteTask = async(req,res) => {
    try{
        const { id } = req.params
        const task = await Task.findByIdAndDelete({ _id:id })
        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({message:"Task deleted"})
    }catch(error){
        res.status(500).json({message:error})
    }
}

const getAllTask = async(req,res) => {
    try {
        const task = await Task.find({})
        if(!task){
            return res.status(400).json({message:'No task assigned yet'})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({messsage:'Server error',error})
    }
}

const getTask = async(req,res) => {
    try {
        const { title } = req.params
        const task = await Task.findById({ title });
        if(!task){
            return res.status(400).json({message:"No task with that title found"})
        }
        res.statu(200).json({task})
    }catch(error){
        res.status(500).json({message:"Server error",error})
    }
}

export {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    getTask
}