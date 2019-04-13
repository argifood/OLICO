describe('Test olico match lib', function(){

  it('Test first level of library properties and types', function(done){
    assert.ok(typeof olicoMatch.lib.mongodbref.createDB === fstr)
    assert.ok(typeof olicoMatch.lib._ObjectId === fstr)
    assert.ok(typeof olicoMatch.lib.mongoclient === fstr)
    assert.ok(typeof olicoMatch.lib.getUser === fstr)
    assert.ok(typeof olicoMatch.lib.helper.packMatchOption === fstr)
    return done()
  })

})
