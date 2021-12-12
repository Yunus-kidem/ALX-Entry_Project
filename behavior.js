document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className === '') {
            thumbnailElement.className = 'small'
        } else {
            thumbnailElement.className = ''
        }
    });


    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Digital marketer", "", "Go-getter", "", "Trainer", "aspire to be ALX software engineer"],
        typeSpeed: 60,
        backSpeed: 70,
        loop: true
    });


});