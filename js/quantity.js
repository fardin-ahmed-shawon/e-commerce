//
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cart-box").forEach(item => {
        const increaseBtn = item.querySelector(".increment");
        const decreaseBtn = item.querySelector(".decrement");
        const quantitySpan = item.querySelector(".number");

        increaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
        });

        decreaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantitySpan.textContent = quantity - 1;
            }
        });
    });
});