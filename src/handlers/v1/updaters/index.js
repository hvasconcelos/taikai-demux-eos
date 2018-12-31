/* Updaters
 * When the Action Handler receives new blocks, for each action in that block, we loop over all updaters and check if
 * the actionType matches. If it does, we run the corresponding updater's `apply` function. The order of the updaters
 * is significant, and each `apply` function is run synchronously in order to maintain determinism.
 *
 * All updater functions have the following parameters:
 *   - `state`:     This is the API provided by the ActionHandler to accumulate state. In this example, it's a simple
 *                  javascript object.
 *
 *   - `payload`:   This object contains all relevant information associated with the current action. Its contents
 *                  are completely determined by the ActionReader implementation. Since we're using demux-eos in this
 *                  example, you can see the `EosPayload` type here:
 *                  https://github.com/EOSIO/demux-js-eos/blob/develop/src/interfaces.ts
 *
 *   - `blockInfo`: Object containing information about the current block. See `BlockInfo` type here:
 *                  https://github.com/EOSIO/demux-js/blob/develop/src/interfaces.ts
 *
 *   - `context`:   This object's purpose is to provide access to temporary data between different Updaters' `apply`
 *                  (and Effects' `run`) functions of the same block. A new `context` object is created by the
 *                  ActionHandler every block. It may be pre-loaded with information by the ActionHandler, and/or may
 *                  be modified by `apply` functions themselves. This is separate from `state` because not all relevant
 *                  data may need to be permanently stored. In this way, it can be used as a fast cache (instead of
 *                  writing/reading/deleting temporary data using `state`), and is also useful for passing accumulated
 *                  or processed data to the Effects' `run` functions in a way that is safe from race conditions.
 *
 * In this example, we're watching the "eosio.token::transfer" action type and accumulating a running total using the
 * provided `state` object. Refer to the ObjectActionHandler implementation for `state`:
 * https://github.com/EOSIO/demux-js/blob/develop/examples/eos-transfers/ObjectActionHandler.js
*/

module.exports = [
    require('./VotingOpenUpdate'),
];