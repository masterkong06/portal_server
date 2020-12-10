import { addNewPatient, getPatient, getPatientWithID, updatePatient, deletePatient } from '../controllers/admin-controller';

// create main routes

const routes = (app) => {
    app.route('/patient')
        .get((req, res, next) => { // using "next" to call another function once this function runs
            //middleware
            console.log(`Request from ${req.originalUrl}`); // identifies where the request came from
            console.log(`Request type: ${req.method}`); // get the method that's used in the request
            next();
        }, getPatient) // get all the patient records

        // Post endpoint
        .post(addNewPatient); // create new patient record

    app.route('/patient/:id')
        .get(getPatientWithID) // show a single patient record using the database id

        .put(updatePatient) // update a single patient record by id

        .delete(deletePatient); // delete a single patient record by id


}


export default routes; //exports this function for use in server.js