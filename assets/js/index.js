var player;
var startTime = 82;
var endTime = 135;
var checkInterval;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'VIOVqGD4W6o',
        playerVars: {
            start: startTime,
            end: endTime,
            modestbranding: 1,
            rel: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    checkInterval = setInterval(checkTime, 1000);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        checkInterval = setInterval(checkTime, 1000);
    } else {
        clearInterval(checkInterval);
    }
}

function checkTime() {
    var currentTime = player.getCurrentTime();
    if (currentTime >= endTime) {
        player.pauseVideo();
    }
}

function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

const imagesToPreload = [
    "/enquete-viande-de-synthese/assets/img/logo.png",
    "/enquete-viande-de-synthese/assets/img/logoDauph.png",

    "/enquete-viande-de-synthese/assets/img/acteurs/image1.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image2.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image3.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image4.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image5.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image6.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image7.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image8.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image9.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image10.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image11.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image12.png",
    "/enquete-viande-de-synthese/assets/img/acteurs/image13.png",

    "/enquete-viande-de-synthese/assets/img/discours/split-image.png",
    "/enquete-viande-de-synthese/assets/img/discours/surquoi.png",

    "/enquete-viande-de-synthese/assets/img/prospectives/adoption-progre.png",
    "/enquete-viande-de-synthese/assets/img/prospectives/adoption_totale.png",
    "/enquete-viande-de-synthese/assets/img/prospectives/projet_complet.png",

    "/enquete-viande-de-synthese/assets/img/sources/image1.png",
    "/enquete-viande-de-synthese/assets/img/sources/image2.png",
    "/enquete-viande-de-synthese/assets/img/sources/image3.png",
    "/enquete-viande-de-synthese/assets/img/sources/image4.png",
    "/enquete-viande-de-synthese/assets/img/sources/image5.png",
    "/enquete-viande-de-synthese/assets/img/sources/image6.png",
    "/enquete-viande-de-synthese/assets/img/sources/image7.png",
    "/enquete-viande-de-synthese/assets/img/sources/image8.png",
    "/enquete-viande-de-synthese/assets/img/sources/image9.png",
    "/enquete-viande-de-synthese/assets/img/sources/image10.png",
    "/enquete-viande-de-synthese/assets/img/sources/image11.png",
    "/enquete-viande-de-synthese/assets/img/sources/image12.png",
    "/enquete-viande-de-synthese/assets/img/sources/image13.png",
    "/enquete-viande-de-synthese/assets/img/sources/image14.png",
    "/enquete-viande-de-synthese/assets/img/sources/image15.png",
    "/enquete-viande-de-synthese/assets/img/sources/image16.png",
    "/enquete-viande-de-synthese/assets/img/sources/image17.png",
    "/enquete-viande-de-synthese/assets/img/sources/image18.png",
    "/enquete-viande-de-synthese/assets/img/sources/image19.png",
    "/enquete-viande-de-synthese/assets/img/sources/image20.png",
    "/enquete-viande-de-synthese/assets/img/sources/image21.png",
    "/enquete-viande-de-synthese/assets/img/sources/image22.png",
    "/enquete-viande-de-synthese/assets/img/sources/image23.png"
];

window.addEventListener("load", function() {
    preloadImages(imagesToPreload);
});
