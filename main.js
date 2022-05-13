function about(){
    window.open("/about.html")
}
setInterval(widthLoop,2);
function widthLoop(){
try{
var dropbtn = document.getElementById("hi");
dropbtn.style.width = window.innerWidth-31.5;
var top = document.getElementById("top");
top.style.width = window.innerWidth-31.5;
}catch{
}
}
