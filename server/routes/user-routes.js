import bodyParser from 'body-parser';
import express from 'express';

import sortCurrentQuestion from '../domain/spaced-repetition';
import User from '../models/user';


const routes = express.Router();
const jsonParser = bodyParser.json();

function getUser(req, res, next) {
    function httpError(statusCode) {
        res.sendStatus(statusCode);
        return next('route');
    }

    User.findOne({'oauth.id':req.session.passport.user.oauth.id}, function (err, user) {
        if (err) {
            return httpError(500);
        }
        if (!user) {
            return httpError(404);
        }
        req.user = req.session.passport.user;
        return next();
    });
}

routes.get('/:userId', getUser, function (req, res) {
    return res.status(200).json({username: req.user.username, _id: req.user._id});
});

routes.get('/:userId/question', getUser, function (req, res) {
    return res.status(200).json(req.user.questions[0]);
});

routes.post('/:userId/question', [jsonParser, getUser], function (req, res) {
    sortCurrentQuestion(req.user.questions, req.body.isCorrect);

    User.findOneAndUpdate({_id: req.user._id}, req.user, function () {
        return res.sendStatus(200);
    });
});

export default routes;