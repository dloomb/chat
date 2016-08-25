var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.post('/send', function(request, response) {
	response.status(201).json({
		status: 'success'
	});
});

app.get('/', function(request, response) {
	response.status(200).json({
		status: 'online'
	});
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});