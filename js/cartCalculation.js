// Adding Cart list & Calculation
let carts = [];
var total_price;

        function addToCart(button) {
            // Accessing grand parent which is card class
            let product = button.parentElement.parentElement;
            let id = product.getAttribute("product-id");
            let image = product.getAttribute("product-img");
            let name = product.getAttribute("product-title");
            let price = product.getAttribute("product-price");

            let ind = 0;

            // Checking same product exist or not in the carts
            if (carts.length == 0) {
                carts.push({id, image, name, price});
                updateCart();
            } else {
                carts.forEach(data=> {
                    if (data.id == id) {
                        ind = 1;
                    }
                });

                if (ind == 0) {
                    carts.push({id, image, name, price});
                    updateCart();
                } else {
                    alert("Product Already Added!");
                }
            }
        }

        function updateCart() {
            total_price = 0;
            let total_price_container = document.querySelector('.total-price');
            let cart_content = document.querySelector('.cart-content');

            cart_content.innerHTML = "";
            carts.forEach(item=> {
                // create cart-box element
                const cartList = document.createElement("div");
                cartList.className = "cart-box";
                cartList.setAttribute("id", `${item.id}`);

                cartList.innerHTML = `
                    <img src="${item.image}" alt="cart-img">
                    <div class="cart-details">
                        <h2 class="cart-product-title">${item.name}</h2>
                        <span class="cart-price">Tk. ${item.price}</span>
                        <div class="cart-quantity">
                            <button class="decrement" id="decrement">-</button>
                            <span class="number">1</span>
                            <button class="increment" id="increment">+</button>
                        </div>
                    </div>
                    <i onclick="removeCart(this)" class="ri-delete-bin-line cart-remove"></i>
                `;
                total_price += parseInt(item.price);
                cart_content.appendChild(cartList);
            });
            total_price_container.innerHTML = `Tk. ${total_price}`;

            // cart counter
            const top_cart_counter = document.querySelector('.top-cart-counter');
            const bottom_cart_counter = document.querySelector('.bottom-cart-counter');

            top_cart_counter.innerHTML = carts.length;
            bottom_cart_counter.innerHTML = carts.length;
        }

        function removeCart(button) {
            // Accessing parent
            const cart_box = button.parentElement;
            let id = cart_box.getAttribute("id");

            // Removing cart element accoding to product id
            const updatedCarts = carts.filter(item => item.id !== id);
            carts = [];

            carts = [...updatedCarts];

            // Update the cart
            updateCart();
        }