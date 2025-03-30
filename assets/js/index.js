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
    "../img/logo.png",
    "../img/logoDauph.png",

    "../img/acteurs/image1.png",
    "../img/acteurs/image2.png",
    "../img/acteurs/image3.png",
    "../img/acteurs/image4.png",
    "../img/acteurs/image5.png",
    "../img/acteurs/image6.png",
    "../img/acteurs/image7.png",
    "../img/acteurs/image8.png",
    "../img/acteurs/image9.png",
    "../img/acteurs/image10.png",
    "../img/acteurs/image11.png",
    "../img/acteurs/image12.png",
    "../img/acteurs/image13.png",

    "../img/discours/split-image.png",
    "../img/discours/surquoi.png",

    "../img/prospectives/adoption-progre.png",
    "../img/prospectives/adoption_totale.png",
    "../img/prospectives/projet_complet.png",

    "../img/sources/image1.png",
    "../img/sources/image2.png",
    "../img/sources/image3.png",
    "../img/sources/image4.png",
    "../img/sources/image5.png",
    "../img/sources/image6.png",
    "../img/sources/image7.png",
    "../img/sources/image8.png",
    "../img/sources/image9.png",
    "../img/sources/image10.png",
    "../img/sources/image11.png",
    "../img/sources/image12.png",
    "../img/sources/image13.png",
    "../img/sources/image14.png",
    "../img/sources/image15.png",
    "../img/sources/image16.png",
    "../img/sources/image17.png",
    "../img/sources/image18.png",
    "../img/sources/image19.png",
    "../img/sources/image20.png",
    "../img/sources/image21.png",
    "../img/sources/image22.png",
    "../img/sources/image23.png"
];

window.addEventListener("load", function() {
    preloadImages(imagesToPreload);
});
