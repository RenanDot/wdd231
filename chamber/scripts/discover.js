const placesGrid = document.getElementById('placesGrid');

const placesUrl = 'data/places.json';

const header1 = document.getElementById('date');

async function getPlacesData() {
    const response = await fetch(placesUrl);
    const data = await response.json();
    displayItems(data.places);
}

function displayItems(place) {
    placesGrid.innerHTML = '';
    place.forEach((places) => {
        let card = document.createElement('section');

        let thePhoto = document.createElement('img');
        thePhoto.setAttribute('src', `images/${places.image}`);
        thePhoto.setAttribute('alt', `Image of ${places.name}`);
        thePhoto.setAttribute('loading', 'lazy');

        let name = document.createElement('h2');
        let address = document.createElement('address');
        let description = document.createElement('p');

        let button = document.createElement('button');
        button.textContent = 'Learn More';

        name.innerText = places.name;
        address.innerText = `Address: ${places.address}`;
        description.innerText = places.description;

        card.appendChild(thePhoto);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);

        card.appendChild(button);

        placesGrid.appendChild(card);
    });
}

getPlacesData();

const lastVisit = new Date(parseInt(window.localStorage.getItem('last-visit')));

const today = Date.now();

const firstVisit = localStorage.getItem('last-visit');

const msToDays = 86400000;

const difference = (today - lastVisit.getTime()) / msToDays;

    if(firstVisit === null) {
        header1.innerText = "Welcome! Let us know if you have any questions.";
        localStorage.setItem('last-visit', Date.now());
    } else if(difference < 1) {
        header1.innerText = "Back so soon! Awesome!";
        localStorage.setItem('last-visit', Date.now());
    } else {
        header1.innerHTML = `You last visited ${Math.floor(difference)} days ago.`;
        localStorage.setItem('last-visit', Date.now());
    }