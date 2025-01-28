// Menu bar open and close
const pages = document.getElementById('pages');

function menuBtn() {
    pages.classList.toggle("width-minimizer");
}

// Search bar open and close
const searchBtn = document.querySelector('.search-icon');
const closeSearchBtn = document.querySelector('.search-close-icon');

const searchBox = document.querySelector('.mobile-search-box');

searchBtn.addEventListener('click', () => {
    searchBox.style.display = 'block';
    closeSearchBtn.style.display = 'block';
    searchBtn.style.display = 'none';
});

closeSearchBtn.addEventListener('click', ()=>{
    searchBox.style.display = 'none';
    closeSearchBtn.style.display = 'none';
    searchBtn.style.display = 'block';
});


/***************************************************/
/* Add new arrival products dynamically home page */

// Select the card container
const new_arrival_products = document.querySelector('.new-arrival-products');
const total_new_arrival_products = 15;

// loop to generate 10 cards
for (let i = 0; i < total_new_arrival_products; i++) {

    // Create the card element
    const card = document.createElement("div");
    card.className = "card";

    // Set the inner HTML of the card
    card.innerHTML = `
    <img src="img/product.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h6>Winter Casual Denim Jacket For Men</h6>
        <p>Rating: 4.6/5.0</p>
        <h6>1799 TK</h6>
        <button class="btn btn-outline-dark"><span>Add to Cart</span> <i class="ri-shopping-bag-line"></i></button>
        <button class="btn btn-dark"><span>Order Now</span> <i class="ri-shopping-cart-2-line"></i></button>
    </div>`;
    // Append the card to the container
    new_arrival_products.appendChild(card);     
}


/**************************************************/
/* Add Top selling products dynamically home page*/

// Select the card container
const top_selling_products = document.querySelector('.top-selling-products');
const total_top_selling_product = 8;

// loop to generate 10 cards
for (let i = 0; i < total_top_selling_product; i++) {

    // Create the card element
    const card = document.createElement("div");
    card.className = "card";

    // Set the inner HTML of the card
    card.innerHTML = `
    <img src="img/product.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h6>Winter Casual Denim Jacket For Men</h6>
        <p>Rating: 4.6/5.0</p>
        <h6>1799 TK</h6>
        <button class="btn btn-outline-dark"><span>Add to Cart</span> <i class="ri-shopping-bag-line"></i></button>
        <button class="btn btn-dark"><span>Order Now</span> <i class="ri-shopping-cart-2-line"></i></button>
    </div>`;
    // Append the card to the container
    top_selling_products.appendChild(card);     
}



/*********************************************/
/* Add men's products dynamically Home Page */

// Select the card container
const mens_fashion_products = document.querySelector('.home-mens-fashion-products');
const total_mens_fashion_productst = 2;

// loop to generate product cards
for (let i = 0; i < total_mens_fashion_productst; i++) {

    // Create the card element
    const card = document.createElement("div");
    card.className = "card";

    // Set the inner HTML of the card
    card.innerHTML = `
    <img src="img/product.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h6>Winter Casual Denim Jacket For Men</h6>
        <p>Rating: 4.6/5.0</p>
        <h6>1799 TK</h6>
        <button class="btn btn-outline-dark"><span>Add to Cart</span> <i class="ri-shopping-bag-line"></i></button>
        <button class="btn btn-dark"><span>Order Now</span> <i class="ri-shopping-cart-2-line"></i></button>
    </div>`;
    // Append the card to the container
    mens_fashion_products.appendChild(card);     
}


/***********************************************/
/* Add women's products dynamically Home Page */

// Select the card container
const home_womens_fashion_products = document.querySelector('.home-womens-fashion-products');
const home_total_womens_fashion_productst = 3;

// loop to generate product cards
for (let i = 0; i < home_total_womens_fashion_productst; i++) {

    // Create the card element
    const card = document.createElement("div");
    card.className = "card";

    // Set the inner HTML of the card
    card.innerHTML = `
    <img src="img/product.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h6>Winter Casual Denim Jacket For Men</h6>
        <p>Rating: 4.6/5.0</p>
        <h6>1799 TK</h6>
        <button class="btn btn-outline-dark"><span>Add to Cart</span> <i class="ri-shopping-bag-line"></i></button>
        <button class="btn btn-dark"><span>Order Now</span> <i class="ri-shopping-cart-2-line"></i></button>
    </div>`;
    // Append the card to the container
    home_womens_fashion_products.appendChild(card);     
}


