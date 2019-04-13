console.log("\\/ This is the entry point for testing")

const olicoMatch = require('../index.js');
const assert = require('assert');

global.olicoMatch = olicoMatch;
global.assert = assert;

global.sstr = 'string'
global.fstr = 'function'
global.ostr = 'object'


const mongolabConnector = function mongolabConnector(){
  const MongoClient = olicoMatch.lib.mongoclient;

  if (process.env.MONGOLAB_PASSWD && process.env.MONGOLAB_CLUSTER_HASH && process.env.MONGOLAB_USER) {
    const urltemplate = require('./e2e/mongolab.js').url
    const password = encodeURIComponent(process.env.MONGOLAB_PASSWD)
    const clusterHash = process.env.MONGOLAB_CLUSTER_HASH
    const user = process.env.MONGOLAB_USER
    const uri = urltemplate.replace('<user>', user).replace('<password>', password).replace('<mongolabClusterHash>', clusterHash)
    global.mongolabclient = new MongoClient(uri, { useNewUrlParser: true });
  }
}

global.mongodburl = process.env.MONGODB_URL
if (process.env.MONGOLAB_TEST) {
  mongolabConnector()
} else {
  global.mongolabclient = null
}
