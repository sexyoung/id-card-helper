import { expect } from 'chai';
import ID from '../src';

const idChecker = new ID('Taiwan');

describe('check Taiwan ID', () => {
  it('should Length be 10', () => {
    expect(idChecker.check('A')).to.equal('InvalidLength');
    expect(idChecker.check('A1')).to.equal('InvalidLength');
    expect(idChecker.check('A123456789')).to.be.true;
  });

  it('should Length be 10', () => {
    expect(idChecker.check(' A')).to.equal('InvalidLength');
    expect(idChecker.check('A1')).to.equal('InvalidLength');
    expect(idChecker.check('A123456789')).to.be.true;
  });

  it('should first char be A~Z', () => {
    expect(idChecker.check('1123456789')).to.equal('InvalidFirstChar');
    expect(idChecker.check('%123456789')).to.equal('InvalidFirstChar');
    expect(idChecker.check('-123456789')).to.equal('InvalidFirstChar');
    expect(idChecker.check('a123456789')).to.equal('InvalidFirstChar');
    expect(idChecker.check('A123456789')).to.be.true;
  });

  it('should second char be 1 or 2', () => {
    expect(idChecker.check('AA23456789')).to.equal('InvalidSecondChar');
    expect(idChecker.check('A023456789')).to.equal('InvalidSecondChar');
    expect(idChecker.check('A323456789')).to.equal('InvalidSecondChar');
    expect(idChecker.check('A123456789')).to.be.true;
    expect(idChecker.check('B123456780')).to.be.true;
  });

  it('should other char be 0 ~ 9', () => {
    expect(idChecker.check('A1abcdefgh')).to.equal('InvalidNumber');
    expect(idChecker.check('A101010a01')).to.equal('InvalidNumber');
    expect(idChecker.check('A123456789')).to.be.true;
  });

  it('should valid ID', () => {
    expect(idChecker.check('A123456781')).to.equal('InvalidID');
    expect(idChecker.check('A123456782')).to.equal('InvalidID');
    expect(idChecker.check('A123456789')).to.be.true;
  });
});

describe('generate Taiwan ID', () => {
  it('generate a ID', () => {
    const randomID  = idChecker.generate();
    const areaIDA   = idChecker.generate({ area: 'A' });
    const areaIDZ   = idChecker.generate({ area: 'Z' });
    const maleID    = idChecker.generate({ gender: 'male' });
    const femaleID  = idChecker.generate({ gender: 'female' });
    const femaleFID = idChecker.generate({ area: 'F', gender: 'female' });
    expect(idChecker.check(randomID)).to.be.true;
    expect(areaIDA.substr(0, 1)).to.equal('A');
    expect(areaIDZ.substr(0, 1)).to.equal('Z');
    expect(maleID.substr(1, 1)).to.equal('1');
    expect(femaleID.substr(1, 1)).to.equal('2');
    expect(femaleFID.substr(0, 1)).to.equal('F');
    expect(femaleFID.substr(1, 1)).to.equal('2');
  });

  it('generate many ID', () => {
    const IDs = idChecker.generate({ count: 10 });
    const IDsC = idChecker.generate({ count: 3, area: 'C' });
    const IDsW = idChecker.generate({ count: 5, gender: 'female' });
    const IDsDM = idChecker.generate({ count: 7, area: 'D', gender: 'male' });
    expect(IDs.length).to.equal(10);
    expect(IDs.every(id => idChecker.check(id))).to.be.true;
    expect(IDsC.every(id => id.substr(0, 1) === 'C')).to.be.true;
    expect(IDsW.every(id => id.substr(1, 1) === '2')).to.be.true;
    expect(IDsDM.every(id => id.substr(0, 1) === 'D' && id.substr(1, 1) === '1')).to.be.true;
  });
});
