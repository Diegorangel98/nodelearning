require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Pagina principal',
    nombre: 'Diego Rangel'
  });
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Pagina principal',
        nombre: 'Diego Rangel'
      })
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Pagina principal',
        nombre: 'Diego Rangel'
      })
})
app.get('/home', (req, res) => {
    res.send('Home')
})
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' )
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})