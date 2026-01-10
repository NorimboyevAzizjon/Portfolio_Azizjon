require('@testing-library/jest-dom');

// Polyfill for TextEncoder in Node.js test environment
if (typeof global.TextEncoder === 'undefined') {
	const { TextEncoder, TextDecoder } = require('util');
	global.TextEncoder = TextEncoder;
	global.TextDecoder = TextDecoder;
}
