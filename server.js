import express from 'express'
import cors from 'cors'
import moviesRouter from './routes/movies.js'

const app = express()
const PORT = 8080

//Middlewares

app.use(express.json())
app.use(cors())

// Routes
app.use('/api/movies', moviesRouter)




app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
})