import express from 'express';
import User from '../models/user';
import bodyParser from 'body-parser';
import getQuestions from '../factories/french-questions';
import sortCurrentQuestion from '../domain/spaced-repetition';

const routes = express.Router();
const jsonParser = bodyParser.json();

function getUser(req, res, callback) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            if (!user) {
                return res.sendStatus(404);
            }
            return res.sendStatus(500)
        }
        return callback(user);
    });
}
routes.get('/:userId', function (req, res) {
    getUser(req, res, function (user) {
        return res.status(200).json({username: user.username, _id: user._id});
    });
});

routes.post('/', jsonParser, function (req, res) {
    var user = new User();
    user.questions = getQuestions();
    user.username = req.body.username;

    user.save();
    return res.status(201).json(user._id);
});

routes.get('/:userId/question', function (req, res) {
    getUser(req, res, function (user) {
        return res.status(200).json(user.questions[0]);
    });
});

routes.post('/:userId/question', jsonParser, function (req, res) {
    getUser(req, res, function (user) {
        sortCurrentQuestion(user.questions, req.body.isCorrect);
        user.save();
        return res.sendStatus(200);
    });
});

export default routes;