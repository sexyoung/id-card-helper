[![Build Status](https://travis-ci.org/sexyoung/id-card-helper.svg?branch=master)](https://travis-ci.org/sexyoung/id-card-helper) [![Code Climate](https://codeclimate.com/github/sexyoung/id-card-helper/badges/gpa.svg)](https://codeclimate.com/github/sexyoung/id-card-helper) [![codecov](https://codecov.io/gh/sexyoung/id-card-helper/branch/master/graph/badge.svg)](https://codecov.io/gh/sexyoung/id-card-helper) [![npm version](https://badge.fury.io/js/id-card-helper.svg)](https://badge.fury.io/js/id-card-helper) [![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/sexyoung/id-card-helper)](http://clayallsopp.github.io/readme-score?url=https://github.com/sexyoung/id-card-helper)

**id-card-helper** is a plugin for check ID or generate random ID. Currently it support Taiwan ID.

## Features
- Singopore
- Hong Kong

## Prepare
- yarn
- node

## Installing id-card-helper

```sh
yarn add id-card-helper
```

## Using id-card-helper
```js
import IDCardHelper from 'id-card-helper';

/* Create a id Checker */
const taiwanCard = new IDCardHelper('Taiwan');

/* Checking ID is valid */
taiwanCard.check('A123456789'); // => true

/* Generate random ID */
taiwanCard.generate(); // =>  'A123456789'

/* Generate Taipei Area ID */
taiwanCard.generate({ area: 'A' }); // =>  'A123456789'

/* Generate female ID */
taiwanCard.generate({ gender: 'female' }); // => 'X280697928To'

/* Generate 5 ID */
taiwanCard.generate({ count: 5 });
// => ['L189927266', 'Z156906740', 'D233324744', 'C121315321', 'R254875676']

/* Or you can combine parameters */
taiwanCard.generate({
  area: 'A',
  gender: 'female'
  count: 3,
}); // => ['A292888280', 'A276501402', 'A28447038']
```
