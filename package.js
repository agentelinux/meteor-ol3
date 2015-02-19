Package.describe({
  summary: "Wrapper for OpenLayers 3",
  version: "0.2.0",
  name: "aglx:ol3",
  git: "https://github.com/agentelinux/meteor-ol3"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.add_files("ol3.fetch.json", "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aglx:ol3');
  api.addFiles('tests.js');
});
