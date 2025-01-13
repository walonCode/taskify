import express from 'express'
import { createTeam, getTeam, updateTeam } from '../controllers/teamController.js'

const teamRouter = express.Router()

teamRouter.route('/').post(createTeam)
teamRouter.route('/:id/add_member').put(updateTeam)
teamRouter.route('/:teamId').get(getTeam)

export default teamRouter 