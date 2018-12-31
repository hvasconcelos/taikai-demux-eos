const config = require('../../config/config');
const process = require('process');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, label, printf } = format;
const path = require('path');

const myFormat = printf((info) => {
    return `${info.timestamp} [${info.label.toString().padStart(5, ' ')}] ${info.level}: ${
        info.message
    }`;
});

const LogLevelsEnum = {
    debug: 1,
    info: 2,
    warning: 3,
    error: 4,
};
Object.freeze(LogLevelsEnum);

/**
 *
 */
class LogService {
    /**
     *
     */
    constructor() {
        this.transports = [];
        if (config.logDailyRotation === 'true' && config.logToFile === 'true') {
            this.transports.push(
                new transports.DailyRotateFile({
                    filename: 'taikai-demux-%DATE%.log',
                    dirname: config.logFileDir,
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                })
            );
        } else if (config.logToFile === 'true') {
            const logPath = path.join(config.logFileDir, 'taikai-demux.log');
            this.transports.push(new transports.File({ filename: logPath }));
        }
        if (config.silent !== 'true') {
            this.transports.push(new transports.Console());
        }
        this.logger = createLogger({
            level: config.logLevel,
            format: combine(label({ label: process.pid }), timestamp(), myFormat),
            transports: this.transports,
        });
    }

    /**
     *
     * @param {*} level
     */
    setLevel(level) {
        this.transports.console.level = level;
        this.transports.file.level = level;
    }
    /**
     *
     * @param {*} message
     */
    d(message) {
        this.log(LogLevelsEnum.debug, message);
    }
    /**
     *
     * @param {*} message
     */
    i(message) {
        this.log(LogLevelsEnum.info, message);
    }
    /**
     *
     * @param {*} message
     */
    w(message) {
        this.log(LogLevelsEnum.warning, message);
    }
    /**
     *
     * @param {*} message
     */
    e(message) {
        this.log(LogLevelsEnum.error, message);
    }
    /**
     *
     * @param {*} level
     * @param {*} msg
     */
    log(level, msg) {
        switch (level) {
            case LogLevelsEnum.debug:
                this.logger.debug(msg);
                break;
            case LogLevelsEnum.info:
                this.logger.info(msg);
                break;
            case LogLevelsEnum.warning:
                this.logger.warn(msg);
                break;
            case LogLevelsEnum.error:
                this.logger.error(msg);
                break;
        }
    }
}
const log = new LogService();

module.exports = log;
