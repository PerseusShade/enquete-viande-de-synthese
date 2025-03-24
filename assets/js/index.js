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
