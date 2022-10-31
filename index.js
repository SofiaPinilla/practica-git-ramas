const express = require("express");
const app = express()
const PORT = 3001

app.get("/",(req,res)=>{
    res.send("Todos los productos")
})
app.post("/",(req,res)=>{
    res.send("creando un producto")
})

app.listen(PORT,()=> console.log('Servidor levantado en puerto '+PORT))
// app.listen(PORT,()=> console.log(`Servidor levantado en puerto ${PORT}`))