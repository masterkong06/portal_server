import mongoose from 'mongoose';
import { demogSchema } from '../models/admin-model';

const Patient = mongoose.model('Patient', demogSchema);

export const addNewPatient = (req, res) => {
    let newPatient = new Patient(req.body);

    newPatient.save((err, patient) => {
        if (err) {
            res.send(err);
        }
        res.json(patient);
    });
};

export const getPatient = (req, res) => {
    Patient.find({}, (err, patient) => {
           if (err) {
            res.send(err);
        }
        res.json(patient);
    });
};

export const getPatientWithID = (req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
           if (err) {
            res.send(err);
        }
        res.json(patient);
    });
};

export const updatePatient = (req, res) => {
    Patient.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false }, (err, patient) => {
           if (err) {
            res.send(err);
        }
        res.json(patient);
    });
};

export const deletePatient = (req, res) => {
    Patient.remove({ _id: req.params.id }, (err, patient) => {
           if (err) {
            res.send(err);
        }
        res.json({message: 'Patient record successfully deleted.'});
    });
};