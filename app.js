		
		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

		$.each(usernames,function(i){
			var url = 'https://wind-bow.gomix.me/twitch-api/channels/' + usernames[i] + '?callback=?';
			$.getJSON(url, function(data) {
  				$("#tablebody").append("<tr><td><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td></tr>");
  			console.log(data);});

  		});
		
