const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()


const port = process.env.PORT
 
//Handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')


// Servir contenido estatico
app.use(express.static('public'))

// app.get('/',(req,res)=>{
//    res.render("Home",{
//       nombre: 'Ivan crack',
//       titulo: 'Curso Node'
//    })
// })

// app.get('/hola-mundo',(req,res)=>{
//    res.send('Hola mundo desde la ruta')
// })

// app.get('/generic',(req,res)=>{
//    res.render('generic',{
//       nombre: 'Ivan crack',
//       titulo: 'Curso Node'
//    })
// })

// app.get('/elements',(req,res)=>{
//    res.render('elements',{
//       nombre: 'Ivan crack',
//       titulo: 'Curso Node'
//    })
// })

app.get('*',(req,res)=>{
   res.sendFile( __dirname + '/public/index.html')
})



app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`)
 })