document.addEventListener("DOMContentLoaded", function() {
    fetch("/enquete-viande-de-synthese/components/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Vérifiez que le menu a bien été chargé avant d'exécuter le JS
            const script = document.createElement("script");
            script.src = "/enquete-viande-de-synthese/assets/js/menu.js";
            document.body.appendChild(script);

            if (typeof onYouTubeIframeAPIReady === 'function') {
                onYouTubeIframeAPIReady();
            }
        })
        .catch(error => console.error("Erreur lors du chargement du menu :", error));
});
