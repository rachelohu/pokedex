const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const methodOverride = require('method-Override');

app.use(express.static("public"));
app.use(methodOverride("_method"));

// Index Route
app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {data: Pokemon});
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/new.ejs');
});

// Destroy Route
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id
    Data.findByIdAndRemove(id, (err, Pokemon)  => {
        res.redirect("/pokemon")
    })
});

// Update Route
// app.get('/pokemon/:id', (req, res) => {
//     const id = req.params.id
//     Data.findByIdAndUpdate
//     res.render('new.ejs', {})
// });

// Create Route
// app.put('/pokemon/:id', (req, res) => {
//

// Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
     const id = req.params.id
     data.findById(id, (err, Pokemon) => {
    res.render('edit.ejs', {data: Pokemon[req.params.id]})
    })
})

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {data: Pokemon[req.params.id]});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
});