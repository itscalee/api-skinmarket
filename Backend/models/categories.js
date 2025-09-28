import Category from '../schemas/categories.js'
import mongoose from 'mongoose'

class categoriesModel {
    async create(category) {
        return await Category.create(category)
    }

    async update(id, category) {
        return await Category.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, category, { new: true })
    }

    async delete(id) {
        return await Category.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }

    async getAll() {
        return await Category.find()
    }

    async getOneById(id) {
        return await Category.findById(id)
    }

    async getOne(filtro) {
        return await Category.findOne(filtro)
    }
}

export default new categoriesModel