1.介绍
 * jQuery是一个JavaScript脚本库，不需要特别的安装，只需要我们在页面 <head> 标签内中，通过 script 标签引入 jQuery 库即可。可以down到本地文件夹引入，也可以直接用CDN引入。
 eg：<script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

* 进入官方网站获取最新的版本 http://jquery.com/download/  ，这里需要注意 jQuery 分 2 个系列版本 1.x 与 2.x，主要的区别在于 2.x 不再兼容 IE6、7、8浏览器，这样做的目的是为了兼容移动端开发。由于减少了一些代码，使得该版本比 jQuery 1.x 更小、更快。

* 如果开发者比较在意老版本 IE 用户，只能使用 jQuery 1.9 及之前的版本了。我们这本课程为了兼容性问题，使用的是 1.9 版本。jQuery 每一个系列版本分为：压缩版(compressed) 与 开发版(development)，我们在开发过程中使用开发版（开发版本便于代码修改及调试），项目上线发布使用压缩版（因为压缩版本体积更小，效率更快）。

2.语法
*  $(selector).action()
    a (selector) to query HTML elements
* document ready event
  * $(document).ready(function(){

   // jQuery methods go here...
    });
    可以简写成
    $(function(){
      //methods go here
      })
作用是等页面的文档（document）中的节点都加载完毕后，再执行后续的代码，因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用。
* id selector
  $('#id_name')
* .class selector
  $('.class_name')
* $(this)	    Selects the current HTML element
* $('element_name')
3.事件
* 鼠标事件
  * click
  * dblclick
  * mouseenter
  * mouseleave
* 键盘事件
  * keypress
  * keydown
  * keyup
* 表单事件
  * submit
  * change
  * focus  //当元素获得焦点时触发的事件：当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。
  * blur   //当元素失去焦点时触发的事件
  * document/windown 事件
  * load
  * resize
  * scroll
  * unload

* 事件方法的语法
  $("p").click(function(){
    // action goes here!!
  });
  $("p").on("click", function(){
    $(this).hide();
});
4.jQuery对象和DOM对象的转换
jQuery是一个类数组对象，而DOM对象就是一个单独的DOM元素。
利用数组下标的方式读取到jQuery 中的DOM对象
通过jQuery自带的get（）方法。
两个方法其实是一回事，只不过第二个把原生的封装成了一个方法，方便使用
var $div = $('div') //jQuery对象
var div = $div[0] //转化成DOM对象
div.style.color = 'red' //操作dom对象的属性

var $div = $('div') //jQuery对象
var div = $div.get(0) //通过get方法，转化成DOM对象
div.style.color = 'red' //操作dom对象的属性

DOM对象转换成jQuery对象
var div = document.getElementsByTagName('div'); //dom对象

//将dom节点div转化为$div的jquery对象
$div =  $(div )

* $(selector).hide(speed,callback);

  $(selector).show(speed,callback);


toggle() 方法切换元素的可见状态。
如果被选元素可见，则隐藏这些元素，如果被选元素隐藏，则显示这些元素。
$(selector).toggle(speed,callback);

* jquery fading methods

  * fadeIn():
    $(selector).fadeIn(speed,callback);

hide隐藏的效果是从下至上或从右下到左上的慢慢折叠缩小，而fadeOut的淡出效果是整体淡化直至消失;
show显示额效果是从左上角向外慢慢扩大，而fadeIn()是淡入

  * fadeOut():
      $(selector).fadeOut(speed,callback);
  * fadeToggle():
      $(selector).fadeToggle(speed,callback);
      同toggle差不多
  * fadeTo():
      $(selector).fadeTo(speed,opacity,callback);

  * jquery sliding methods
    * slidedown()
    $(selector).slideDown(speed,callback);

    * sildeup()
    $(selector).slideUp(speed,callback);

    * slidetoggle()
    $(selector).slideToggle(speed,callback);

  * jquery animations
    $(selector).animate({params},speed,callback);  

  * jquery stop() method
    $(selector).stop(stopAll,goToEnd);
    任何动画效果没完成前，可以停止动画

    * callback function的作用：在完成某个action之后执行的函数。
    *  用.将给同一个元素的action连接起来，为浏览器每次都寻一次元素
    * 例如：
      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
      或者：
      $("#p1").css("color", "red")
              .slideUp(2000)
              .slideDown(2000);
