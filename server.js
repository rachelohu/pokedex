const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');

// Index Route
app.get('/', (req,res) => {
    res.render('index.ejs', {data: Pokemon});
})

// New Route
// app.get('/new', (req, res) => {
//     res.render('new.ejs', {})
// })

// Show Route
app.get('/:id', (req, res) => {
    res.render('show.ejs', {data: Pokemon[req.params.id]});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
})