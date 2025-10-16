const itemsUrl = 'data/items.json';

async function fetchItems1() {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    
    data.products.forEach(product => {
        checkboxGroup.innerHTML += layoutImages(product);
    });
}

const checkboxGroup = document.getElementById("checkboxGroup");

fetchItems1();

function layoutImages(product) {
	return `<label class="checkbox"><input type="checkbox" id="prod${product.code}" name="products" value="${product.productName.toLowerCase()}">${product.productName}</label>`
} 