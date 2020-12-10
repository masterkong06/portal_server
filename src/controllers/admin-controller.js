import mongoose from 'mongoose';
import { demogSchema } from '../models/admin-model'

const Patient = mongoose.model('Patient', demogSchema);

export const addNewPatient = (req, res) => {
    let newPatient = new Patient(req.body);

    newPatient.save((err, patient) => {
        if (err) {
            res.send(err);
        }
        res.json(patient);
    })
}

export const getPatient = (req, res) => {
    Patient.find({}, (err, patient) => {
           if (err) {
            res.send(err);
        }
        res.json(patient);
    })
}