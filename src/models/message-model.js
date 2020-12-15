import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const messageSchema = new Schema({
    msg_text: {
        type: String, 
        required: 'Test name'
    },
    result: {
        type: String, 
        required: 'Test result'
    },
    msg_date: {
        type: Date, 
        default: Date.now
    }
});