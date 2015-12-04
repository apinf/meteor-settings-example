Template.settings.helpers({
  // Check if something is already in collection
  'dbSettingsExist': function() {
    if ( Settings.findOne() ) {
      return true;
    } else {
      return false;
    }
  },
  'settingsDoc': function() {
    if ( Settings.findOne() ) {
      return Settings.findOne();
    }
  }
});

AutoForm.hooks({
  updateSettings: {
    onSuccess: function (document) {
      // Call method to update Meteor.settings
      Meteor.call('updateMeteorSettings');
    }
  },
  insertSettings: {
    onSuccess: function (document) {
      // Call method to update Meteor.settings
      Meteor.call('updateMeteorSettings');
    }
  }
});
