const year = document.getElementById("currentYear");
const short = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
short.textContent = document.lastModified;

const hamButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');

});

const membersGrid = document.getElementById('membersGrid');

const membersUrl = 'data/members.json';

const listButton = document.getElementById('list');
const gridButton = document.getElementById('grid');

async function getMembersDataGrid() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembersGrid(data.members);
}

async function getMembersDataList() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembersList(data.members);
}

function displayMembersGrid(members) {
    membersGrid.innerHTML = '';
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = 'Visit Website';
        website.href = member.website;
        website.target = '_blank';
        membersGrid.classList.remove('list-style');
        membersGrid.classList.add('grid-style');

        logo.setAttribute('src', `images/${member.image}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        membersGrid.appendChild(card);
    });
} 

getMembersDataGrid();

function displayMembersList(members) {
    membersGrid.innerHTML = '';
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = 'Visit Website';
        website.href = member.website;
        website.target = '_blank';
        card.classList.add('list-item');
        membersGrid.classList.remove('grid-style');
        membersGrid.classList.add('list-style');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        membersGrid.appendChild(card);
    });
}

listButton.addEventListener('click', getMembersDataList);
gridButton.addEventListener('click', getMembersDataGrid);


