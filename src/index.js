const { NodeosActionReader } = require("demux-eos");
const { BaseActionWatcher } = require("demux");
const v1Handlers = require("./handlers/v1");
const TaikaiActionHandler = require("./TaikaiActionHandler");
const config = require('../config/config');
const nodeHost = "http://35.195.1.81:8888";
const {log} = require('./services');
const contextBuilder = require('./initializers/ContextBuilder');

log.i(`Initializing Taikai Demux EOS ${config.version}`);

const ctx = contextBuilder();
const actionHandler = new TaikaiActionHandler(ctx,[v1Handlers]);
const actionReader = new NodeosActionReader(
    nodeHost,
    0
);

const actionWatcher = new BaseActionWatcher(
    actionReader,
    actionHandler,
    250,
);
log.i(`Start Watching on EOS Network`);
actionWatcher.watch()