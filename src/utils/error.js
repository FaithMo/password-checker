const { winston, createLogger, transports, format } = require('winston')
const logger = createLogger({
    level: 'error',
    format: format.json(),
    transports: [
        new transports.Console({ level: "error" }),
        new transports.File({ filename: './src/logs/error.log' })
    ],
    exceptionHandlers: [
        new transports.File({ filename: "./src/logs/error.log" })
    ],
})

module.exports = logger
