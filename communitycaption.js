function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

function init_captions(){
    c = document.createElement("DIV");
    c.innerHTML = "<div class=\"caption-window ytp-caption-window-bottom ytp-caption-window-rollup\" id=\"caption-window-1\" dir=\"ltr\" tabindex=\"0\" aria-live=\"assertive\" style=\"touch-action: none; text-align: left; overflow: hidden; left: 21.2%; width: 517px; height: 46px; bottom: 2%;\" data-layer=\"4\" lang=\"en\"><span class=\"caption-visual-line\" style=\"display: block;\"><span id=\"TEXTDATA\" style=\"display: inline-block; white-space: pre-wrap; background: rgba(8, 8, 8, 0.75) none repeat scroll 0% 0%; font-size: 32px; color: rgb(255, 255, 255); fill: rgb(255, 255, 255); font-family: &quot;YouTube Noto&quot;, Roboto, &quot;Arial Unicode Ms&quot;, Arial, Helvetica, Verdana, &quot;PT Sans Caption&quot;, sans-serif;\" class=\"ytp-caption-segment\"></span></span></div>";
    
     document.getElementById("movie_player").appendChild(c);
}

function getCaptions(){
    temp = [
        {
            "id":"1",
            "stime":"40",
            "etime":"50", 
            "caption":"Hello",
            "flag": "0"
        },
        {
            "id":"2",
            "stime":"50",
            "etime":"60", 
            "caption":"Bye",
            "flag": "0"
        }
    ];
    
    return temp;
}

function set_caption(text){
    c =document.getElementById("TEXTDATA");
    c.innerHTML = text;
}



sleep(5);
init_captions();

my_captions = getCaptions();

var htmlVideoPlayer = document.getElementsByTagName('video')[0];
htmlVideoPlayer.ontimeupdate = function () {myfunction(my_captions)};

function myfunction(data){
    
    current_time = parseFloat(htmlVideoPlayer.currentTime)
    
    for(var i = 0; i < data.length; i++){
        
        if(data[i].stime <= current_time && data[i].etime > current_time && data[i].flag=="0"){
            set_caption(data[i].caption)
            data[i].flag = "1"
        }
        else{
            if(data[i].stime > current_time || data[i].etime <= current_time){
                data[i].flag = "0"
            }
        }
    }
}
  






