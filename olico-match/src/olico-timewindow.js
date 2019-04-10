
const OlicoTimewindow = function OlicoTimeWindow(option){
  typeof option.validate === 'function' && (option.validate(option))
  this.provide = option.provide
  this.consume = option.consume
  this.hook = option.hook
}

const timewindowFactory = function timewindowFactoryOlico(option){
  const opt = option || {}
  !opt.provide && (opt.provide = {from: new Date(), to: new Date()})
  !opt.consume && (opt.consume = {from: new Date(), to: new Date()})
  !opt.hook && (opt.hook = [])
  return new OlicoTimewindow(opt)
}

module.exports = {
  timewindowFactory: timewindowFactory
};
