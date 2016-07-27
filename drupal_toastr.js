"use strict";
(function() {
  // configure toastr
  toastr.options.closeButton = true;
  toastr.options.closeMethod = 'fadeOut';
  toastr.options.closeDuration = 300;
  toastr.options.closeEasing = 'swing';
  toastr.options.progressBar = true;
  toastr.options.timeOut = 30; // How long the toast will display without user interaction
  toastr.options.extendedTimeOut = 60; // How long the toast will display after a user hovers over it


  // this behavior shows all messages from session
  Drupal.behaviors.toastr = function() {

    var map = {
      'status': toastr.success,
      'error' : toastr.error,
      'warning': toastr.warning
    };

    var messages_store = Drupal.settings.messages;
    for(var type in messages_store) {
      var messages = messages_store[type];
      messages.forEach(function(message) {
        map[type].call(toastr, message);
      });
    }
  };

}(Drupal, toastr));
