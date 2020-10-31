document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", function(){
      handler();
  });
});

// The handler also must go in a .js file
function handler() {
    
    if(document.body.style.border == "5px solid red"){
        document.body.style.border = ""
    }
    else{
      document.body.style.border = "5px solid red"  
    }
  
}