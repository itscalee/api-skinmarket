import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    usuario: {type: String, required: true, trim: true},
    correo: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user', enum:['user', 'admin']}
    },
    {timestamps: true}
)

export default mongoose.model('users', userSchema)