[![Build Status](https://travis-ci.org/sexyoung/id.js.svg?branch=master)](https://travis-ci.org/sexyoung/id.js) [![Code Climate](https://codeclimate.com/github/sexyoung/id.js/badges/gpa.svg)](https://codeclimate.com/github/sexyoung/id.js) [![codecov](https://codecov.io/gh/sexyoung/id.js/branch/master/graph/badge.svg)](https://codecov.io/gh/sexyoung/id.js) [![npm version](https://badge.fury.io/js/id.js.svg)](https://badge.fury.io/js/id.js) [![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/sexyoung/id.js)](http://clayallsopp.github.io/readme-score?url=https://github.com/sexyoung/id.js)

** id.js ** is a plugin for check ID or generate random ID. Currently it support Taiwan ID.

## Features
- Singopore
- Hong Kong

## Prepare
- yarn
- node

## Installing id.js

```sh
yarn add id.js
```

## Using id.js
```js
import ID from 'id.js';

/* Create a id Checker */
const idChecker = new ID('Taiwan');

/* Checking ID is valid */
idChecker.check('A123456789'); // => true

/* Generate random ID */
idChecker.generate(); // =>  'A123456789'

/* Generate Taipei Area ID */
idChecker.generate({ area: 'A' }); // =>  'A123456789'

/* Generate female ID */
idChecker.generate({ gender: 'female' }); // => 'X280697928To'

/* Generate 5 ID */
idChecker.generate({ count: 5 });
// => ['L189927266', 'Z156906740', 'D233324744', 'C121315321', 'R254875676']

/* Or you can combine parameters */
idChecker.generate({
  area: 'A',
  gender: 'female'
  count: 3,
}); // => ['A292888280', 'A276501402', 'A28447038']
```
