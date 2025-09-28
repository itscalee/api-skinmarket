import express from 'express'
import "dotenv/config"
import routesUsers from './routes/users.js'
import routesCategories from './routes/categories.js'
import routesSkins from './routes/skins.js'
import routesCarts from './routes/carts.js'
import bodyParser from 'body-parser'
import dbClient from './config/db.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', routesUsers)
app.use('/categories', routesCategories)
app.use('/skins', routesSkins)
app.use('/carts', routesCarts)

try {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log('Server listening on port ' + PORT)
    })
} catch (e) { 
    console.log(e)
}

process.on('SIGINT', async() => {
    dbClient.closeConnection()
    process.exit(0)
})