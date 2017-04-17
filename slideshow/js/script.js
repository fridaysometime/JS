var slideIndex=1,
    slides=document.getElementsByClassName('mySlides'),
    dot=document.getElementsByClassName('dot'),
    prev=document.getElementsByClassName('prev'),
    next=document.getElementsByClassName('next');

window.onload=function(){
  showslides(1);
  prev.onclick=function(){
    plusslide(-1);
  }
  next.onclick=function(){
    plusslide(1);
  }
  dot.onclick=function(){
    currentslide(1);
  }

  function plusslide(n){
    slideIndex=slideIndex+n;
    showslides(slideIndex);
  }
  function currentslide(n){
    slideIndex=n;
    showslides(slideIndex);
  }
  function showslides(n){
    if(n>slides.length){
      slideIndex=1;
    }
    if(n<1){
      slideIndex=slides.length;
    }
    for(var i=0;i<slides.length;i++){
      slides[i].style.display='none';
    }
    for(i=0;i<dot.length;i++){
      dot[i].className= dot[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display='block';
    dot[slideIndex-1].className=dot[slideIndex-1].className+' active';
  }

}
