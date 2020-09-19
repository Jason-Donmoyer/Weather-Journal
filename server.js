// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.listen(3000, () => {
  console.log('Serving up good some good shit!');
});

// Initialize all route with a callback function

app.get('/all', (req, res) => {
  res.send(JSON.stringify(projectData));
});

app.post('/', (req, res) => {
  projectData.temp = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userInput = '';
  res.end();
});