// importing modules
import express from 'express'
import morgan from 'morgan'

// importing variables
import routerApi from './routers/api.router'


// se crea el servidor
const app = express()

// seteamos el puerto
app.set('port', process.env.PORT || 4001)


// using middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

// home route
app.get('/', (req, res)=>{
    res.send('Home page')
})


// API ROUTING
app.use('/api', routerApi)


export default app;