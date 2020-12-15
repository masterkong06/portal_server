import { addNewTest, getTest, getTestWithID, updateTest, deleteTest } from '../controllers/test-controller';

// create main routes

const testRoutes = (app) => {
    app.route('/test')
        .get((req, res, next) => { // using "next" to call another function once this function runs
            //middleware
            console.log(`Request from ${req.originalUrl}`); // identifies where the request came from
            console.log(`Request type: ${req.method}`); // get the method that's used in the request
            next();
        }, getTest) // get all the Test records

        // Post endpoint
        .post(addNewTest); // create new Test record

    app.route('/test/:id')
        .get(getTestWithID) // show a single Test record using the database id

        .put(updateTest) // update a single Test record by id

        .delete(deleteTest); // delete a single Test record by id


}


export default testRoutes; //exports this function for use in server.js