 /* Effects
   * Effect `run` functions are much like Updater `apply` functions, with the following differences:
   *   - `state` is not provided
   *   - functions are non-blocking, run asyncronously
   * These functions are not provided `state` because providing a way to access state outside of updaters would make them
   * non-deterministic. The purpose of Effect `run` functions is side-effects, which affect state out of the bounds of the
   * control of the `state` object.
   *
   * In this example, we're utilizing it very simply to output the current running token transfer totals to the console.
   */

module.exports = [
    require('./VotingOpenEffect'),
];