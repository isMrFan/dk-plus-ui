'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dkshadow = require('./dkshadow');
var icon = require('./icon');
var dkbutton = require('./dkbutton');



Object.keys(dkshadow).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return dkshadow[k]; }
	});
});
Object.keys(icon).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return icon[k]; }
	});
});
Object.keys(dkbutton).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return dkbutton[k]; }
	});
});
