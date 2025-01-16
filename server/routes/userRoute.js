import express from 'express'
import { getUser, login, reqister } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.route('/register').post(reqister)
userRouter.route('/login').post(login)
userRouter.route('/:id').get(getUser)

export default userRouter