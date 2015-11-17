define(function(require) {

  var firebase = require('firebase');


 return {

    update : function() {
      var ref = new Firebase("https://steamy-meets.firebaseio.com/");
      var authData = ref.getAuth();

      ref.child("users").child(authData.uid).update({
            "displayName" : $("#displayName").val(),
            "age": $("#age").val(),
            "ethnicity": $("#ethnicity").val(),
            "ProfileURL": $("#profileURL").val(),
            "personalStatement":$("#personalStatement").val(),
            "alcoholic": $('input[name=alcoholic]:checked').val(),
            "dairy": $('input[name=dairy]:checked').val(),
            "gluten": $('input[name=gluten]:checked').val(),
            "spicy": $('input[name=spicy]:checked').val(),
            "vegetarian": $('input[name=vegetarian]:checked').val(),
            "vegan": $('input[name=vegan]:checked').val(),
            "food": $('input[name=food]:checked').val()
          });

    }



  };


}); 