console.log("This is the entry point for testing")

const olicoMatch = require('../index.js');
const assert = require('assert');

const noop = function noop(){
  if (arguments.length > 0) {
    console.log('    error ' + arguments[0]);
  } else {
    console.log('      pass ');
  }
  return
};

global.olicoMatch = olicoMatch;
global.assert = assert;

// no mocha so run our tester
if (!global.mochaison){

  const readWrapper = function readWrapper(){
    //console.log('readWrapper ', arguments);
    const header = arguments[0] && arguments[0][0] ? arguments[0][0].toString() : '';
    const test = arguments[0] && arguments[0][1] && typeof arguments[0][1] === 'function' ? arguments[0][1] : noop  ;
    return {
      header : header,
      test: test
    }
  }

  const describe = function describe(){

    const testSuite = readWrapper(arguments);

    setImmediate(function asyncDescribe(){
      console.log('>>> ', testSuite.header);
      testSuite.test()
    })

  }

  const it = function it(){
    console.log('    ', arguments[0]);
    return typeof arguments[1] === 'function' ? arguments[1](noop) : noop()
  };

  const run = function(toRun){
      global.describe = describe;
      global.it = it;
      global.done = noop;

      for (let t=0; t< toRun.length;t++){
        require('./'+toRun[t])
      }
  };

  const toRun = [
    'base.js'
  ];

  run(toRun)

}else{
  console.log('mocha is on!')
}
