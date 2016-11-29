import oauth from './oauth';
import passport from "passport";
import User from '../models/user';
import createQuestions from '../factories/french-questions';

const Strategy = require('passport-google-oauth2').Strategy;

passport.use(new Strategy(oauth.google, function (accessToken, refreshToken, profile, cb) {
    User.findOne({'oauth.id': profile.id}, function (err, user){
        if (err) {
            return cb(err, null);
        }
        if (!user) {
            return User.create({
                username: profile.email,
                questions: createQuestions(),
                oauth: {
                    provider: 'google',
                    id: profile.id,
                    displayName: profile.displayName
                }
            }, function (err, user) {
                if (err) {
                    return cb(err, null);
                }
                cb(null, profile);
            });
        }
        return cb(null, profile);
    })
}));
