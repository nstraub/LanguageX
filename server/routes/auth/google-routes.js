import express from 'express';
import passport from 'passport';


const routes = express.Router();

routes.get('/', [passport.authenticate('google', {scope: ['profile', 'email']})]);

routes.get('/callback', [passport.authenticate('google', {failureRedirect: '/login'})],
  function(req, res) {
      res.redirect('/main/');
  }
);

export default routes;