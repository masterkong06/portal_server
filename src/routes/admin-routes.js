import { addNewPatient, getPatient } from '../controllers/admin-controller';

// create main routes

const routes = (app) => {
    app.route('/patient')
        .get((req, res, next) => { // using "next" to call another function once this function runs
            //middleware
            console.log(`Request from ${req.originalUrl}`); // identifies where the request came from
            console.log(`Request type: ${req.method}`); // get the method that's used in the request
            next();
        }, getPatient) // get all the patients

        .post(addNewPatient); // create new patients

    app.route('/patient/:id')
        .put((req, res) =>
            res.send('PUT request successful!')) // update a single patient by id

        .delete((req, res) =>
            res.send('DELETE request successful!')); // delete a single patient by id


}


export default routes; //exports this function for use in server.js