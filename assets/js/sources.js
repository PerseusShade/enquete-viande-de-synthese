document.addEventListener('DOMContentLoaded', function () {
    const totalImages = 23;
    const images = [];

    for (let i = 1; i <= totalImages; i++) {
        images.push(`/enquete-viande-de-synthese/assets/img/sources/image${i}.png`);
    }

    function preloadImages(urls, callback) {
        let loaded = 0;
        let total = urls.length;

        urls.forEach(url => {
            let img = new Image();
            img.src = url;
            img.onload = function () {
                loaded++;
                if (loaded === total) {
                    callback();
                }
            };
            img.onerror = function () {
                console.warn("Image non trouvée : " + url);
                loaded++;
                if (loaded === total) {
                    callback();
                }
            };
        });
    }

    preloadImages(images, function () {
        console.log("Toutes les images sont chargées !");
        document.getElementById('carousel1').classList.add('show');
    });
});

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
