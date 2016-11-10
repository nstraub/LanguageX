import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    questions: [{question: String, answer: String, weight: Number}]
});

export default mongoose.model('User', userSchema)