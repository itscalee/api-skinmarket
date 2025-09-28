import mongoose from 'mongoose'
import "dotenv/config"


class dbClient {
    constructor() {
        this.connectDB()
    }

    async connectDB() {
        try {
            const queryString = process.env.DB_CONNECT
            await mongoose.connect(queryString)
            console.log('Connected to mongoDB')
        } catch (e) {
            console.error(e)
        }
        
    }

    async closeConnection() {
        try {
            await mongoose.disconnect()
            console.log('DB connection closed')
        } catch (e) {
            console.log('Error when closing connection', e)
        }
    }

}

export default new dbClient()