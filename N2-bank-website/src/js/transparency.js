$(window).scroll({ previousTop: 0 },
    function() {
        let scrolled = false;
        if ($(window).scrollTop() >= 100) {
            $('.navbar').css('background', '#333');
        } else {
            $('.navbar').css('background', 'transparent');
        }
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".navbar").slideDown();
        } else {
            $(".navbar").slideUp();
        }
        this.previousTop = currentTop;
    }
);