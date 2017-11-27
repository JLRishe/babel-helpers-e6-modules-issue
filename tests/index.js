const assert = require('assert');
const { a, b } = require('../built');

describe('a and b', () => {
	it('should have the right properties', () => {
		assert.equal(a.myProp, 1);
		assert.equal(b.myProp, 2);
	});
})