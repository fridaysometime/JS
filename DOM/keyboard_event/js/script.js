//抽奖的原理：把抽奖显示的内容写在数组里，通过定时器在一定时间内产生一个随机数，指代数组的下标，在数组里取出这个数
var data=['iphone7','ipad','Mac','lenovo PC','100$ JD card','thanks','500$amazon card','A book']
    timer=null;//定时器
    flag=0;
//这三个是全局变量；

window.onload=function(){

var play=document.getElementById("play");
    stop=document.getElementById("stop");

  //鼠标点击play，事件,开始抽奖
  play.onclick=playfun;//鼠标点击play，调用playfun函数， 给play元素绑定一个onclick事件，
  //这时，把一个名叫playfun的函数所在的地方告诉了play,当play被click的时候调用这个函数
  //这种方法叫,assign events using HTML DOM
  //停止抽奖
  stop.onclick=stopfun;
  //键盘事件,按回车执行，event对象的keyCode,对应的ASCII码
  document.onkeyup=function(event){
    event=event||window.event;
    if(event.keyCode===13){
      if(flag===0){
        playfun();
        flag=1;
      }
      else{
        stopfun();
        flag=0;
      }
    }
  }
}
function playfun(){
  var play=document.getElementById("play");
  var title=document.getElementById("title");
  clearInterval(timer);
  timer=setInterval(function(){
    var random=Math.floor(Math.random()*data.length); //产生随机数，代表数组的下标。数组有八个数，所以要乘以数组的长度
    title.innerHTML=data[random];
  },50);
  play.style.background='#999';
}
function stopfun(){
  clearInterval(timer);
  var play=document.getElementById("play");
  stop.style.background='blue';
}
