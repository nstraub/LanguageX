import passport from 'passport';

import createQuestions from '../factories/french-questions';
import oauth from './oauth';
import User from '../models/user';


const Strategy = require('passport-google-oauth2').Strategy;

passport.use(new Strategy(oauth.google, function (accessToken, refreshToken, profile, cb) {
    User.findOne({'oauth.id': profile.id}, function (err, user){
        if (!(err || user)) {
            return User.create({
                username: profile.email,
                questions: createQuestions(),
                oauth: {
                    provider: 'google',
                    id: profile.id,
                    displayName: profile.displayName
                }
            }, cb);
        }
        return cb(err, user);
    });
}));
