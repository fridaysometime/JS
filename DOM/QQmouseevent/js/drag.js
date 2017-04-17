//为什么不用getelementbyclass, IE10以前的IE浏览器不支持
function getByClass(clsName,parent){
  //把必须要传的参数写在一地个，可选要传的参数写在后面。
  var oParent=parent?document.getElementById(parent):document;
  eles=[];  //getbyclass返回的是一个类似数组的对象
  elements=oParent.getElementsByTagName('*');
  for(var i=0,length=elements.length;i<length;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

//页面加载
window.onload=drag;
//只有当光标移动到登录那的标题区域的时候，才能拖动，而不是随便移动到哪都可以拖动
//在标题区域按下-》要页面中移动-》释放鼠标时停止移动
function drag(){
  var OTitle=getByClass('login_logo_webqq','loginPanel')[0];
  //拖拽
  OTitle.onmousedown= fndown;
  //关闭
  var Oclose=document.getElementById('ui_boxyClose');
  Oclose.onclick=function(){
  document.getElementById('loginPanel').style.display='none';
    }
    //切换状态
    /*切换状态时候的操作是这样的：选了某个状态，text会取代当前的在线，前面的小图标的类也会发生变化
    变成li的id,online, callme, away等。text会变成li里的文字*/
  var loginState=document.getElementById("loginState"),
      loginStateShow=document.getElementById("loginStateShow"),
      loginStatePanel=document.getElementById("loginStatePanel"),
      login2qq_state_txt=document.getElementById("login2qq_state_txt"),
      lis=loginStatePanel.getElementsByTagName('li');
      //stateSelect_text=getByClass('statePanel_li','loginPanel')
  //点击“下”，ul列表显示出来
  //阻止事件冒泡：如果不阻止事件冒泡可能会出现的情况是，你在某个地方触发了，display显现或者不限现，但因为事件冒泡并不能得到你想要的结果
  //比如：两个地方对display都有设置，但在内具体的元素触发事件跟，根据事件冒泡，它的前一层甚至到document都会执行一遍跟display相关的，这样你在内部设置的就没有起到作用。
  //所以在内部先阻止事件冒泡，就不会阻止它冒到父元素。
  loginStateShow.onclick=function(e){
    e=e||window.evnt;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    else {
      e.cancelBubble=true;
    }
    loginStatePanel.style.display="block";
  }
  //遍历ul列表，鼠标滑过的时候颜色改变，划走的时候夜色改变，点击的时候出发事件
  for(var i=0,len=lis.length;i<len;i++){
    lis[i].onmouseover=function(){
      this.style.background='#567';
    }
    lis[i].onmouseout=function(){
      this.style.background='#FFF';
    }
    lis[i].onclick=function(e){
      e=e||window.evnt;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      else {
        e.cancelBubble=true;
      }
      var id=this.id;
      loginStatePanel.style.display="none";
      login2qq_state_txt.innerHTML=getByClass('stateSelect_text',id)[0].innerHTML;
      loginStateShow.className='';
      loginStateShow.className='login-state-show '+id;
    }
  }
  document.onclick=function(){
    loginStatePanel.style.display="none";
  }


}

//拖动到哪呢？鼠标光标移动到哪，登录窗口就拖动到哪
//鼠标事件都是在浏览器窗口中的特定位置上发生的，这个位置的信息保存在事件的clientX 和clientY属性中，所有浏览器都支持这两个属性
//它们的值表示事件发生时候鼠标指针在视口中水平和垂直的坐标，不包括页面滚动的距离
//注意在css里面板是做了绝对定位的，所以要写代码将clientX和clientY赋过去
/*function fndown(){
  var Odrag=document.getElementById('loginPanel')
  document.onmousemove=function(event){
    event =event || window.event;
//    document.title=event.clientX+','+event.clientY;
    Odrag.style.left=event.clientX+'px';
    Odrag.style.top=event.clientY+'px';

  }
}*/
//如果这样写的话，光标不管在哪按下，在移动完的时候，鼠标的光标总跑到了左上角，用户体验不好，
//因为它是以左上角的点做定位的
//为什么要传event参数
/*event 代表事件的状态，例如触发event对象的元素，鼠标的位置及状态，按下的键等
event对象只在时间发生的过程中才有效
event的某些属性支队特定的事件有意义
为了实现火狐和IE的传递，IE中event是全局的相当于window.event.*/
function fndown(event){
  event=event || window.event;
  var Odrag=document.getElementById('loginPanel'),
/*  document.onmousemove=function(event){
    event =event || window.event;
//    document.title=event.clientX+','+event.clientY;
    Odrag.style.left=event.clientX+'px';
    Odrag.style.top=event.clientY+'px';

  }*/
  //光标移动到哪里，本来光标和面板的距离应该保持不变。如何计算：光标按下时，光标距离浏览器
  //边缘的距离，clientX减去面板离浏览器左边的距离，offsetLeft
    disX=event.clientX-Odrag.offsetLeft,
    disY=event.clientY-Odrag.offsetTop;
//  Odrag.style.backgroundColor="#222";
  //移动
  document.onmousemove=function (event){
    event=event || window.event;
    fnmove(event,disX,disY);
  //释放鼠标
  document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
  }

  }
}
function fnmove(e,posX,posY){
  var Odrag=document.getElementById('loginPanel'),
      l=e.clientX-posX;
      t=e.clientY-posY;
//  Odrag.style.left=l+'px';
//  Odrag.style.top=t+'px';
//  document.title=l+','+t;//左边和上边的范围是0，当超过0时候会变成负数。右边和下班是窗口的
  //最大值
//问题：登录框会移除页面，如果对l和t不加限制的话。给l和t 一个范围。
    winW=document.documentElement.clientWidth||document.body.clientWidth;
    winH=document.documentElement.clientHeight||document.body.clientHeight;
    maxW=winW-Odrag.offsetWidth-10;
    maxH=winH-Odrag.offsetHeight;
    if (l<0) {
      l=0;
    }
    else if(l>maxW){
      l=maxW;
    }
    if(t<0){
      t=10;
    }
    else if(t>maxH){
      t=maxH;
    }
    Odrag.style.left=l+'px';
    Odrag.style.top=t+'px';
}
//释放鼠标，拖动都是和光标的坐标息息相关的。
