var mybutton=document.getElementById("mybutton"),
    wrapper=document.getElementById("wrapper"),
    overlay=document.getElementById("overlay"),
    close=document.getElementById("close");

window.onload=function(){
  mybutton.onclick=function(e){
    e=e||window.evnt;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      else {
        e.cancelBubble=true;
      }
    wrapper.style.display="block";
    overlay.style.display="block";
    mybutton.style.display="none";
    close.style.display="block";
  }
  close.onclick=function(e){
    e=e||window.evnt;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      else {
        e.cancelBubble=true;
      }
    close.style.display="none";
    overlay.style.display="none";
    wrapper.style.display="none";
    mybutton.style.display="block";
  }
  document.onclick=function(e){
    e=e||window.evnt;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      else {
        e.cancelBubble=true;
      }
    close.style.display="none";
    overlay.style.display="none";
    wrapper.style.display="none";
    mybutton.style.display="block";
  }
}
