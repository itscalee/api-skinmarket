import cartsModel from '../models/carts.js'

class cartsController{
    constructor() {

    }

    async addcart(req, res) {
        try {
            const { user, items, totalPay } = req.body
            const cartExist = await cartsModel.getOne({user})
            if (cartExist) {
                return res.status(400).json({ error: 'Usuario ya tiene carrito activo!' })
            }

            const data = await cartsModel.create({
                user,
                items,
                totalPay
            })
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params 
            const data = await cartsModel.update(id, req.body)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params 
            const data = await cartsModel.delete(id)
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async getAll(req, res) {
        try {
            const data = await cartsModel.getAll()
            res.status(201).json(data)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            const data = await cartsModel.getOneById(id)
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e)
        }
    }

}

export default new cartsController()