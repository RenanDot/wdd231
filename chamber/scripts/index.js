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
const lat = "43.6136";
const lon = "-116.2376";

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
      console.log(error);
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
        console.log(error);
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

const spotlightGrid = document.getElementById('spotlight-grid');

const membersUrl = 'data/members.json';

async function getMembersDataSpotlight() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const data = await response.json();
            displayMembersSpotlight(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayMembersSpotlight(members) {
    const goldSilverMembers = members.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);
    const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    spotlightGrid.innerHTML = '';   
    selectedMembers.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let description = document.createElement('h3');
        let logo = document.createElement('img');
        let email = document.createElement('p');
        let emailText = document.createElement('span');
        let phone = document.createElement('p');
        let phoneText = document.createElement('span');
        let website = document.createElement('p');
        let websiteText = document.createElement('a');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        name.textContent = `${member.name}`;
        description.textContent = `${member.description}`;
        email.textContent = `EMAIL: `;
        emailText.textContent = `${member.contactEmail}`;
        email.appendChild(emailText);
        phone.textContent = `PHONE: `;
        phoneText.textContent = `${member.phone}`;
        phone.appendChild(phoneText);
        website.textContent = 'URL: ';
        websiteText.textContent = `${member.website}`;
        website.appendChild(websiteText);
        website.href = member.website;

        div1.setAttribute('class', 'div1');
        div2.setAttribute('class', 'div2');

        logo.setAttribute('src', `images/${member.image}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');

        div1.appendChild(logo);

        div2.appendChild(email);
        div2.appendChild(phone);
        div2.appendChild(website);
        
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(div1);
        card.appendChild(div2);

        card.classList.add('spotlight-item');

        spotlightGrid.appendChild(card);
    });
}

getMembersDataSpotlight();
