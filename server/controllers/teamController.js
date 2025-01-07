import Team from "../models/teamSchema.js";

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

const updateTeam = async(req,res) => {
    try {
        const { id } = req.params
        if(!id){
            res.status(404).json({message:'Id is required'})
        }
        const updateTeam = Team.findByIdAndUpdate({_id:id},{$inc: {teamMember: 1}},{new: true})
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
    updateTeam
}