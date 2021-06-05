const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const chalk = require('chalk');

// db
const db = require('../database/Mongo');


//auth
const session = require('express-session');
const passport = require('passport');
const discordAuthStrat = require('./strategies/discordAuth')

const {LISTENING_PORT, SECRET} = require('./server.config.json')




//routes
const authRoute = require('./routes/auth');
const apiRoute = require('./routes/api');


app.use(cors({ 
    origin: [`http://localhost:5000`],
    credentials: true
}))
app.use(session({ 
    secret: SECRET,
    cookie: { 
        maxAge: 60000 * 60 * 24 
    },
    resave:false,
    saveUninitialized: false
}))


//passport
app.use(passport.initialize());
app.use(passport.session())

app.use(express.json())

//middleware
app.use('/auth', authRoute) 
app.use('/api', apiRoute)


app.get('/', (req, res) => {
    res.send('Hello from the server :)')
})

app.listen(LISTENING_PORT, () => console.log(chalk.bgWhite(chalk.black(`SERVER STARTED \n${chalk.bgGray(chalk.bold(chalk.white(`🏠: http://localhost:${LISTENING_PORT}/ `)))}`))))




