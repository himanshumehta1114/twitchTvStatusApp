		
		var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
		var base = 'https://wind-bow.glitch.me/twitch-api/';
		var type = 'channels';
		var url = function(base,type,user){
				return base + type + "/" + user + "?callback=?";
		};
		
		$.each(usernames,function(i){
			getUrl = url(base,type,usernames[i]);
			$.getJSON(getUrl,function(data){
				console.log(data);
			
			streamUrl = url(base,'streams',usernames[i]);
			$.getJSON(streamUrl,function(streamData){
				if(streamData.stream === null){
					status = "offline";
					$("#tablebody").append("<tr><td class='offline'><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + status +"</a></td></tr>");
				}else if(streamData.stream === undefined){
					status = "offline"
					$("#tablebody").append("<tr><td class='offline'><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + status +"</a></td></tr>");
				}else{
					status = streamData.stream.game;
					$("#tablebody").append("<tr><td class='online'><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + status +"</a></td></tr>");
				}
				});
			});
  		});
		
