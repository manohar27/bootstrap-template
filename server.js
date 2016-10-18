require('babel-register');
var express = require('express');
var getReactMarkUp = require('./app.js');
app = express();
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static('dist'));
var reactMarkUp = getReactMarkUp;
console.log(reactMarkUp.default);
app.get('',function(req,res){
  res.render('index',{ReactContainer: reactMarkUp.default});
});

var server = app.listen(3000, function(){
  var serverAddress = server.address();
  console.log("express server started @ "+serverAddress.port);
});
