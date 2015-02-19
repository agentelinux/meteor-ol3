Package.describe({
  name: 'aglx:ol3',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Wrapper for OpenLayers 3",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/agentelinux/meteor-ol3",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.add_files("ol3.fetch.json", "client");
  api.export(['ol'], "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aglx:ol3');
  api.addFiles('tests.js');
});
