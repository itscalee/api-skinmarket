import express from 'express'
import userController from '../controllers/users.js'
import { verifyToken } from '../middleware/auth-jwt.js'
const route = express.Router()

route.post('/register', userController.register)
route.post('/', userController.create)
route.get('/:id', verifyToken, userController.getOne)
route.get('/', verifyToken, userController.getAll)
route.put('/:id', verifyToken, userController.update)
route.delete('/:id',verifyToken, userController.delete)
route.post('/login', userController.login)

export default route