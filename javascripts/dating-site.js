require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase' : '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

require(
  ["dependencies", "authentication"], 
  function(_$_, auth) {

    var ref = new Firebase("https://steamy-meets.firebaseio.com/");

    $("#signUpButton").on("click", function() {
        var newEmail = $('#signUpEmail').val();
        var newPassword = $('#signUpPassword').val();
        auth.createNewUser(newEmail, newPassword);
          console.log("tried to create user");

      ref.onAuth(function(authData) {
        if (authData) {
        // save the user's profile into the database so we can list users,
        // use them in Security and Firebase Rules, and show profiles
          ref.child("users").child(authData.uid).set({
            provider: authData.provider,
            name: getName(authData)
          });
        }
      });
// find a suitable name based on the meta info given by each provider
      function getName(authData) {
             return authData.password.email.replace(/@.*/, '');
        }

      });

    $("#logInButton").on("click", function(){

        var signInEmail = $('#signInEmail').val();
        var signInPassword = $('#signInPassword').val();
      console.log(signInEmail, signInPassword);
            function authHandler(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
            }
      }

      ref.authWithPassword({
        email    : signInEmail,
        password : signInPassword
      }, authHandler);
    });  

    $("#logOutButton").on("click", function() {
      console.log("logged out");
      ref.unauth();
    });


    /*
      You can choose to use the REST methods to interact with
      Firebase, or you can use the Firebase API with event
      listeners. It's completely up to each team.

      If you choose the former, I created two boilerplate modules
      named `potential-mates.js`, and `add-favorite.js`.
     */
    
  }
);
