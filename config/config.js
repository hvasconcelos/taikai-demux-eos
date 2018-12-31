const configuration = {
    version: "0.1.0",
    logLevel: process.env.LOG_LEVEL || 'debug',
    logToFile: process.env.LOG_TO_FILE || 'false',
    logFileDir: process.env.LOG_FILE_DIR || 'logs',
    logDailyRotation: process.env.DAILY_ROTATION_FILE || 'false',
    silent: process.env.SILENT|| 'false',
};

module.exports = configuration;
