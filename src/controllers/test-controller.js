import mongoose from 'mongoose';
import { testsSchema } from '../models/test-model'

const Tests = mongoose.model('Tests', testsSchema);

export const addNewTest = (req, res) => {
    let newTest = new Tests(req.body);

    newTest.save((err, test) => {
        if (err) {
            res.send(err);
        }
        res.json(test);
    })
}

export const getTest = (req, res) => {
    Tests.find({}, (err, test) => {
           if (err) {
            res.send(err);
        }
        res.json(test);
    })
}

export const getTestWithID = (req, res) => {
    Tests.findById(req.params.id, (err, test) => {
           if (err) {
            res.send(err);
        }
        res.json(test);
    })
}

export const updateTest = (req, res) => {
    Tests.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false }, (err, test) => {
           if (err) {
            res.send(err);
        }
        res.json(test);
    })
}

export const deleteTest = (req, res) => {
    Tests.remove({ _id: req.params.id }, (err, test) => {
           if (err) {
            res.send(err);
        }
        res.json({message: `Test record successfully deleted.`});
    })
}