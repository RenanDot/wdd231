const purchaseBt = document.getElementById("puchaseBt");

purchaseBt.addEventListener('click', () => {
	window.location.href = "purchase.html";
});

const city = document.getElementById('city');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const highTemp = document.getElementById('highTemp');
const lowTemp = document.getElementById('lowTemp');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const day1 = document.getElementById('day1');
const day1_temp = document.getElementById('day1-temp');
const day2 = document.getElementById('day2');
const day2_temp = document.getElementById('day2-temp');
const day3 = document.getElementById('day3');
const day3_temp = document.getElementById('day3-temp');

const myKey = "4e2d65dd75e51baf5b0d4b0f6f803876";
const lat = "-22.645833";
const lon = "-47.196111";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
const myURL_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
        alert('Error fetching weather data: ' + (error.message || error));
  }
}

async function apiFetch2() {
    try {
        const response = await fetch(myURL_forecast);
        if (response.ok) {
            const data = await response.json();
            displayResults2(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        alert('Error fetching forecast: ' + (error.message || error));
    }
}

function displayResults(data) {
    city.innerHTML = data.name;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    temperature.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    description.innerHTML = data.weather[0].description;
    highTemp.innerHTML = `${data.main.temp_max.toFixed(0)}&deg;C`;
    lowTemp.innerHTML = `${data.main.temp_min.toFixed(0)}&deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function displayResults2 (data) {
    day1.innerHTML = `${new Date(data.list[8].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}:`;
    day1_temp.innerHTML = `${data.list[8].main.temp.toFixed(0)}&deg;C`;
    day2.innerHTML = `${new Date(data.list[16].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}:`;
    day2_temp.innerHTML = `${data.list[16].main.temp.toFixed(0)}&deg;C`;
    day3.innerHTML = `${new Date(data.list[24].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}:`;
    day3_temp.innerHTML = `${data.list[24].main.temp.toFixed(0)}&deg;C`;
}

apiFetch();

apiFetch2();

const header1 = document.getElementById("header1");

const firstVisit = localStorage.getItem('last-visit');

const lastVisit = new Date(parseInt(window.localStorage.getItem('last-visit')));

const today = Date.now();

const msToDays = 86400000;

const difference = (today - lastVisit.getTime()) / msToDays;

    if(firstVisit === null) {
        header1.innerText = "Welcome to the Mini Loja! Let us know if you have any questions.";
        localStorage.setItem('last-visit', Date.now());
    } else if(difference < 1) {
        header1.innerText = "Great to see you again at the Mini Loja! And so soon!";
        localStorage.setItem('last-visit', Date.now());
    } else {
        header1.innerHTML = `You last visited ${Math.floor(difference)} days ago. Good to see you back at the Mini Loja!`;
        localStorage.setItem('last-visit', Date.now());
    }