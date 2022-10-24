const express = require('express')
const app = express()
const PORT = 8000
const cors= require('cors')

app.use(cors())

let rappers ={
    '21 Savvage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'Chance the Rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },

    'Unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName= request.params.name.toLowerCase()
    if ( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }   
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is now running on port ${PORT}!`)
} )