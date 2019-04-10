// Check if udscp exists
describe('Test olico match domain objects', function(){

  const sstr = 'string'
  const fstr = 'function'
  const ostr = 'object'

  it('Test if all model factories exist as functions', function(done){

    assert.ok(typeof olicoMatch.matchFactory === fstr)
    assert.ok(typeof olicoMatch.locationFactory === fstr)
    assert.ok(typeof olicoMatch.statusFactory === fstr)
    assert.ok(typeof olicoMatch.timewindowFactory === fstr)
    return done()
  })

  it('Test olicoMatch object created with the helper', function(done){
    const opt = olicoMatch.lib.helper.packMatchOption(olicoMatch)
    const oom = olicoMatch.matchFactory(opt)

    assert.ok(typeof oom.provide._item === ostr)
    assert.ok(oom.consume[0] === 'any')
    assert.ok(typeof oom.timeWindow.provide === ostr)
    assert.ok(typeof oom.timeWindow.consume === ostr)
    assert.ok(typeof oom.status._pointer === ostr)
    assert.ok(oom._user === process.env.USER)
    return done()
  })

})
