
const OlicoStatus = function OlicoStatus(option){
  typeof option.validate === 'function' && (option.validate(option))
  this._pointer = option._pointer
  this.flag = option.flag
  this.contact = option.contact // what could be the contact?
  this.hook = option.hook
}

const statusFactory = function statusFactoryOlico(option){
  const opt = option || {}
  !opt._pointer && (opt._pointer = new option.lib._ObjectId())
  !opt.flag && (opt.flag = 'open')
  !opt.contact && (opt.contact = [])
  !opt.hook && (opt.hook = [])
  return new OlicoStatus(opt)
}

module.exports = {
  statusFactory: statusFactory
}
