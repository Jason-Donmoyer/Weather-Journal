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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// GET route for /all route

app.get('/all', (req, res) => {
  res.send(JSON.stringify(projectData));
  console.log('Get route called');

});

// POST route

app.post('/', (req, res) => {
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.feelings = req.body.feelings;
  console.log('Post route called');
  res.end();
});