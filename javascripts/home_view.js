define(["jquery", "user_data_promise", "hbs"], function($, userData, Handlebars) {
		userData()
		.then(function(data) {
			console.log("userData", data);
			var randomCandidate = _.sample(data.users, 3);
			require(['hbs!../templates/candidates'], function (candidateTemplate) {
        $("#mini-profile-view-row1").append(candidateTemplate({users: randomCandidate})); 	
      });
		});
});