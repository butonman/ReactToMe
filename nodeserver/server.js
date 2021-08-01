var express = require('express');
const bodyParser = require("body-parser");
var app = express();
const fetch = require('node-fetch');
const path = require('path');

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Enable static CSS styles
//static folder
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/public/views')))
app.use(express.static(path.join(__dirname, '/public/styles')))


// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});




app.post('/backend_data', (req, res) => {
  console.log("entering");
  const topython=req.body;
  console.log(topython)
  //-- Send to python container
  fetch('http://rainbowhat:3000/emo', {
  method: 'post',
  headers: {
    'Accept': 'application/json,',
    'Content-Type': 'application/json'
  },
   //-- send the body to python
  body: JSON.stringify(topython)
}).then(res => res.json())
  .then(res => console.log(res));
 //--- Response
  res.end(JSON.stringify({data:"OK"}));

});

app.post('/buzz', (req, res) => {
  console.log("entering");
  const topython=req.body;
  console.log(topython)
  //-- Send to python container
  fetch('http://rainbowhat:3000/buzz', {
  method: 'post',
  headers: {
    'Accept': 'application/json,',
    'Content-Type': 'application/json'
  },
   //-- send the body to python
  body: JSON.stringify(topython)
}).then(res => res.json())
  .then(res => console.log(res));

 //--- Response
  res.end(JSON.stringify({data:"OK"}));

});

app.post('/lights', (req, res) => {
  console.log("entering");
  const topython=req.body;
  console.log(topython)
  //-- Send to python container
  fetch('http://rainbowhat:3000/lights', {
  method: 'post',
  headers: {
    'Accept': 'application/json,',
    'Content-Type': 'application/json'
  },
   //-- send the body to python
  body: JSON.stringify(topython)
}).then(res => res.json())
  .then(res => console.log(res));
  
 //--- Response
  res.end(JSON.stringify({data:"OK"}));

});




//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});


