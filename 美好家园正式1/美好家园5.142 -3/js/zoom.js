var html = document.getElementsByTagName("html")[0];
window.onload = window.onresize = function() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var f = (100/640) * width; 
    html.style.fontSize = f + 'px';
}