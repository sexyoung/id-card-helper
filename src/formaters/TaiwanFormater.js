import Formater from './Formater';

const VALID_NUMBER = '1234567890';
const VALID_FIRST  = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
const VALID_GENDER = [
  'male',
  'female',
];
const ERROR = {
  LENGTH:  'InvalidLength',
  FIRST:   'InvalidFirstChar',
  SECOND:  'InvalidSecondChar',
  NUMBER:  'InvalidNumber',
  INVALID: 'InvalidID',
};

class TaiwanFormater extends Formater {
  check(idCode = '') {
    try {
      idCode = typeof idCode === 'string' ? `${idCode}`.trim() : idCode;
      super.check(idCode);

      if (isInvalidLength(idCode)) {
        /* is id's length not 10? */
        throw new Error(ERROR.LENGTH);
      } else if (isInvalidFirstChar(idCode)) {
        /* is firstChar invalid? */
        throw new Error(ERROR.FIRST);
      } else if (isInvalidFirstChar(idCode)) {
        /* is firstChar invalid? */
        throw new Error(ERROR.FIRST);
      } else if (isInvalidSecondChar(idCode)) {
        /* is firstChar invalid? */
        throw new Error(ERROR.SECOND);
      } else if (isInvalidNumber(idCode)) {
        /* is others invalid Number? */
        throw new Error(ERROR.NUMBER);
      } else if (isInvalidID(idCode)) {
        /* is correct ID? */
        throw new Error(ERROR.INVALID);
      }
      return true;
    } catch (e) {
      return e.message;
    }
  }

  /* return a ID or multiple ID */
  generate(options = {}) {
    /*
      area:   A~Z
      gender: male or female
      count: number
    */
    let checkSum;
    let generateID;
    let arrayID = [];
    do {
      checkSum = 0;
      generateID = '';
      const assignArea = options.area || VALID_FIRST[random(0, VALID_FIRST.length - 1)];
      const assignGender = (options.gender && VALID_GENDER.indexOf(options.gender) + 1) || random(1, 2);
      generateID = assignArea + assignGender;
      checkSum += getFirstCode(assignArea);
      checkSum += assignGender * 8;
      for (let i = 7; i > 0; i--) {
        const n = random(0, 9);
        checkSum += (i * n);
        generateID += `${n}`;
      }
      const lastNum = 10 - (checkSum % 10 || 10);
      generateID += lastNum;

      if (!options.count) break;

      options.count -= 1;
      arrayID = [...arrayID, generateID];
    } while (options.count);
    return arrayID.length ? arrayID : generateID;
  }
}

const random = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const getFirstCode = (firstChar) => {
  const firstCode = (`${VALID_FIRST.indexOf(firstChar) + 10}`).split('');
  return +firstCode[0] + (firstCode[1] * 9);
};

const isInvalidLength = (idCode) => {
  return idCode.length !== 10;
};

const isInvalidFirstChar = (idCode) => {
  return VALID_FIRST.indexOf(idCode.substring(0, 1)) === -1;
};

const isInvalidSecondChar = (idCode) => {
  const secondChar = idCode.substr(1, 1);
  return '12'.indexOf(secondChar) === -1;
};

const isInvalidNumber = (idCode) => {
  const otherChars = idCode.substr(2).split('');
  return otherChars.some(c => VALID_NUMBER.indexOf(c) === -1);
};

const isInvalidID = (idCode) => {
  const firstCode = getFirstCode(idCode.substring(0, 1));
  return idCode.substr(1, 8).split('').reduce(
    (sum, n, index) => sum + (n * (8 - index)),
    firstCode +
    +idCode.substr(9, 1)
  ) % 10 !== 0;
};

export default TaiwanFormater;
