//DEPENDENCIES
import express from 'express'
import routes from './src/routes/admin-routes';

const app = express();

const PORT = 3000;

routes(app);

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