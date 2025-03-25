// Récupérer le chemin actuel de l'URL
const currentPage = window.location.pathname;

// Trouver l'élément du menu correspondant à l'URL actuelle
if (currentPage.includes("acteurs.html")) {
    document.getElementById("acteurs").classList.add("active");
} else if (currentPage.includes("discours.html")) {
    document.getElementById("discours").classList.add("active");
} else if (currentPage.includes("prospectives.html")) {
    document.getElementById("prospectives").classList.add("active");
} else if (currentPage.includes("sources.html")) {
    document.getElementById("sources").classList.add("active");
} else if (currentPage.includes("apropos.html")) {
    document.getElementById("apropos").classList.add("active");
} else {
    document.getElementById("home").classList.add("active");
}
