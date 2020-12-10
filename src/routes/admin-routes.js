// create main routes

const routes = (app) => {
    app.route('/patient') 
        .get((req, res) =>
            res.send('GET request successful!')) // get all the patients

        .post((req, res) =>
            res.send('POST request successful!')); // create new patients

    app.route('/patient/:id')
        .put((req, res) =>
            res.send('PUT request successful!')) // update a single patient by id

        .delete((req, res) =>
            res.send('DELETE request successful!')); // delete a single patient by id
}

export default routes; //exports this function for use in server.js