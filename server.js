//DEPENDENCIES
import express from 'express'
// const express = require('express');
const app = express();

const PORT = 3000;

//ROUTES
app.get('/', (req, res) => {
    res.send(`I'm alive!`);
});


app.get('/somedata', (req, res) => {
    response.send('here is your information');
});









app.listen(PORT, () => {
    console.log(`Party on port ${PORT} bitches!!! 🎉🎈🎊🥳`);
})