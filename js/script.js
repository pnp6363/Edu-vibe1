$(document).ready(function() {
    $('.owl-carousel ').owlCarousel({
        loop: false,
        margin: 30,
        items: 1,
    })
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    AOS.init();

});