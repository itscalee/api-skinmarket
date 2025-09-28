import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    },
    {timestamps: true}
)

export default mongoose.model('categories', categorySchema)