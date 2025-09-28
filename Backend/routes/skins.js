import express from 'express'
import skinController from '../controllers/skins.js'
import { verifyToken } from '../middleware/auth-jwt.js'
const route = express.Router()

route.post('/create', verifyToken, skinController.create)
route.get('/:id', verifyToken, skinController.getOne)
route.get('/', verifyToken, skinController.getAll)
route.put('/:id', verifyToken, skinController.update)
route.delete('/:id',verifyToken, skinController.delete)

export default route