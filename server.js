const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const methodOverride = require('method-Override');

app.use(methodOverride("_method"));

// Index Route
app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {data: Pokemon});
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {})
});

// Destroy Route
// app.delete('/pokemon/:indexOfPokemonArray', (req, res) => {
//     data.splice(req.params.indexOfPokemonArray, 1)
//     res.redirect("/")
// });

// Update Route
// app.get('/pokemon/new', (req, res) => {
//     res.render('new.ejs', {})
// });

// Create Route
// app.put('/pokemon/:indexOfPokemonArray', (req, res) => {
//

// Edit Route
// app.get('/pokemon/:indexOfPokemonArray/edit', (req, res) => {
//     res.render('edit.ejs', {
//     Pokemon: })
// });

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {data: Pokemon[req.params.id]});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
});