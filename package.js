// Package metadata file for Meteor.js. Maintainer: @dandv.
'use strict';

var packageName = 'webix:webix';  // https://atmospherejs.com/webix/webix
var gitHubPath = 'webix-hub/tracker';  // https://github.com/webix-hub/tracker
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

/* All of the below is just to get the version number of the 3rd party library.
 * First we'll try to read it from package.json. This works when publishing or testing the package
 * but not when running an example app that uses a local copy of the package because the current 
 * directory will be that of the app, and it won't have package.json. Find the path of a file is hard:
 * http://stackoverflow.com/questions/27435797/how-do-i-obtain-the-path-of-a-file-in-a-meteor-package
 * Therefore, we'll fall back to GitHub, because Bower doesn't have a REST API, and Webix isn't on NPM -
 * http://forum.webix.com/discussion/4947/add-webix-to-npm-npmjs-com
 *
 * We also don't have the HTTP package at this stage, and if we use Package.* in the request() callback,
 * it will error that it must be run in a Fiber. So we'll use Node futures.
 */
var request = Npm.require('request');
var Future = Npm.require('fibers/future');

var fut = new Future;
var version;

if (!version) try {
  var packageJson = JSON.parse(Npm.require('fs').readFileSync('webix/bower.json'));
  version = packageJson.version;
} catch (e) {
  // if the file was not found, fall back to GitHub
  console.warn('Could not find webix/bower.json to read version number from; trying GitHub...');
  var url = 'https://api.github.com/repos/' + gitHubPath + '/tags';
  request.get({
    url: url,
    headers: {
      'User-Agent': 'request'  // GitHub requires it
    }
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var versions = JSON.parse(body).map(function (version) {
        return version['name'].replace(/^\D+/, '')  // trim leading non-digits from e.g. "v4.3.0"
      }).sort();  
      fut.return(versions[versions.length -1]);
    } else {
      fut.throw('Could not get version information from ' + url + ' either (rate limit reached or incorrect package name?):\n' + (response && response.statusCode || '') + (response && response.body || '') + (error || ''));
    }
  });

  version = fut.wait();
}

// Now that we finally have an accurate version number...
Package.describe({
  name: packageName,
  version: version,
  summary: 'Reactive Webix UI widgets bound to Meteor collections: table/grid, list etc.',
  git: 'https://github.com/dandv/meteor-webix',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.addFiles('webix/codebase/webix_debug.js', 'client');

  // the Meteor proxy connector
  api.addFiles('webix-meteor-data/codebase/meteor-data.js', 'client');
  api.export('webix', 'client');
});


Package.onTest(function(api) {
  api.use(packageName, 'client');  // yes, our package tests have to explicitly use our package - https://github.com/meteor/meteor/issues/1620
  api.use('webix:skin-flat', 'client');  // use a skin for the visual check
  api.use(['tinytest', 'http'], 'client');
  api.addFiles('tests/visual.js', 'client');
});
