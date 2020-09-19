/* Global Variables */

const zipcode = 07735;
const url = `api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=`;
const APIKey = '13113e1d1128465c8ea19117b412794e';

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();