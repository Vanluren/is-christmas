'use strict';

var xmas = new Date('December 24');

module.exports = function () {
	var today = new Date();

	return (
		today.getMonth() === xmas.getMonth() &&
		today.getDate() === xmas.getDate()
	);
};
