// Cart array

let cart = [];


// ADD TO CART

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").innerText =
        cart.length;

    alert(name + " added to cart! ☕");

}


// SHOW CART

function showCart() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let message = "Your Order:\n\n";

    let total = 0;


    cart.forEach(function(item, index) {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ₹" +
            item.price +
            "\n";

        total += item.price;

    });


    message +=
        "\n----------------\n" +
        "Total = ₹" +
        total;


    alert(message);

}


// FILTER MENU

function filterMenu(category) {

    const cards =
        document.querySelectorAll(".food-card");


    cards.forEach(function(card) {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
