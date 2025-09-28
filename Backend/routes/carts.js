import express from 'express'
import cartController from '../controllers/carts.js'
import { verifyToken } from '../middleware/auth-jwt.js'
const route = express.Router()

route.post('/addcart', verifyToken, cartController.addcart)
route.get('/:id', verifyToken, cartController.getOne)
route.get('/', verifyToken, cartController.getAll)
route.put('/updatecart/:id', verifyToken, cartController.update)
route.delete('/deletecart/:id',verifyToken, cartController.delete)

export default route