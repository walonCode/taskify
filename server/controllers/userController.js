import User from "../models/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const reqister = async(req,res) => {
    try{
        const { fullname,username,password,email,roles } = req.body

        //checking if all fields have data
        if(!fullname || !username || !password || !email || !roles){
            return res.status(404).json({message: "All fields are required"})
        }

        //checking to see if a user exist with tha username
        const user = await User.findOne({ username })
        if(user){
            return res.statu(409).json({message: 'User already exist'})
        }

        //creating a password hashed 
        const passwordHashed = await bcrypt.hash(password,10)

        //creating a new user in the database
        const newUser = new user({
            fullname,
            username,
            email,
            roles,
            password:passwordHashed
        })

        //saving user in the database
        await newUser.save()

        const userResponse = newUser.toObject()
        delete userResponse.password

        res.status(201).json({message:'User created',userResponse})
    }catch(error){
        res.status(400).json({message:error})
    }
}

const login = async(req,res) => {
  try{
    const { username, password } = req.body
    if(!username || !password){
        return res.status(409).json({message:"All fields required"})
    }

    //checking for a valid user
    const user = await User.findOne({ username })
    if(!user){
        return res.status(404).json({messsage: 'User with username not found'})
    }

    //checking to see it the password match
    const passwordMatched = await bcrypt.compare(password, user.password)
    if(!passwordMatched){
        return res.status(402).json({message:"Invalid password"})
    }

    //creating the tokens
    const accessToken = jwt.sign({id:user._id},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"15m"
    })
    const refreshToken = jwt.sign({id:user._id},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"1d"
    })
    //sending a cookie that has the refresh token
    res.cookie("user",refreshToken,{
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"None",
        secure:false
    })

    user.refreshToken = refreshToken
    await user.save()

    const userResponse = user.toObject()
    delete userResponse.password
    res.status(200).json({message:"login successfull",user:accessToken,userResponse})
  }catch(error){
    res.status(500).json({message:"Server error",error})
  }
}

export {
    reqister,
    login
}