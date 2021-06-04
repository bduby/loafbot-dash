const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) =>{
    res.redirect('http://localhost:51900/#/')
})

router.get('/', (req, res) =>{
    if(req.user) {
        res.json({status: 200, user: req.user})
    }
    else {
        res.status(401).json({status: 401, message: "Idiot Doo Doo Head"})
    }
})

router.get('/forbidden', (req, res) => {
    res.status(401).json({
        status: 403, 
        msg: "Authorization Cancelled Or Something Went Wrong"
    })
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:51900/#/')
})

module.exports = router