const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/sensores'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("todo muy bien")
})
.catch((err)=>{
    console.log("No tiene funcion")
}) 

//Esquemas db
const sensores = new mongoose.Schema({
    ph:{
        type:String
    },
    turbidez:{
        type:String
    },
    

})
