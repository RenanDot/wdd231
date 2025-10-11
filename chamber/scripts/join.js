const openButton = document.querySelector('#openButton');
const closeButton = document.getElementById('closeButton');
const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = dialogBox.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "This membership is designed for non-profit organizations looking to connect with the local business community. Benefits include networking opportunities, access to resources, and promotional support.";
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "The Gold Membership offers all premium benefits and extras, such as featured listings in the business directory, priority access to events, and exclusive marketing opportunities to help your business stand out.";
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "The Silver Membership provides the Bronze Membership benifts plus some extra perks including acess to networking events, training sessions and a spotlight in our home page.";
});

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "The Bronze Membership is perfect for small businesses and startups. It includes basic benefits such as access to newsletters, event invitations, and a listing in the business directory.";
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

const now = new Date();

document.getElementById("timestamp").value = now.toISOString();