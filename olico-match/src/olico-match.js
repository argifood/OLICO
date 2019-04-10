/*

{
    "_id" : ObjectId,
    "_user" : ObjectId,
    "provide" : {
        "_item" : ObjectId,
        "description" : "chainsaw"
    },
    "consume" : [
        "truck",
        "bankNotes",
        "token"
    ],
    "location" : {
        "type" : "Point",
        "coordinates" : [
            0,
            0
        ]
    },
    "timeWindow" : {
        "provide" : {
            "from" : ISODate,
            "to" : ISODate
        },
        "consume" : {
            "from" : ISODate,
            "to" : ISODate
        }
    },
    "status" : {
      "_pointer": ObjectId,
      "flag": "open"
    }
}

*/

const OlicoMatch = function OlicoMatch(option){
  typeof option.validate === 'function' && (option.validate(option))
  this.provide = option.provide
  this.consume = option.consume
  this.location = option.location
  this.timeWindow = option.timeWindow
  this.status = option.status
  this.hook = option.hook
  this._user = option._user
}


const matchFactory = function matchFactory(option){
  const opt = option || {}
  !opt._user && (opt._user = option.lib.getUser(option))
  !opt.provide && (opt.provide = { '_item': new option.lib._ObjectId() })
  !opt.consume && (opt.consume = ['any'])
  !opt.location && (opt.location = new option.location())
  !opt.timeWindow && (opt.timeWindow = new option.timewindow())
  !opt.status && (opt.status = new option.status())
  !opt.hook && (opt.hook = [])
  return new OlicoMatch(opt)
}

module.exports = {
  matchFactory: matchFactory
};
