import express from "express";
import passport from 'passport';
import { forwardAuthenticated } from "../middleware/checkAuth";
import { getUserByEmailIdAndPassword } from "../controllers/userController";

const router = express.Router();

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get("/login", forwardAuthenticated, (req, res) => {
  res.render("login", /*{ messages: req.session.messages }*/ );
  /* req.session.messages = [] */
});

router.post(
  "/login", 
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/auth/login",
      failureMessage: true,
      /* FIX ME: 😭 failureMsg needed when login fails */
    })
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

export default router;
