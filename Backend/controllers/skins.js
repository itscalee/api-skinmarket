import skinsModel from '../models/skins.js'
import categoriesModel from '../models/categories.js'

class skinsController{
    constructor() {

    }

    async create(req, res) {
        try {
            const { nombre, description, price, stock, category } = req.body
            const skinExist = await skinsModel.getOne({nombre})
            if (skinExist) {
                return res.status(400).json({ error: 'Skin existe!' })
            }

            const data = await skinsModel.create({
                nombre,
                description,
                price,
                stock,
                category
            })
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params 
            const data = await skinsModel.update(id, req.body)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params 
            const data = await skinsModel.delete(id)
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getAll(req, res) {
        try {
            const data = await skinsModel.getAll()
            res.status(201).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const data = await skinsModel.getOneById(id)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

}

export default new skinsController()