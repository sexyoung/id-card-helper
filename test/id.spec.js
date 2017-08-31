import { expect } from 'chai';
import ID from '../src';

const idChecker = new ID('Taiwan');

describe('check have function', () => {
  it('should check function', () => {
    expect(idChecker.check).to.be.a('function');
  });

  it('should generate function', () => {
    expect(idChecker.generate).to.be.a('function');
  });

  it('should can\'t empty', () => {
    expect(idChecker.check()).to.equal('NotAllowedEmpty');
    expect(idChecker.check('')).to.equal('NotAllowedEmpty');
    expect(idChecker.check({})).to.equal('NotAllowedEmpty');
    expect(idChecker.check(null)).to.equal('NotAllowedEmpty');
    expect(idChecker.check(undefined)).to.equal('NotAllowedEmpty');
  });
});
