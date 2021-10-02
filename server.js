const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
const methodOverride = require('method-Override');

app.use(express.static("public"));
app.use(methodOverride("_method"));

// Index Route
app.get('/pokemon/', (req,res) => {
        res.render('index.ejs', {data: pokemon, title:"Pokemon" });
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {title: "Pokemon New Page"});
});

//Create Route
app.post('/pokemon', (req, res) => {
    const id = req.params.id;
    data.create(pokemon[req.params.id], (error, createPokemon) => {
        res.redirect("/pokemon")
    } );
} );

// Delete Route
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    data.findByIdAndDelete(pokemon[req.params.id], (error, deletePokemon)  => {
        res.redirect("/pokemon")
    })
});

// Update Route
app.put('/pokemon/:id', (req, res) => {
    const id = req.params.id
    data.findByIdAndUpdate
    res.render('new.ejs', {data: pokemon[req.params.id]})
});

// Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
     const id = req.params.id
     data.findById(id, (error, pokemon) => {
    res.render('edit.ejs', {data: pokemon[req.params.id]})
    })
});

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {data: pokemon[req.params.id]});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
});