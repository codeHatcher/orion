Package.describe({
  name: 'codehatcher:orionjs',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Fix user creation issue in orionjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/codeHatcher/orion',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.mainModule('orionjs.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('codehatcher:orionjs');
  api.mainModule('orionjs-tests.js');
});
