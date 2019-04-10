const OlicoLocation = function OlicoLocation(option){
  typeof option.validate === 'function' && (option.validate(option))
  this.type = option.type
  this.coordinates = option.coordinates
  this.contact = option.contact // what could be the contact?
  this.hook = option.hook
}

const locationFactory = function locationFactoryOlico(option){
  const locationOpt = option || {}
  !locationOpt.type && (locationOpt.type = 'Point')
  !locationOpt.coordinates && (locationOpt.coordinates = [ 0,0 ])
  !locationOpt.contact && (locationOpt.contact = [])
  !locationOpt.hook && (locationOpt.hook = [])
  return new OlicoLocation(locationOpt)
}

module.exports = {
  locationFactory: locationFactory
};
