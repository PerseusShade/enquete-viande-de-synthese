document.addEventListener('DOMContentLoaded', function () {
    const carousel1 = document.getElementById('carousel1');
    const carousel2 = document.getElementById('carousel2');
    const swapButton = document.getElementById('swapButton');
    let isCarousel1Visible = true; // État pour suivre quel carrousel est visible

    // Afficher le premier carrousel par défaut
    carousel1.classList.add('show');

    swapButton.addEventListener('click', function() {
        // Appliquer l'animation de fondu
        carousel1.style.transition = 'opacity 2s ease';
        carousel2.style.transition = 'opacity 2s ease';

        if (isCarousel1Visible) {
            // Cacher le premier carrousel
            carousel1.style.opacity = 0;
            carousel1.style.pointerEvents = 'none';

            // Afficher le deuxième carrousel après 2 secondes
            setTimeout(function() {
                carousel2.style.opacity = 1;
                carousel2.style.pointerEvents = 'auto';
                isCarousel1Visible = false; // Mise à jour de l'état
            }, 2000);
        } else {
            // Cacher le deuxième carrousel et afficher le premier
            carousel2.style.opacity = 0;
            carousel2.style.pointerEvents = 'none';

            setTimeout(function() {
                carousel1.style.opacity = 1;
                carousel1.style.pointerEvents = 'auto';
                isCarousel1Visible = true; // Mise à jour de l'état
            }, 2000);
        }
    });
});

$(document).ready(function () {
    const descriptionBox = $(".description-box");

    $(".carousel-item").hover(
        function () {
            const text = $(this).text(); // Récupère le texte du lien dans le panneau
            descriptionBox.text(text).css("opacity", "1");
        },
        function () {
            descriptionBox.css("opacity", "0");
        }
    );
});
