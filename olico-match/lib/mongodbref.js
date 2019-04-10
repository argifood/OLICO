const mx = module.exports = {};
const assert = require('assert');

function DBRef(option){

  const _dbref = [];
  option.client.connect(option.url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    _dbref.push(client)
  });

  this.expose = function exposeDBRef(option){
    return _dbref[0].db(option.db).command(option.command)
  };

  this.pipeline = function pipelineDBRef(option){
    return _dbref[0].db(option.db).collection(option.collection).aggregate(option.stages)
  }

};

DBRef.prototype.find = function findDBRef(option){
  return this.expose({db: option.db, command: {find: option.collection, filter: option.filter}})
};

DBRef.prototype.insert = function insertDBRef(option){
  return this.expose({db: option.db, command: {insert: option.collection, documents: option.documents}})
};

DBRef.prototype.aggregate = function aggregateDBRef(option){
  return this.expose({db: option.db, command: {aggregate: option.collection, pipeline: option.pipeline, cursor: option.cursor ||  {}}})
};

DBRef.prototype.next = function nextDBRef(option){
  // {
  //   action: { endpoint: '/import', method: 'POST' },
  //   payload: { twid: 'xelinorg' }
  // }

  const collection = option.action.endpoint.replace('/','');
  const method = option.action.method;
  const payload = option.payload;
  console.log('DBRef.prototype.next', collection, method, payload);

  const _dbref = this;
  const baseQ = {db: option.db, collection: collection}
  return new Promise(function(resolve, reject){

    if (method === 'GET'){
      baseQ.filter = payload
      return _dbref.find(baseQ).then(
        function dbGetSuccess(result){
          return resolve(result)
        },
        function dbGetFailure(err){
          return reject(err)
        }
      )
    }

    if (method === 'POST'){
      baseQ.documents = [payload]
      return _dbref.insert(baseQ).then(
        function dbPostSuccess(result){
          return resolve(result)
        },
        function dbPostFailure(err){
          return reject(err)
        }
      )
    }
  })
};

function createDB(option){
  const createOpt = option || {};
  !createOpt.url && (createOpt.url='mongodb://localhost:27017');
  !createOpt.client && (new Error('No database client provided.. breaking'));

  return new DBRef(createOpt)
};


mx.createDB = createDB
