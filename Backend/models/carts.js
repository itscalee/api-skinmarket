import Cart from '../schemas/carts.js'
import mongoose from 'mongoose'

class cartsModel {
    async create(cart) {
        return await Cart.create(cart)
    }

    async update(id, cart) {
        return await Cart.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, cart, { new: true })
    }

    async delete(id) {
        return await Cart.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }

    async getAll() {
        return await Cart.find()
            .populate('user')
            .populate('items.skin')
            .exec()
    }

    async getOneById(id) {
        return await Cart.findById(id)
            .populate('user')
            .populate('items.skin')
            .exec()
    }

    async getOne(filtro) {
        return await Cart.findOne(filtro)
    }
}

export default new cartsModel