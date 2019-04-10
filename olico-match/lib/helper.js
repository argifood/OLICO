module.exports = {
  packMatchOption: function(option){
    return {
      location: option.locationFactory(),
      timeWindow: option.timewindowFactory(),
      status: option.statusFactory(option),
      lib: {
        getUser: option.lib.getUser,
        _ObjectId: option.lib._ObjectId
      }
    }
  }
}
