const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = dialogBox.querySelector('#dialogBox div');
const openButton1 = document.getElementById("openButton1");
const openButton2 = document.getElementById("openButton2");
const closeButton = document.getElementById("closeButton");

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "Renan Daniel de Campos is a dedicated web developer and designer with a passion for creating engaging and user-friendly websites. With a background in graphic design, Renan brings a unique blend of creativity and technical expertise to every project he undertakes.";
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "Alejandra Carolina Cervantes de Campos is a marketing specialist with a flair for digital strategy and brand development. With years of experience in the marketing industry, Alejandra excels at crafting compelling campaigns that resonate with audiences and drive business growth.";
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});


