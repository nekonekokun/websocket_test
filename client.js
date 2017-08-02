window.onload = function()
{

	var ws = new WebSocket('ws://localhost:8080/',['echo-protocol','soap', 'xmpp']);

	ws.onopen = function() {//WSê⁄ë±ämóß
	   ws.send('hello');
	 };

	// Log errors
	ws.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};

	// Log messages from the server
	ws.onmessage = function (e) {
	  console.log('Server: ' + e.data);
	  var txt = document.getElementById("txt");
	  txt.innerHTML += (e.data + "<br>");
	};
};