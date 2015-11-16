define(function(require) {

  var firebase = require('firebase');


 return {

    createNewUser : function(newEmail, newPassword) {
      var ref = new Firebase("https://steamy-meets.firebaseio.com/");
      ref.createUser({
        email    : newEmail,
        password : newPassword
      }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
      });
    }

   }

}); 