import categoriesModel from '../models/categories.js'

class categoriesController{
    constructor() {

    }

    async create(req, res) {
        try {
            const { nombre, description } = req.body
            const categoryExist = await categoriesModel.getOne({nombre})
            if (categoryExist) {
                return res.status(400).json({ error: 'Categoría existe!' })
            }

            const data = await categoriesModel.create({
                nombre,
                description
            })
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params 
            const data = await categoriesModel.update(id, req.body)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params 
            const data = await categoriesModel.delete(id)
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getAll(req, res) {
        try {
            const data = await categoriesModel.getAll()
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const data = await categoriesModel.getOneById(id)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

}

export default new categoriesController()