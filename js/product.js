const products = [
  {
    id: 1,
    name: "Classic Gold Chain",
    price: "₦1,200,000",
    category: "gold",
    image: "img/gold-1.png",
  },
  {
    id: 2,
    name: "Gold Hoop Earrings",
    price: "₦850,000",
    category: "gold",
    image: "img/gold-2.png",
  },
  {
    id: 3,
    name: "Gold Signet Ring",
    price: "₦920,000",
    category: "gold",
    image: "img/gold-3.png",
  },
  {
    id: 4,
    name: "Layered Gold Necklace",
    price: "₦1,500,000",
    category: "gold",
    image: "img/gold-1.png",
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: "₦780,000",
    category: "gold",
    image: "img/gold-3.png",
  },

  {
    id: 6,
    name: "Sterling Silver Chain",
    price: "₦320,000",
    category: "silver",
    image: "img/gold-2.png",
  },
  {
    id: 7,
    name: "Silver Ring",
    price: "₦250,000",
    category: "silver",
    image: "img/gold-4.png",
  },
  {
    id: 8,
    name: "Silver Bracelet",
    price: "₦280,000",
    category: "silver",
    image: "img/gold-2.png",
  },
  {
    id: 9,
    name: "Silver Hoop Earrings",
    price: "₦300,000",
    category: "silver",
    image: "img/gold-1.png",
  },
  {
    id: 10,
    name: "Minimal Silver Necklace",
    price: "₦350,000",
    category: "silver",
    image: "img/gold-1.png",
  },
  {
    id: 11,
    name: "Minimal Silver Necklace",
    price: "₦350,000",
    category: "gold",
    image: "img/gold-2.png",
  },
  {
    id: 12,
    name: "Minimal Silver Necklace",
    price: "₦350,000",
    category: "silver",
    image: "img/gold-4.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jewel-container");

  const category = container.dataset.category;

  let filteredProducts;

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => p.category === category);
  }

  let output = "";

  filteredProducts.forEach((product) => {
    output += `
      <div class="jewel-card">
          <div class="jewel-card_img">
              <img src="${product.image}" alt="${product.name}">
          </div>

          <div class="jewel-card_desc">
              <h3>${product.name}</h3>
              <p>${product.price}</p>

              <a href="https://wa.me/234XXXXXXXXXX?text=Hello, I want to order ${product.name} (${product.price})">
                  Order via WhatsApp
              </a>
          </div>
      </div>
    `;
  });

  container.innerHTML = output;
});