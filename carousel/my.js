var txt=document.getElementById('txt1'),
    xq=document.getElementById('xq'),
    more=document.getElementById('more');
xq.onclick=function(e){
  e=e||window.evnt;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    else {
      e.cancelBubble=true;
    }
  txt.style.display='block';
  xq.style.display='none';
  more.style.display='block';
}
more.onclick=function(e){
  e=e||window.evnt;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    else {
      e.cancelBubble=true;
    }
  txt.style.display='none';
  more.style.display='none';
  xq.style.display='block';
}
