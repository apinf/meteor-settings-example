Settings = new Mongo.Collection('settings');

Schema = new SimpleSchema({
  'example': {
    type: String,
    optional: true
  }
});

Settings.attachSchema(Schema);

Settings.allow({
  insert: function() {
    // get settings
    var dbSettingsCount = Settings.find().count();
    // if no settings exist
    if ( dbSettingsCount > 0 ) {
      // don't allow insert
      return false;
    } else {
      // insert
      return true;
    }
  },
  update: function() {
    return true;
  }

});
