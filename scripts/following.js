//permet de garder le menu en haut après l'avoir dépassé après un certain temps
//en lui ajoutant la classe fixed
//pour coller un élément de la page au passage remplacer outerHeight par offset().top;
//nécessite que le block concerné possède la classe stickToTop

if (window.matchMedia("(min-width: 500px)").matches){
    
        var stickOffset = $('.stickToTop').outerHeight();
        var time = 400;

        $(window).scroll(function () {

            setTimeout(function () {

                var fixed = $('.stickToTop'),
                    scroll = $(window).scrollTop()

                if (scroll > stickOffset) {
                    fixed.addClass('fixed');
                    
                } else {
                    fixed.removeClass('fixed');
                }

            }, time);
        });
}