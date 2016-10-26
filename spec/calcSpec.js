describe("Calculator", function() {
	var add = require('../src/calc.js');

	it("Should add 2 and 3", function() {
		expect(add(2,3)).toBe(5);
	});
});
