define(["q", "jquery"], function(Q, $) {
  return function() {
    var deferred = Q.defer();

    $.ajax({ url: "https://steamy-meets.firebaseio.com/" })
      // XHR was successful
      .done(function(json_data) {
        // Now we can resolve the promise and send the data
        deferred.resolve(json_data);
        console.log("user JSON_data", json_data);
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // Since the call failed, we have to reject the promise
        deferred.reject(error);
        console.log("error", error);
      });

    return deferred.promise;
  }; //--end return  
}); //--end define