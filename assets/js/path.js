// Définissez le préfixe de base pour GitHub Pages (modifiez "projet" par le nom de votre dépôt)
const basePath = "/enquete-viande-de-synthese"; // Remplacez par le nom de votre projet ou laissez vide si publié à la racine

document.addEventListener("DOMContentLoaded", function () {
    // Ajuste dynamiquement les chemins relatifs
    document.querySelectorAll('link, script, img, a').forEach(element => {
        ['href', 'src'].forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value.startsWith('../')) {
                    element.setAttribute(attr, basePath + value.slice(2));
                }
            }
        });
    });
});
