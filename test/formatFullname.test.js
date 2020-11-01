const formatFullname = require('../utils/formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullName" arg is empty', () => {
      expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
      });
    
      it('should return an error if "fullName" contains of one or more than two words', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('John Doe Go')).to.equal('Error');
      });
    
      it('should format correctly the name', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('jOHN dOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
      });
});  