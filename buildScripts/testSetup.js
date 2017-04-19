// This files isn't transpiled, so must use CommonJS and ES6

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// Ignore things that are being imported/required at the top
// Webpack understands import/require, but chai/mocha does not
// Add other extensions if needed
// It's saying, if you see this, just treat it like an empty function
require.extensions['.css'] = function() {};
