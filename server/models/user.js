import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    questions: [{
        question: String,
        answer: String,
        weight: Number
    }],
    oauth: {
        provider: String,
        id: String,
        displayName: String
    }
});

export default mongoose.model('User', userSchema);