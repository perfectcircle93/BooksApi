const cutText = require('../utils/cutText.js');
const expect = require('chai').expect;


/*test 1*/ 
it('should return an error if "content" arg is not a string', () => {
  expect(cutText(undefined, 20)).to.equal('Error');
  expect(cutText(12, 20)).to.equal('Error');
  expect(cutText({}, 20)).to.equal('Error');
  expect(cutText([], 20)).to.equal('Error');
  expect(cutText(function() {}, 20)).to.equal('Error');
});

/*test 2*/
it('should return an error if "content" arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });

/*test 3*/
it('should return an error if "maxLength" arg is not a number', () => {
    expect(cutText('Lorem Ipsum', undefined)).to.equal('Error');
    expect(cutText('Lorem Ipsum', 'abc')).to.equal('Error');
    expect(cutText('Lorem Ipsum', {})).to.equal('Error');
    expect(cutText('Lorem Ipsum', [])).to.equal('Error');
    expect(cutText('Lorem Ipsum', function() {})).to.equal('Error');
  });