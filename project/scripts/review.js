const div = document.getElementById('infoDisplay');

const params = new URLSearchParams(window.location.search);

const fname = params.get('fname');
const email = params.get('email');
const phone = params.get('phone');
const items = params.getAll('products');

div.innerHTML = `<p><strong>Full Name:</strong> ${fname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Items purchased:</strong></p>`;

if (items.length > 0) {
    const ul = document.createElement('ul');
    items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = String(item).charAt(0).toUpperCase() + String(item).slice(1);
        ul.appendChild(li);
    });
    div.appendChild(ul);
}



