//DEPENDENCIES
import express from 'express';
import routes from './src/routes/admin-routes';
import testRoutes from './src/routes/test-routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3003;
const cors = require('cors');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true // prevents errors when connecting to mongoDB
});

// middleware
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, true);
        }else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));

// setup bodyParser
app.use(bodyParser.urlencoded({extended: true})); // parse the request object to JSON
app.use(bodyParser.json());

//ROUTES

routes(app);
testRoutes(app);

// static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('I\'m alive!');
});






app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Party on port ${PORT} ya'll!!! 🎉🎈🎊🥳`);
});