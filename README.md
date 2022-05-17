# taikai-demux-eos
Taikai Demux EOS is an application that listen to actions that are finalized on a EOS node 
related to taikai smart contract.




# Quick Start 

1. Create an enviroment ```.env``` file

```
LOG_LEVEL=debug
SILENT=false
DAILY_ROTATION_FILE=false
LOG_TO_FILE=false
NODEOS_URL=http://35.195.1.81:8888
KEOSD_URL=http://35.195.1.81:8899
DEMUX_START_BLOCK=0
```

3. Run Daemon

```
npm run dev
```

## NPM Commands

* ```npm run dev```: Run the application in debug mode
