const a = require('express')

const b = a()

b.get('/meuendpoint',(request,response)=>{
    response.send('ENVIAR')
    
} )

b.listen(3001,()=>{
    console.log('entrou')
})