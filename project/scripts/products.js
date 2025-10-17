const itemsUrl = 'data/items.json';

async function fetchItems1() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    defaultDisplay(data.products);
}

async function fetchItems2() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    products = data.products;
    allDisplay(products);
}

async function fetchItems3() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    products = data.products;
    braceletsDisplay(products);
}

async function fetchItems4() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    products = data.products;
    earringsDisplay(products);
}

async function fetchItems5() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    products = data.products;
    necklacesDisplay(products);
}

fetchItems1();

const productsGrid = document.getElementById("productsGrid");
const header1 = document.getElementById("header1");

const all = document.getElementById("all");
const bracelets = document.getElementById("bracelets");
const earrings = document.getElementById("earrings");
const necklaces = document.getElementById("necklaces");

const defaultDisplay = (items) => {
    productsGrid.innerHTML = "";
    items.forEach(products => {
        layoutImages(products);
    });
};

const allDisplay = (items) => {
    header1.textContent = "All Products";
    productsGrid.innerHTML = "";
    items.forEach(products => {
        layoutImages(products);
    });
};

const braceletsDisplay = (items) => {
    header1.textContent = "Bracelets";
    productsGrid.innerHTML = "";
    const braceletProducts = items.filter(product => product.productName.toLowerCase().includes("bracelet"));
    braceletProducts.forEach(product => {
        layoutImages(product);
    });
};

const earringsDisplay = (items) => {
    header1.textContent = "Earrings";
    productsGrid.innerHTML = "";
    const earringsProducts = items.filter(product => product.productName.toLowerCase().includes("earrings"));
    earringsProducts.forEach(product => {
        layoutImages(product);
    });
};

const necklacesDisplay = (items) => {
    header1.textContent = "Necklaces";
    productsGrid.innerHTML = "";
    const necklacesProducts = items.filter(product => product.productName.toLowerCase().includes("necklace"));
    necklacesProducts.forEach(product => {
        layoutImages(product);
    });
};

all.addEventListener('click', () => {
    fetchItems2();
}
);

bracelets.addEventListener('click', () => {
    fetchItems3();
});

earrings.addEventListener('click', () => {
    fetchItems4();
});

necklaces.addEventListener('click', () => {
    fetchItems5();
});

function layoutImages(product) {
    const figure = document.createElement("figure");
    const figcaption1 = document.createElement("figcaption");
    const img = document.createElement("img");
    const figcaption2 = document.createElement("figcaption");
    const figcaption3 = document.createElement("figcaption");

    const productName = document.createElement("h2");
    productName.textContent = product.productName;
    figcaption1.appendChild(productName);

    figcaption1.className = "product-name";
    figcaption2.className = "product-price highlight";
    figcaption3.className = "product-description";

    img.src = product.image;
    img.alt = product.productName;
    img.loading = "lazy";
    img.className = "product-image";

    figcaption2.textContent = `Price: $${product.price}`;

    figcaption3.textContent = `${product.description}`;

    figure.appendChild(figcaption1);
    figure.appendChild(img);
    figure.appendChild(figcaption2);
    figure.appendChild(figcaption3);

    productsGrid.appendChild(figure);
} 

