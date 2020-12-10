//DEPENDENCIES
import express from 'express'
import routes from './src/routes/admin-routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true // prevents errors when connecting to mongoDB
});

// setup bodyParser
app.use(bodyParser.urlencoded({extended: true})); // parse the request object to JSON
app.use(bodyParser.json());

routes(app);

//ROUTES

app.get('/', (req, res) => {
    res.send(`I'm alive!`);
});



app.listen(PORT, () => {
    console.log(`Party on port ${PORT} bitches!!! 🎉🎈🎊🥳`);
})