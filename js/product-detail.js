const container = document.getElementById("product-detail-container");

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find((p) => p.id === productId);

if (product) {
  container.innerHTML = `
        <div class="product-detail-wrapper">
            
            <div class="product-image-section">

                <div class="main-image">
                    <img id="mainImage" src="${product.images[0]}" alt="${product.name}">
                </div>

                <div class="thumbnails">
                    ${product.images
                      .map(
                        (img) => `
                        <img src="${img}" class="thumb">
                    `,
                      )
                      .join("")}
                </div>

            </div>

            <div class="product-info">
                <h1>${product.name}</h1>
                <p class="price">${product.price}</p>

                <p class="desc">
                    Crafted with precision and timeless elegance, this piece reflects true luxury and heritage.
                </p>

                <a class="join-btn"
                   href="https://wa.me/234XXXXXXXXXX?text=Hello, I want to order ${product.name} (${product.price})">
                   Order via WhatsApp
                </a>
            </div>

        </div>
    `;

  // Thumbnail click logic
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumb");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;

      thumbnails.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
  
} else {
  container.innerHTML = `<p>Product not found</p>`;
}
