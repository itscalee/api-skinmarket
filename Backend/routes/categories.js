import express from 'express'
import categoryController from '../controllers/categories.js'
import { verifyToken } from '../middleware/auth-jwt.js'
const route = express.Router()

route.post('/create', verifyToken, categoryController.create)
route.get('/:id', verifyToken, categoryController.getOne)
route.get('/', verifyToken, categoryController.getAll)
route.put('/:id', verifyToken, categoryController.update)
route.delete('/:id',verifyToken, categoryController.delete)

export default route