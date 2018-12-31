const { NodeosActionReader } = require("demux-eos");
const { BaseActionWatcher } = require("demux");
const v1Handlers = require("./handlers/v1");
const TaikaiActionHandler = require("./TaikaiActionHandler");
require('dotenv').config({path: '.env'});
const config = require('../config/config');
const {log} = require('./services');
const contextBuilder = require('./initializers/ContextBuilder');


function printConfig() {
    const blackListParams = [       
    ];
    for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
            if (!blackListParams.includes(key)) log.i(`Config ${key} = ${config[key]}`);
        }
    }
}

module.exports = printConfig;


log.i(`Initializing Taikai Demux EOS ${config.version}`);
printConfig();
const ctx = contextBuilder();
const actionHandler = new TaikaiActionHandler(ctx,[v1Handlers]);
const actionReader = new NodeosActionReader(
    config.eosNodeURL,
    config.demuxStartBlock,
);

const actionWatcher = new BaseActionWatcher(
    actionReader,
    actionHandler,
    config.eosPollIntervalMs,
);
log.i(`Start Watching on EOS Network`);
actionWatcher.watch()