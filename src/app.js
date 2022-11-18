const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

app.get('/', (req, res) => {
    res.send('Application up and running.')
})

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(petNames);
        })
})

app.listen(port, () => {
    console.log(`Your Knex and Express application is up and running on port ${port}`)
})