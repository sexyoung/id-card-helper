[![Build Status](https://travis-ci.org/sexyoung/id.svg?branch=master)](https://travis-ci.org/sexyoung/id) [![Code Climate](https://codeclimate.com/github/sexyoung/id/badges/gpa.svg)](https://codeclimate.com/github/sexyoung/id) [![codecov](https://codecov.io/gh/sexyoung/id/branch/master/graph/badge.svg)](https://codecov.io/gh/sexyoung/id) [![npm version](https://badge.fury.io/js/id.js.svg)](https://badge.fury.io/js/id.js) [![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/sexyoung/id.js)](http://clayallsopp.github.io/readme-score?url=https://github.com/sexyoung/id.js)

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
import id from 'id.js';

/* Create a id Checker */
const idChecker = new ID('Taiwan');

/* Checking ID is valid */
idChecker.check('A123456789');

/* Generate random ID */
idChecker.generate();

/* Generate Taipei Area ID */
idChecker.generate({ area: 'A' });

/* Generate female ID */
idChecker.generate({ gender: 'female' });

/* Generate Taipei Area ID */
idChecker.generate({ area: 'A' });

/* Generate 5 ID */
idChecker.generate({ count: 5 });

/* Or you can combine parameters */
idChecker.generate({
  area: 'A',
  gender: 'female'
  count: 3,
}); // => ['A123456789', 'A123456789', 'A123456789']
```
