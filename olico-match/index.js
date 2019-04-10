const src = require('./src')
module.exports = {
  version: require('./package.json').version,
  matchFactory: src['olico-match'].matchFactory,
  locationFactory: src['olico-location'].locationFactory,
  statusFactory: src['olico-status'].statusFactory,
  timewindowFactory: src['olico-timewindow'].timewindowFactory,
  lib: require('./lib')
}
