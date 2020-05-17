var previousTop = 0;
const run = () => {

    if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 400) {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            document.getElementById('main-nav').style.transform = "translateY(-200px)";
        } else {
            document.getElementById('main-nav').style.transform = "translateY(0)";
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
}
window.addEventListener('scroll', run);



var lastScrollTop = 0;