// Quantity Counter
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("increment")) {
            const quantitySpan = event.target.closest(".cart-box").querySelector(".number");
            let quantity = parseInt(quantitySpan.textContent);
            if (!isNaN(quantity)) {
                quantitySpan.textContent = quantity + 1;
            } else {
                quantitySpan.textContent = 1;
            }
        }

        if (event.target.classList.contains("decrement")) {
            const quantitySpan = event.target.closest(".cart-box").querySelector(".number");
            let quantity = parseInt(quantitySpan.textContent);
            if (!isNaN(quantity) && quantity > 1) {
                quantitySpan.textContent = quantity - 1;
            } else if (isNaN(quantity)) {
                quantitySpan.textContent = 1;
            }
        }
    });
});