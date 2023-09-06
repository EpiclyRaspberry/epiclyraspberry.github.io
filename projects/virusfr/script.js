let clicks = 0;

document.addEventListener("click", function(e) {
    //opens https://virusfr.com/ in a new tab until 3 clicks
    if (clicks < 3) {
        window.open("https://shopee.ph/", "_blank");
        clicks++;
    }
});