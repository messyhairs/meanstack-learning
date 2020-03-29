var http = require("https");

var options = {
	"method": "GET",
	"hostname": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"port": null,
	"path": "/v1/stats?country=India",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "041e67e5camshfb9550d5a96a95bp1ca6d3jsn55ec88320cef"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();