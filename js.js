<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResCafe Cart</title>
    <style>
        /* Your CSS styles here */
        /* I've left the existing styles intact for simplicity */
    </style>
</head>
<body>
    <header>
        <h1>Shopping Cart</h1>
    </header>
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="aboutus.html">About</a></li>
            <li><a href="cart.html">Cart</a></li>
        </ul>
    </nav>
    <section>
        <div id="cart-items"></div>
        <p>Total: $<span id="total-price">0.00</span></p>
        <button id="checkout-btn">Checkout</button>
    </section>

    <!-- JavaScript for cart functionality -->
    <script>
        // Retrieve cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Select elements
        const cartItemsElement = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
        const checkoutButton = document.getElementById('checkout-btn');

        // Update cart UI
        function updateCart() {
            cartItemsElement.innerHTML = '';
            let totalPrice = 0;
            cartItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <div>${item.name} - $${item.price.toFixed(2)}</div>
                    <button class="remove-item" data-name="${item.name}">Remove</button>
                `;
                cartItemsElement.appendChild(itemDiv);
                totalPrice += item.price;
            });
            totalPriceElement.textContent = totalPrice.toFixed(2);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }

        // Initialize cart UI
        updateCart();

        // Event listener for removing items
        cartItemsElement.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')) {
                const itemName = event.target.dataset.name;
                cartItems = cartItems.filter(item => item.name !== itemName);
                updateCart();
            }
        });

        // Checkout button click event
        checkoutButton.addEventListener('click', () => {
            alert('Checkout functionality will be implemented in the future!');
        });
    </script>
</body>
</html>
