const DiscordStrategy = require(`passport-discord`).Strategy;
const passport = require('passport');
const {CLIENT_ID, CLIENT_SECRET, AUTH_REDIR, SUPABASE} = require('../server.config.json')
const UserSchema = require('../../models/User');
const chalk = require('chalk');
const DiscordUser = require('../../models/User')

passport.serializeUser((user, done) => {
    console.log(chalk.bgHex('#0fd43c').black(`Serializing ${user.username} from ${user.locale} `))
    done(null, user)

})

passport.deserializeUser(async(id, done) => {
    const user = await DiscordUser.findById(id)
    if(user) {
        done(null, user)
        console.log(chalk.bgHex('#7f0a8f').black(`Deserializing ${user.username} from ${user.locale} `))
    }
})

passport.use(new DiscordStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: AUTH_REDIR,
    scope: ['identify', 'email', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {  
    try{
        const user = await DiscordUser.findOne({UserID: profile.id});

        if(user){ 
            console.log(chalk.bgBlue(chalk.whiteBright(`An Existing User (${user.username} | ${user.locale}) Is Logging In `)))
            done(null, user)
        }
        else {
            console.log(chalk.bgYellow(chalk.rgb(0,0,0).bold('No user found, creating new one ')))
            const newUser = await new DiscordUser({
                UserID: profile.id,
                username: profile.username,
                tag: profile.discriminator, 
                locale: profile.locale,
                avatar: profile.avatar
            })
            const savedUser = await newUser.save()
            console.log(chalk.bgGreen(chalk.whiteBright(`A New User Has Been Registered`)))
            done(null, savedUser)
        }

    }
    catch(err){
        console.log(err)
        done(err, null)
    }
}))