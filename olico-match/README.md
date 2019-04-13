#### olico-match module

cd into the `olico-match` directory and execute all the npm scripts from there

There are minimal unit and e2e test to build upon. To run e2e is required to have access to a mongodb instance locally or remotely. There many ways to do that, from docker to hosted service or even a local instance.

There some configuration to run with MongoDB Cloud if you have access there. More info about that could be found at `test/e2e/mongolab.js` and `test/e2e/index.js` for now.

to run unit
```
npm run test
```

to run local e2e you need a mongod binary on your path. There are two sessions needed, one for the database server and one to run the tests

on first terminal
```
npm run build
npm run clean
npm run mongoup
```

and on the second terminal

```
npm run test:e2e
```

to run remote e2e with mongolab you will need to have setup access and have the required details to export as environment variables before start the test

```
export MONGOLAB_CLUSTER_HASH="cluster0-abcde"
export MONGOLAB_PASSWD="XXXXXXXXXXXXXXsk"
export MONGOLAB_TEST="y"
export MONGOLAB_USER="readwriteusername"

npm run test:e2e
```

For now just creates an olico match document with fake children \_ids.

This is linux specific and probably will not run on other environments as is.
