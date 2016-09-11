var express = require('express');
var path = require('path');
var app = express();


app.use('/static', express.static(path.join(__dirname , '/public')))


app.listen(process.env.PORT || 3001, function(){
	console.log('sidmalik.com running');
})

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

