caption_text_span_ID = "TEXTAREA";

init_captions();
var captions_string = {}

var htmlVideoPlayer = document.getElementsByTagName('video')[0];
htmlVideoPlayer.ontimeupdate = function () {myfunction(captions_string)};


function init_captions(){
    
    c = document.createElement("DIV");
    c.innerHTML = "<div class=\"caption-window ytp-caption-window-bottom ytp-caption-window-rollup\" id=\"caption-window-1\" dir=\"ltr\" tabindex=\"0\" aria-live=\"assertive\" style=\"touch-action: none; text-align: left; overflow: visible; left: 21.2%; width: 517px; height: 46px; bottom: 2%;\" data-layer=\"4\" lang=\"en\"><span class=\"caption-visual-line\" style=\"display: block;\"><span id=\""+caption_text_span_ID+"\" style=\"display: inline-block; white-space: pre-wrap; background: rgba(8, 8, 8, 0.75) none repeat scroll 0% 0%; font-size: 32px; color: rgb(255, 255, 255); fill: rgb(255, 255, 0); font-family: &quot;YouTube Noto&quot;, Roboto, &quot;Arial Unicode Ms&quot;, Arial, Helvetica, Verdana, &quot;PT Sans Caption&quot;, sans-serif;\" class=\"ytp-caption-segment\"></span></span></div>";
    
    document.getElementById("movie_player").appendChild(c);
     
}


function getCaptions(){
 
    var enterbox = document.getElementById("caption_content");
    captions_string = JSON.parse(enterbox.value);
    
//    ```[
//        { 
//            "stime":"40",
//            "etime":"50", 
//            "caption":"Hello",
//            "flag": "0"
//        },
//        {
//            "stime":"50",
//            "etime":"60", 
//            "caption":"Bye",
//            "flag": "0"
//        }
//    ]```;
    
}

function updateCaptionSettings(){
    
    caption = document.getElementById(caption_text_span_ID);
    
    caption.style.background = document.getElementById("background").value;
    caption.style.fontSize = (document.getElementById("fontsize").value)+"pt";
    caption.style.color = document.getElementById("colour").value;
    
    x_y_width = document.getElementById("xyw").value;
    var list_of_xyw = x_y_width.split(",");
    
    cap_parent = caption.parentElement.parentElement;
    cap_parent.style.left = list_of_xyw[0]+"%";
    cap_parent.style.height = list_of_xyw[1]+"px";
    cap_parent.style.width = list_of_xyw[2]+"px";
    
//    style=\"background: rgba(8, 8, 8, 0.75) none repeat scroll 0% 0%; font-size: 32px; color: rgb(255, 255, 255); fill: rgb(255, 255, 255); font-family: &quot;YouTube Noto&quot;, Roboto, &quot;Arial Unicode Ms&quot;, Arial, Helvetica, Verdana, &quot;PT Sans Caption&quot;, sans-serif;\"
    
}

function set_caption(text){
    c =document.getElementById(caption_text_span_ID);
    c.innerHTML = text;
}


function myfunction(data){
    
    if(document.getElementById("caption_content")==null){
        captionenterbox = document.createElement("a");
        captionenterbox.innerHTML =   "<div style=\"position:inline-block;top:50%; height=-200%;\"><label style=\"font-size\: 14pt\">Paste Caption Code Here</label> <br><textarea id=\"caption_content\" name=\"caption_content\" rows=\"4\" cols=\"50\"></textarea> <br> <br> <label style=\"font-size\: 14pt\">Font Size</label> <br><input id=\"fontsize\" placeholder=\"fontsize\" value=20> <br> <br> <label style=\"font-size\: 14pt\">X, Y, Width</label> <br><input id=\"xyw\" placeholder=\"Position and Size\" value=\"21.2,2,517\"><br> <br><label style=\"font-size\: 14pt\">Background Colour</label> <br> <input type=\"color\" id=\"background\" value=\"#000000\"> <br> <br> <label style=\"font-size\: 14pt\">Font Colour</label> <br> <input type=\"color\" id=\"colour\"  value=\"#FFFFFF\"> <br> <br> <input id=captureCaptions type=\"button\" value=\"Apply Captions\"> <input id=captionSettingsUpdate type=\"button\" value=\"Update Caption Settings\"> <br> <br> <br> <br> <br> <br> <br></div>"

        document.getElementById("meta").appendChild(captionenterbox);
          
        var captureCaptionsBtn = document.getElementById("captureCaptions")
        captureCaptionsBtn.addEventListener("click", function(){ my_captions = getCaptions()});
        
        var captionsettingsBtn = document.getElementById("captionSettingsUpdate")
        captionsettingsBtn.addEventListener("click", function(){ updateCaptionSettings()});
    }
    
    
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
    
    flag = true;
    for(var i = 0; i < data.length; i++){
        if(data[i].flag == "1"){
            flag = false;
            break;
        }
    }
    
    if(flag){
        set_caption("");
    }
}
  






