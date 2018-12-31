  const updaters = require('./updaters');
  const effects = require('./effects');

  /*
   * Handler Versions
   * In actual applications, there may be a need to change Updater and Effects in tandem with blockchain actions (such as
   * updating a contract). Demux gives you this ability by segmenting named sets of Updaters and Effects through an
   * interface called `HandlerVersion`. By default, the first Handler Version used will be whichever one has the name
   * "v1". To change Handler Versions with an Updater, simply return the name of the Handler Version from the Updater's
   * `apply` function, and if a Handler Version exists with that name, the Updaters and Effects of that version will be
   * used from that point forward.
   *
   * Since this is a simple example, we will only be using a single Handler Version, "v1".
   */

  const handlerVersion = {
    versionName: "v1",
    updaters,
    effects,
  }

  module.exports = handlerVersion