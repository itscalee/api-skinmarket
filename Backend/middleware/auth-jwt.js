import jwt from 'jsonwebtoken'
import "dotenv/config"

export function generateToken(correo) {
    return jwt.sign({correo}, process.env.JWT_SECRET, {expiresIn: '1h'})
}

export function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if(!token) {
        return res.status(401).json({ error: 'Token requerido' })
    }
    try {
        const dataToken = jwt.verify(token, process.env.JWT_SECRET)
        //console.log(dataToken.correo)
        next()
    } catch (e) {
        res.status(401).json({ error: 'Token no válido' })
    }
    
}
