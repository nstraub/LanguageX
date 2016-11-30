import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

const routes = express.Router();
const jsonParser = bodyParser.json();

routes.get('/', [passport.authenticate('google', {scope: ['profile', 'email']})]);

routes.get('/callback', [passport.authenticate('google', {failureRedirect: '/login'})],
  function(req, res) {
    res.redirect('/main/');
  }
);

export default routes;