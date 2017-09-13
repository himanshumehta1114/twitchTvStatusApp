		
		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
		var status;
		$.each(usernames,function(i){
			var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + usernames[i] + '?callback=?';
			$.getJSON(url,function(data){
				if(data.stream === null){
					status = "offline";
				}else if(data.stream === undefined){
					status = "offline";
				}else{
					console.log(data.stream.game);
					status = data.stream.game;
				}
			});

			url = 'https://wind-bow.gomix.me/twitch-api/channels/' + usernames[i] + '?callback=?';
			$.getJSON(url, function(data) {
				if(status !== "offline"){
  				$("#tablebody").append("<tr><td class='online'><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + status +"</a></td></tr>");
  			console.log(data.display_name + status);}else{
  				$("#tablebody").append("<tr><td class='offline'><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + status +"</a></td></tr>");
  			console.log(data.display_name + status);
  			}
  			});
  			
  			
  		});
		
