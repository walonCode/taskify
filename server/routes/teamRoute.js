import express from 'express'
import { createTeam, updateTeam } from '../controllers/teamController.js'

const teamRouter = express.Router()

teamRouter.route('/').post(createTeam)
teamRouter.route('/:id').patch(updateTeam)

export default teamRouter