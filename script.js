function welcomeMessage() {
    alert("Welcome to PC Nexus");
}

function calc() {
    var product = document.getElementById("selectedProduct").value;
    var price = document.getElementById("priceText").value;
    var payment = document.getElementById("paymentMethod").value;

    if (payment === "") {
        alert("Please select a payment method");
    }
    else {
        alert("Order confirmed for " + product + "\nPrice: " + price + "\nPayment Method: " + payment);
    }
}

window.onload = function () {
    if (document.getElementById("productName")) {
        const params = new URLSearchParams(window.location.search);
        const product = params.get("product");

        let productName = "Gaming PC";
        let productPrice = "500 OMR";
        let productImage = "1.png";

        if (product === "Gaming PC") {
            productName = "Gaming PC";
            productPrice = "500 OMR";
            productImage = "1.png";
        }
        else if (product === "Office PC") {
            productName = "Office PC";
            productPrice = "250 OMR";
            productImage = "2.png";
        }
        else if (product === "Pro PC") {
            productName = "Pro PC";
            productPrice = "700 OMR";
            productImage = "1.png";
        }
        else if (product === "Intel i7") {
            productName = "Intel i7";
            productPrice = "180 OMR";
            productImage = "3.png";
        }
        else if (product === "Ryzen 5") {
            productName = "Ryzen 5";
            productPrice = "140 OMR";
            productImage = "4.png";
        }
        else if (product === "Intel i9") {
            productName = "Intel i9";
            productPrice = "300 OMR";
            productImage = "3a.png";
        }
        else if (product === "RTX 3060") {
            productName = "RTX 3060";
            productPrice = "220 OMR";
            productImage = "5.png";
        }
        else if (product === "RTX 4060") {
            productName = "RTX 4060";
            productPrice = "280 OMR";
            productImage = "5a.png";
        }
        else if (product === "RTX 5060") {
            productName = "RTX 5060";
            productPrice = "350 OMR";
            productImage = "5b.png";
        }
        else if (product === "Liquid Cooler") {
            productName = "Liquid Cooler";
            productPrice = "45 OMR";
            productImage = "6.png";
        }
        else if (product === "Air Cooler") {
            productName = "Air Cooler";
            productPrice = "25 OMR";
            productImage = "6a.png";
        }
        else if (product === "Pro Cooler") {
            productName = "Pro Cooler";
            productPrice = "60 OMR";
            productImage = "6b.png";
        }
        else if (product === "RGB Case") {
            productName = "RGB Case";
            productPrice = "35 OMR";
            productImage = "7.png";
        }
        else if (product === "White Case") {
            productName = "White Case";
            productPrice = "40 OMR";
            productImage = "9a.png";
        }
        else if (product === "Black Case") {
            productName = "Black Case";
            productPrice = "38 OMR";
            productImage = "9b.png";
        }
        else if (product === "Gaming Monitor") {
            productName = "Gaming Monitor";
            productPrice = "120 OMR";
            productImage = "m1.png";
        }
        else if (product === "Curved Monitor") {
            productName = "Curved Monitor";
            productPrice = "170 OMR";
            productImage = "m2.png";
        }
        else if (product === "4K Monitor") {
            productName = "4K Monitor";
            productPrice = "250 OMR";
            productImage = "m3.png";
        }
        else if (product === "RGB Desk") {
            productName = "RGB Desk";
            productPrice = "90 OMR";
            productImage = "d1.png";
        }
        else if (product === "Wooden Desk") {
            productName = "Wooden Desk";
            productPrice = "75 OMR";
            productImage = "d2.png";
        }
        else if (product === "Black Desk") {
            productName = "Black Desk";
            productPrice = "85 OMR";
            productImage = "d3.png";
        }
        else if (product === "Gaming Chair") {
            productName = "Gaming Chair";
            productPrice = "95 OMR";
            productImage = "c1.png";
        }
        else if (product === "Office Chair") {
            productName = "Office Chair";
            productPrice = "60 OMR";
            productImage = "c2.png";
        }
        else if (product === "Racing Chair") {
            productName = "Racing Chair";
            productPrice = "110 OMR";
            productImage = "c3.png";
        }
        else if (product === "Mechanical Keyboard") {
            productName = "Mechanical Keyboard";
            productPrice = "30 OMR";
            productImage = "k1.png";
        }
        else if (product === "RGB Keyboard") {
            productName = "RGB Keyboard";
            productPrice = "35 OMR";
            productImage = "k2.png";
        }
        else if (product === "Wireless Keyboard") {
            productName = "Wireless Keyboard";
            productPrice = "28 OMR";
            productImage = "k3.png";
        }
        else if (product === "Gaming Mouse") {
            productName = "Gaming Mouse";
            productPrice = "20 OMR";
            productImage = "mu1.png";
        }
        else if (product === "Wireless Mouse") {
            productName = "Wireless Mouse";
            productPrice = "18 OMR";
            productImage = "mu2.png";
        }
        else if (product === "RGB Mouse") {
            productName = "RGB Mouse";
            productPrice = "22 OMR";
            productImage = "mu3.png";
        }
        else if (product === "Gaming Headset") {
            productName = "Gaming Headset";
            productPrice = "25 OMR";
            productImage = "h1.png";
        }
        else if (product === "RGB Headset") {
            productName = "RGB Headset";
            productPrice = "30 OMR";
            productImage = "h2.png";
        }
        else if (product === "Wireless Headset") {
            productName = "Wireless Headset";
            productPrice = "40 OMR";
            productImage = "h3.png";
        }
        else if (product === "Basic Setup") {
            productName = "Basic Setup";
            productPrice = "650 OMR";
            productImage = "fs1.png";
        }
        else if (product === "Advanced Setup") {
            productName = "Advanced Setup";
            productPrice = "950 OMR";
            productImage = "fs2.png";
        }
        else if (product === "Pro Setup") {
            productName = "Pro Setup";
            productPrice = "1400 OMR";
            productImage = "fs3.png";
        }

        document.getElementById("productName").innerText = productName;
        document.getElementById("productPrice").innerText = "Price: " + productPrice;
        document.getElementById("productImage").src = productImage;
        document.getElementById("selectedProduct").value = productName;
        document.getElementById("priceText").value = productPrice;
    }
    else if (document.title === "PC Nexus") {
        welcomeMessage();
    }
};