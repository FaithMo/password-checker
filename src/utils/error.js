const {createLogger, transports, format} = require('winston')
const logger = createLogger({
    level: 'error',
    transports: [
        new transports.Console(),
        new transports.File({filename: 'error.log'})
    ]
})

module.exports = logger