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
