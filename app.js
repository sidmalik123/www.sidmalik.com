var express = require('express');
var path = require('path');
var app = express();


app.use('/static', express.static(path.join(__dirname , '/public')))

app.listen(3001, function(){
	console.log('sidmalik.com running on port 3001 :)');
})

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

