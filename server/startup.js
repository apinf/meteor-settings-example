Meteor.startup(function() {
  // Get the settings
  var settings = Meteor.settings;

  // check is settings are exist
  var dbSettings = Settings.find().fetch();

  if ( dbSettings.length === 0 ) {
    // insert Meteor.settings into Settings Collection
    Settings.insert(settings);
    // TODO: figure out how to update Settings collection from settings.json
  }

  // Updating Meteor.settings from Settings collection
  Meteor.call('updateMeteorSettings');

});
