import Team from "../models/teamSchema.js";
import User from "../models/userSchema.js";

const createTeam = async(req,res) => {
    try {
        const { teamName, creator} = req.body;
        if(!teamName || !creator){
            res.status(404).json({message:"All field are required"})
        }
        const team = await Team.findOne({ teamName })
        if(team){
            res.status(400).json({message:"Team already exist"})
        }
        const newTeam = new team({
            teamName,
            creator
        })
        await newTeam.save()
        res.status(201).json({message:'team create successfully'})
    }catch(error){
        res.status(500).json({message:'server error',error})
    }
}

const getTeam =  async(req,res) => {
    try {
        const { teamId } = req.params
        const team = await Team.findById({ teamId }).populate('members')

        if(!team){
            return res.status(404).json({message:'Team not found'})
        }
        res.status(200).json({ team })
    }catch(error){
        res.status(500).json({message:'Server error',error});
    }
}

const updateTeam = async(req,res) => {
    try {
        const { id } = req.params
        const { teamMember}  = req.body
        if(!teamMember){
            res.status(404).json({message:'Id is required'})
        }
        const updateTeam = Team.findByIdAndUpdate({_id:id},{$inc: {$push: {member: teamMember}}},{new: true, useFindAndModify:false})
        if(!updateTeam){
            res.status(400).json({message:"Invalid team id"})
        }
        res.status(200).json({message:'Added to the team'})
    }catch(error){
        res.status(500).json({message:"server error",error})
    }
}

export {
    createTeam,
    updateTeam,
    getTeam
}