var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')
var port = 8555;
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:8555'
};
var secret = require('./config.js');

var userCtrl = require('./controllers/userCtrl')

var profileCtrl = require('./controllers/profileCtrl')

console.log(secret);

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({ secret: secret.secret }))

app.post('/api/login', userCtrl.login)

app.get('/api/profile', profileCtrl.addFriends)



app.listen(port, function(){
	console.log('listening at port ' + port)
});