###处理溢出
1. 处理溢出
  overflow:hidden;
2. shadow:满足IE，choron,firefox
box-shadow: 0 0 8px #DDD;
-moz-box-shadow: 0 0 8px #DDD;
-webkit-box-shadow: 0 0 8px #DDD;
3. for 循环中，防止函数闭包的概念，只会得到最后一个i的值，
处理方法：新建一个属性，将i赋值
4. <dl>标记定义了一个定义列表，定义列表中的条目是通过使用<dt>标记(“definition title”，定义标题)和<dd>标记(“definition description”，定义描述)创建的。<dt>给出了术语名，<dd>标记给出了术语的定义。
也就是说<dt>用来创建列表中的上层项目，<dd>用来创建列表中最下层项目，<dt>和<dd>都必须放在<dl>< /dl>标志对之间。
5. IE6 兼容 :hover 属性
body{
behavior:url(css/csshover.htc);
}
让css的hover模式兼容万恶的ie6，在body中加了behavior时，添加一个url，可以网上搜索csshover.htc，下载到本地就可以
6. 优化“导航”代码:
当悬浮层div的高度过小（div.bottom<li.top）时，将div向下挪：
当div高度过大（div.height>window.height）时，将div向上挪：
添加div中的图片溢出效果（给div中的img标签设置样式）：
    position:relative;
    bottom: -30px;
    right: -30px;

    给li下添加“推荐导航项”：
    给li中再加一个隐藏的div存放“推荐项”，在li:hover的时候显示，同时增加li的高度。
7. 使用z-index设置元素的堆叠顺序，但是只能对非static定位的定位元素起效。
