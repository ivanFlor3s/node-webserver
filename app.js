const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000
 
//Handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')


// Servir contenido estatico
app.use(express.static('public'))

app.get('/',(req,res)=>{
   res.render("Home",{
      nombre: 'Ivan crack',
      titulo: 'Curso Node'
   })
})

app.get('/hola-mundo',(req,res)=>{
   res.send('Hola mundo desde la ruta')
})

app.get('/generic',(req,res)=>{
   res.sendFile(__dirname + '/public/generic.html')
})

app.get('*',(req,res)=>{
   res.sendFile( __dirname + '/public/404.html')
})



app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`)
 })