/* Global Variables */

const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const generateWeather = document.getElementById('generate');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const apiUrl = `api.openweathermap.org/data/2.5/weather?zip=`;
const APIKey = '13113e1d1128465c8ea19117b412794e';
const postUrl = 'http://localhost:3000/all';

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Function to call API and get data

const getWeather = async (apiUrl, zipCode, APIKey) => {
  const url = `https://${apiUrl}${zipCode}&units=Imperial&appid=${APIKey}`;
  try {
    const res = await fetch(url);
    let JSONData = await res.json();
    console.log(JSONData);
    // console.log(JSONData.main.temp);
    return JSONData;
  } catch (error) {
    console.log('There has been an error', error);
  }
}

// Post data function

const postData = async (url, data) => {

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  });

  // return res.json();
  // try {
  //   const newData = await res.json();
  //   console.log(newData);
  //   return newData;
  // } catch (error) {
  //   console.log('There has been an error: ' + error);
  // }

}

const updateUserInterface = async () => {
  const resData = await fetch(postUrl);
  let jsonData = await resData.json();
  date.innerHTML = jsonData.date;
  temp.innerHTML = jsonData.temp;
  console.log(temp);
}


// Main Function

const initiateProgram = async function () {
  const newData = await getWeather(apiUrl, zipCode.value, APIKey);
  const weatherData = {
    temp: newData.main.temp,
    date: newDate,
    feelings: feelings.value
  }
  console.log(weatherData);

  await postData('http://localhost:3000/', weatherData)
  console.log(weatherData.temp);
  updateUserInterface();
}

// Event Listener 

// generateWeather.addEventListener('click', () => {
//   // console.log(getWeather(apiUrl, zipCode.value, APIKey))
//   initiateProgram;
//   // postData(getWeather(apiUrl, zipCode, APIKey));
// });

generateWeather.addEventListener('click', initiateProgram);