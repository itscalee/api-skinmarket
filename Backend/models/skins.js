import Skin from '../schemas/skins.js'
import mongoose from 'mongoose'

class skinsModel {
    async create(skin) {
        return await Skin.create(skin)
    }

    async update(id, skin) {
        return await Skin.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, skin, { new: true })
    }

    async delete(id) {
        return await Skin.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }

    async getAll() {
        return await Skin.find()
            .populate('category')
            .exec()
    }

    async getOneById(id) {
        return await Skin.findById(id)
            .populate('category')
            .exec()
    }

    async getOne(filtro) {
        return await Skin.findOne(filtro)
    }

}

export default new skinsModel