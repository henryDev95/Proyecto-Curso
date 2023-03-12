import express from "express";
import cors from "cors";
import db from "./database/db.js";
import router from "./routers/Router.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', router)

try {
    await db.authenticate()
    console.log("!Conexion exitosa!")
} catch (error) {
    //console.log(error.message)
}

app.listen(8000,()=>{
    console.log("Server Up running in http://localhost:8000/")
})
