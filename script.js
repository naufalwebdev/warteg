document.addEventListener("DOMContentLoaded", function() {
    var headerImages = ["HEADER.JPG", "HEADER2.JPG", "HEADER3.JPG"];
    var currentIndex = 0;
    var header = document.querySelector('.header');
    var headerImgs = document.querySelectorAll('.header img');

    function changeHeaderBackground() {
        currentIndex++;
        if (currentIndex >= headerImages.length) {
            currentIndex = 0;
        }
        headerImgs.forEach(function(img, index) {
            if (index === currentIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        setTimeout(changeHeaderBackground, 5000); // Change image every 5 seconds
    }

    setTimeout(changeHeaderBackground, 5000); // Start changing header background after 5 seconds
});
