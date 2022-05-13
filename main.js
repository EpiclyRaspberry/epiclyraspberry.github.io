function about(){
    window.open("/about.html")
}
setInterval(widthLoop,2);
function widthLoop(){
var dropbtn = document.getElementById("hi");
dropbtn.style.width = window.innerWidth-31.5;

}
