// Charge le menu et la barre de titre dynamiquement
document.addEventListener("DOMContentLoaded", function() {
    fetch("/enquete-viande-de-synthese/components/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du menu :", error));
});
