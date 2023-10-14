let clicks = 0;

document.addEventListener("click", function(e) {
    if (clicks < 3) {
        window.open("https://shopee.ph/", "_blank");
        clicks++;
    }
});