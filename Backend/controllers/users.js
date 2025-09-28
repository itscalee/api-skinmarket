import usersModel from '../models/users.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../middleware/auth-jwt.js'

class usersController{
    constructor() {

    }

    async register(req, res) {
        try {
            const { usuario, correo, password, role } = req.body
            const userExist = await usersModel.getOne({correo})
            if (userExist) {
                return res.status(400).json({ error: 'Usuario existe!' })
            }
            const encryptedPass = await bcrypt.hash(password, 10)

            const data = await usersModel.create({
                usuario,
                correo,
                password: encryptedPass,
                role
            })
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }
    
    async create(req, res) {
        try {
            const data = await usersModel.create(req.body)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params 
            const data = await usersModel.update(id, req.body)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params 
            const data = await usersModel.delete(id)
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getAll(req, res) {
        try {
            const data = await usersModel.getAll()
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const data = await usersModel.getOneById(id)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async login  (req, res) {
        const { correo, password } = req.body
        const userExist = await usersModel.getOne({correo})
        if (!userExist) {
            return res.status(400).json({ error: 'Usuario no existe!' })
        }
        const claveValida = await bcrypt.compare(password, userExist.password)
        if(!claveValida) {
            return res.status(400).json({ error: 'Clave no válida!' })
        }
        const token = generateToken(correo)
        return res.status(200).json({ msg: 'Usuario autenticado', token })
    }
}

export default new usersController()