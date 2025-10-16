const placesGrid = document.getElementById('places-grid');

const placesUrl = 'data/intest.json';

async function getPlacesData() {
    const response = await fetch(placesUrl);
    const data = await response.json();
    displayItems(data.places);
}

function displayItems(place) {
    placesGrid.innerHTML = '';
    place.forEach(places => {
        const card = document.createElement('section');

        const thePhoto = document.createElement('img');
        thePhoto.setAttribute('src', `images/${places.image}`);
        thePhoto.setAttribute('alt', `Image of ${places.name}`);
        thePhoto.setAttribute('loading', 'lazy');

        const name = document.createElement('h2');
        const address = document.createElement('p');
        const description = document.createElement('p');

        name.innerText = places.name;
        address.innerText = `Address: ${places.address}`;
        description.innerText = places.description;

        card.appendChild(thePhoto);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
    });
}