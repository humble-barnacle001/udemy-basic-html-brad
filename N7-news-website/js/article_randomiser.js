const items = document.querySelectorAll("#article article div p");
var r = 200 + Math.floor(Math.random() * 56);
var g = 200 + Math.floor(Math.random() * 56);
var b = 200 + Math.floor(Math.random() * 56);
var tr = 255 - r;
var tg = 255 - g;
var tb = 255 - b;
const randomise = () => {

    var col = 'rgb('.concat(r.toString(), ',', g.toString(), ',', b.toString(), ')');
    var tcol = 'rgb('.concat(tr.toString(), ',', tg.toString(), ',', tb.toString(), ')');
    document.getElementById('article').style.backgroundColor = col;
    items.forEach(item => {
        item.style.color = tcol;
        item.style.opacity = 1;
    });
};
window.addEventListener('load', randomise);