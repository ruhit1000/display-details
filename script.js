// Product details here
const products = [
    { id: 101, name: "Nike Shoes", price: 5000, desc: "Premium running shoes with air cushion." },
    { id: 102, name: "Adidas Bag", price: 3000, desc: "Waterproof backpack for hikers." },
    { id: 103, name: "Bata Sandal", price: 800, desc: "Comfortable daily wear for home." }
];

// 
const allDetailsBtn = document.getElementsByClassName('view-btn');
const detailContainer = document.getElementById('detail-container');

for (const detailsBtn of allDetailsBtn) {
    detailsBtn.addEventListener('click', () => {
        const dataId = detailsBtn.getAttribute('data-id');
        const matchedProduct = products.find(product => product.id === parseInt(dataId));
        displayDetails(matchedProduct);
    })
}

function displayDetails(object) {
    const productName = object.name;
    const productDesc = object.desc;
    detailContainer.innerHTML = `
    <h1 class="text-2xl font-bold text-gray-400">${productName}</h1>
    <h1 class="text-2xl font-bold text-gray-400">${productDesc}</h1>
    `;
}