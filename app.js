var express = require('express');
var path = require('path');
var app = express();


app.use('/static', express.static(path.join(__dirname , '/public')))

var port = process.env.PORT || 3001;

app.listen(port, function(){
	console.log('sidmalik.com running on port '+port+' :)');
})

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

