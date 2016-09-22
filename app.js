var express = require('express');
var path = require('path');
var app = express();
var parser = require('body-parser')

app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());
app.use('/static', express.static(path.join(__dirname , '/public')))


app.listen(process.env.PORT || 3001, function(){
	console.log('sidmalik.com running');
})

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  
   auth: {
       user: "-----",
       pass: "-----"
   }
});


app.post('/contact', function(req, res){
	var email = req.body

	smtpTransport.sendMail({ 
	   from: "sidmalik.com <siddharthmalik123@l@gmail.com>",
	   to: "Siddharth <sidmalik123@icloud.com>", 
	   subject: "New message on sidmalik.com", 
	   text: email.fname + " " + email.lname + " " + email.emailId + " said:" + email.message
	}, function(error, response){
		   if(error){
		   		console.log(error)
		       res.status(500).json({message : 'fail'})
		   }else{
		   		console.log(response)
		       res.json({message : 'success'})
		   }
		   
		   smtpTransport.close();
		})
})
