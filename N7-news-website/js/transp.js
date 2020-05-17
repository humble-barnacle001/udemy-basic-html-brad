if (window.innerWidth > 600) {
    $(window).scroll({ previousTop: 0 },
        function() {
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop) {
                $(".navbar").slideDown();
            } else {
                $(".navbar").slideUp();
            }
            this.previousTop = currentTop;
        }
    );
}