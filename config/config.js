const configuration = {
    version: "0.1.0",
    logLevel: process.env.LOG_LEVEL || 'debug',
    logToFile: process.env.LOG_TO_FILE || 'false',
    logFileDir: process.env.LOG_FILE_DIR || 'logs',
    logDailyRotation: process.env.DAILY_ROTATION_FILE || 'false',
    silent: process.env.SILENT|| 'false',
    eosNodeURL: process.env.NODEOS_URL || "http://35.195.1.81:8888",
    keosdNodeURL: process.env.KEOSD_URL || "http://35.195.1.81:8899",
    demuxStartBlock: parseInt(process.env.DEMUX_START_BLOCK || "0"),
    eosPollIntervalMs: 250,
};

module.exports = configuration;
