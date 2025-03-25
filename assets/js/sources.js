document.addEventListener('DOMContentLoaded', function () {
    const carousel1 = document.getElementById('carousel1');
    const carousel2 = document.getElementById('carousel2');
    const swapButton = document.getElementById('swapButton');
    let isCarousel1Visible = true; 

    carousel1.classList.add('show');

    swapButton.addEventListener('click', function() {
        carousel1.style.transition = 'opacity 2s ease';
        carousel2.style.transition = 'opacity 2s ease';

        if (isCarousel1Visible) {
            carousel1.style.opacity = 0;
            carousel1.style.pointerEvents = 'none';

            setTimeout(function() {
                carousel2.style.opacity = 1;
                carousel2.style.pointerEvents = 'auto';
                isCarousel1Visible = false;
            }, 2000);
        } else {
            carousel2.style.opacity = 0;
            carousel2.style.pointerEvents = 'none';

            setTimeout(function() {
                carousel1.style.opacity = 1;
                carousel1.style.pointerEvents = 'auto';
                isCarousel1Visible = true;
            }, 2000);
        }
    });
});

$(document).ready(function () {
    const descriptionBox = $(".description-box");

    $(".carousel-item").hover(
        function () {
            const text = $(this).text();
            descriptionBox.text(text).css("opacity", "1");
        },
        function () {
            descriptionBox.css("opacity", "0");
        }
    );
});
