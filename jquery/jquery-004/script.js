let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementById('youtubeScript');
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    const VIDEOS = [
        {'id': 'neweVrb72SE', 'tab': 'player1'},
        {'id': 'dDRHx4cPgbE', 'tab': 'player2'},
        {'id': 'tU-VJOzb-10', 'tab': 'player3'},
        {'id': '5F1awDvbx9s', 'tab': 'player4'},
        {'id': 'lobmbjcAt9M', 'tab': 'player5'}
    ]
    let player;
    
    function defineVideo(tab, _id){
        player = new YT.Player(tab, {
            height: '360',
            width: '640',
            videoId: _id,
            videoAba: tab,
            events: {
                'onReady': getInfo
            }
        });
    }

    function getInfo(event){
        const duration = event.target.getDuration();
        const url = event.target.getVideoUrl();
        const minutes = Math.floor(duration / 60);
        let seconds = duration - minutes * 60;
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        const realDuration = "Duração: " + minutes +":" + seconds; 
        const videoData = event.target.getVideoData();
        const iframe = event.target.getIframe();
        const id = iframe.id;
        $(`#${id}-info1`).html(videoData.title);
        $(`#${id}-info2`).html(realDuration);
        $(`#${id}-info3`).html(url);
    }

    function onYouTubeIframeAPIReady() {
        defineVideo(VIDEOS[0].tab, VIDEOS[0].id);
    }

$(document).ready(function(){

    $( function() {
        $( "#tabs" ).tabs();
    });
    $("#aba-1").on("focusin", function(){
        player.destroy();
        defineVideo(VIDEOS[0].tab, VIDEOS[0].id);
    });
    $("#aba-2").on("focusin", function(){
        player.destroy();
        defineVideo(VIDEOS[1].tab, VIDEOS[1].id);
    });
    $("#aba-3").on("focusin", function(){
        player.destroy();
        defineVideo(VIDEOS[2].tab, VIDEOS[2].id);
    });
    $("#aba-4").on("focusin", function(){
        player.destroy();
        defineVideo(VIDEOS[3].tab, VIDEOS[3].id);
    });
    $("#aba-5").on("focusin", function(){
        player.destroy();
        defineVideo(VIDEOS[4].tab, VIDEOS[4].id);
    });
    $( "#accordion1" ).accordion({
        heightStyle: "content"
    });
    $( "#accordion2" ).accordion({
        heightStyle: "content"
    });
    $( "#accordion3" ).accordion({
        heightStyle: "content"
    });
    $( "#accordion4" ).accordion({
        heightStyle: "content"
    });
    $( "#accordion5" ).accordion({
        heightStyle: "content"
    });
});