import express from 'express'
import cors from 'cors' 
import db from './database/db.js'
import blogRoutes from './routes/routes.js'

const app = new express()
app.use(cors())
app.use(express.json())
app.use("/blogs",  blogRoutes)

try {
    await db.authenticate()
    console.log("conexion exitosa")
    app.listen(8000,()=>{
        console.log("Server runing in http://localhost:8000")
    })
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}
app.get('/',(req, res)=>{
    res.send("HOLA MUNDO")
})
