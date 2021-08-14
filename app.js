const express = require('express')
const app = express()
const port = 3000
 
app.get('/',  (req, res) => {
  res.send('Home page')
});

app.get('/hola-mundo',(req,res)=>{
   res.send('Hola mundo desde la ruta')
})

app.get('*',(req,res)=>{
   res.send('404 | Page not FOUND')
})


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
 })