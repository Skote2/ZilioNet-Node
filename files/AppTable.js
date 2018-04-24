apps = [
	{
		"name": "Minecraft",
		"host": "David's Shitty 08 Laptop",
		"link": "Zilio.xyz",
		"port": "N/A"
	},
	{
		"name": "Minecraft",
		"host": "David's Shitty 08 Laptop",
		"link": "Minecraft.Zilio.xyz",
		"port": "25565"
	},
	{
		"name": "Terraria",
		"host": "David's Shitty 08 Laptop",
		"link": "Terraria.Zilio.xyz",
		"port": "7777"
	},
];

//Write JSON data into a table on the page
var buildTable = function() {
	appTable = document.getElementById("AppTable");
	var s = "<thead> <tr><th>Application</th> <th>Host</th> <th>Link</th> <th>Port</th> <th>Status</th></tr> </thead>";
	
	s += "<tbody>";
	for (var i = 0; i < apps.length; i++){
		s += "<tr id=\"AppTbRow" + i + "\"><td>" + apps[i].name + "</td>";
		s += "<td>" + apps[i].host + "</td>";
		s += "<td><a href=" + apps[i].link + ">" + apps[i].link + "</a></td>";
		s += "<td>" + apps[i].port + "</td>";
		s += "<td id=\"AppTbStatus" + i + "\">Down</td>";
		s += "</tr>";
	}
	s += "</tbody>";
	appTable.innerHTML = s;
}	

//This doesn't work because web security says what I want to do isn't kosher
var writeStatus = function() {
	for (var i = 0; i < apps.length; i++){
		elementId = "AppTbStatus" + i;
		var element = document.getElementById(elementId);
		var url = ""
		if (apps[i].link.indexOf("http") == -1)
			url += "http://";
		url += apps[i].link;
		if (apps[i].port != "N/A")
			url += ":" + apps[i].port;
		
		$.ajax(
			url,

			{statusCode: {
				404: function() { console.log("ajax failed: " + url); },
				200: function() { 
					console.log("holy shit it worked: " + url); 
					element.innerHTML = "Live";
				},
				301: function() {
					console.log("It worked: " + url);
					element.innerHTML = "Live";
				}
			}}
		);
	}
};

document.addEventListener("DOMContentLoaded", function(){
	buildTable();
});
