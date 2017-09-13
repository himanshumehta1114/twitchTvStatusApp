		
		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

		$.each(usernames,function(i){
			var url = 'https://wind-bow.gomix.me/twitch-api/channels/' + usernames[i] + '?callback=?';
			$.getJSON(url, function(data) {
  			console.log(data);});

  			
		});
		
