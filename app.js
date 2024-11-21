const express = require('express');
var hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//para servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Felo Holguin',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Felo Holguin',
        titulo: 'Curso Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Felo Holguin',
        titulo: 'Curso de Node'
    })
});

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening al http://localhost:${port}`)
})