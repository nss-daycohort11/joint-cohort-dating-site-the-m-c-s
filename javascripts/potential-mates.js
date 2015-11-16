define(function(require) {
  var q = require("q");

  // This function should return a promise
  function() {
    $.ajax({
      url: steamy-meets.firebaseio.com/
    })
    .done(function(response) {
      // Resolve the promise
    }.
    fail(function(xhr, status, error) {
      // Reject the promise
    });
    }
  };
});