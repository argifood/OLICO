describe('Test olico match read write', function(){

  const dbname = 'olico',
  collectionname = 'match',
  dburl = mongodburl || 'mongodb://localhost:27017';

  let dbinstance ,
    _dbref,
    dbinsert,
    dbfind;

  before(function(done) {
    // if there is a mongolab client connect and assing to dbinstance
    if (!mongolabclient){
      olicoMatch.lib.mongoclient.connect(dburl, { useNewUrlParser: true }, function(error, clientInstance){
        if (error) {
          return done(error)
        }
        dbinstance = clientInstance
        return done()
      })
    } else {
      mongolabclient.connect(function(error, dbclient){
        if (error) {
          return done(error)
        }
        dbinstance = dbclient
        return done()
      })
    }
  });

  beforeEach(function(done) {
    _dbref = olicoMatch.lib.mongodbref.createDB({client: dbinstance})
    assert.equal(typeof _dbref, ostr);
    dbinsert = function dbinsert(docs) {
      return _dbref.expose({db: dbname, command: {insert: collectionname, documents: docs}})
    }
    dbfind = function dbfind(filter) {
      return _dbref.expose({db: dbname, command: {find: collectionname, filter: filter}})
    }
    return done()
  });

  it('Test mongodb conectivity', function(done){

    const opt = olicoMatch.lib.helper.packMatchOption(olicoMatch)
    const oom = olicoMatch.matchFactory(opt)
    dbinsert([oom]).then(
      function(res){
        assert.equal(res.ok, 1)
        return done()
      },
      function(error){
        return done(error)
      }
    )


  })

  it('Test set and get olico db match collection item', function(done){
    dbfind({}).then(
      function(res){
        assert.equal(typeof res, ostr)
        return done()
      },
      function(error){
        return done(error)
      }
    )
  })
})
