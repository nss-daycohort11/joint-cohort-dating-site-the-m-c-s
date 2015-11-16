define(function(require) {

  var firebase = require('firebase');


 return {

    createUser : function() {
      var ref = new Firebase("https://steamy-meets.firebaseio.com/");
      ref.createUser({
        email    : "bobtony@firebase.com",
        password : "correcthorsebatterystaple"
      }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
      });
    }

    loginUser : function() {

      function authHandler(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      }

      // Or with an email/password combination
      ref.authWithPassword({
        email    : 'bobtony@firebase.com',
        password : 'correcthorsebatterystaple'
      }, authHandler);


    }

   }

}); 