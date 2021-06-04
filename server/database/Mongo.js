const mongoose = require('mongoose');
const config = require('../src/server.config.json');
const chalk = require('chalk')

if(!config.MONGO_URI){
    console.log(chalk.bgRedBright(chalk.black(`No Website Auth MongoDB connection string provided `)))
    console.log(chalk.bgRedBright(chalk.black(`Please read CONTRIBUTING.MD for more information `)))
    return module.exports = console.log(chalk.bgRedBright(chalk.black(`CONNECTION FAILED FOR THESE REASONS ^^ \n`)))
}

else {
    return module.exports = mongoose.connect(config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
}


