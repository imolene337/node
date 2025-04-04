const a = require("express")
const b = require("cors")

const meuServer = a()
meuServer.use(b())

meuServer.get('/alunos', (req, res)=>{
    res.send(
        [{
            nome:"Imolene",
            rgm:"171",
            curso:"ADS"
        },
        {
            nome:"CESAR",
            rgm:"247",
            curso:"ADS"
        }]
    )
})

meuServer.listen(3069, ()=>{
    console.log("Está liberado o 3069")
})