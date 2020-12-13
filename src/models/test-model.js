import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testsSchema = new Schema({
    test_name: {
        type: String, 
        required: 'Test name'
    },
    result: {
        type: String, 
        required: 'Test result'
    },
    test_date: {
        type: Date, 
        default: Date.now
    }
});