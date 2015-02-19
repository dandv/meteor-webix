'use strict';

var packageName = 'webix:webix';  // https://atmospherejs.com/webix/webix
var bowerJson;
try {
  bowerJson = JSON.parse(Npm.require('fs').readFileSync('webix/bower.json'));
} catch (e) {
  // the file won't be found when running the example with the local copy of the package
  bowerJson = { version: '2.2.3' };
}

Package.describe({
  name: packageName,
  version: bowerJson.version + '_1',
  summary: 'Reactive Webix UI widgets bound to Meteor collections: table, tree, treetable, list etc.',
  git: 'https://github.com/dandv/meteor-webix',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.addFiles(['webix/codebase/webix_debug.js', 'webix/codebase/webix.css'], 'client');

  // add the Webix font files
  ['PTS-webfont', 'PTS-bold'].forEach(function (font) {
    api.addFiles([
      // we bundle all font files, but the client will request only one of them via the CSS @font-face rule
      'webix/codebase/fonts/' + font + '.eot',  // IE8 or older only understands EOT. IE9+ will read it too because it loads the first occurrence of `src`
      'webix/codebase/fonts/' + font + '.ttf',  // Android Browsers 4.1, 4.3 - http://caniuse.com/#feat=ttf
      'webix/codebase/fonts/' + font + '.woff'  // Most modern browsers
    ], 'client');
  });
  api.imply('fortawesome:fontawesome@4.2.0');  // Webix ships with its own Font Awesome but Atmosphere already has an official package

  // the Meteor proxy connector
  api.addFiles('webix-meteor-data/codebase/meteor-data.js', 'client');
  api.export('webix', 'client');
});

Package.onTest(function(api) {
  api.use(packageName, 'client');  // yes, our package tests have to explicitly use our package - https://github.com/meteor/meteor/issues/1620
  api.use(['tinytest', 'http'], 'client');
  api.addFiles(['tests/fonts.js', 'tests/visual.js'], 'client');
});
