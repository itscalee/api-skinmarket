import mongoose from "mongoose"

const skinSchema = new mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    price: {type: "double", required: true},
    stock: {type: Number, required: true},
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
    },
    {timestamps: true}
)

export default mongoose.model('skins', skinSchema)