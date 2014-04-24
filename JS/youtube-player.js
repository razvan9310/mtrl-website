$(document).ready(function() {
    $("#youtube-player").tubeplayer({
        width: 640,
        height: 360,
        allowFullScreen: "true",
        initialVideo: "hguPHroCH0M",
        preferredQuality: "default",
        onPlay: function(id){},
        onPause: function(){},
        onStop: function(){},
        onSeek: function(time){},
        onMute: function(){},
        onUnMute: function(){}
    });
    
    $("#video-ultrakill").click(function() {
        $("#youtube-player").tubeplayer("play", "hguPHroCH0M");
    });
    
    $("#video-hooks").click(function() {
        $("#youtube-player").tubeplayer("play", "FFjZG-DXl3M");
    });
    
    $("#video-pub").click(function() {
        $("#youtube-player").tubeplayer("play", "xoto8JbIACI");
    });
});