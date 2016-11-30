import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import './strategies/google-oauth2';
import passport from 'passport'
import session from 'express-session';

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(express.static(process.env.CLIENT_PATH));

const serializer = function(user, done) {
    done(null, user);
};
passport.serializeUser(serializer);
passport.deserializeUser(serializer);

app.use(session({
    secret: 'dev',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/main',express.static(process.env.CLIENT_PATH));
app.use('/users', require('./routes/user-routes').default);
app.use('/auth/google', require('./routes/auth/google-routes').default);

function runServer() {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/languageX');
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
