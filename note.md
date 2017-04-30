marquee知识点
1. behavior滚动的方式
alternate:表示在两端之间来回滚动
scroll：表示由一端滚动到另一端，会重复
slide:表示由一端滚动到另一端，不会重复
2. direction
方向down,up,left,right
3. loop滚动的次数
当loop=-1表示一直滚动下去
4. scrollamount表示活动字幕的滚动速度
5. scrolldelay设定活动字幕滚动两次之间的延迟时间
6. marquee onmouseover="this.stop()" onmouseout="this.start()" 鼠标指上去stop move，移开，start move
7. 没有内容的时候，，marquee会产生缝隙

无缝滚动的原理：
复制一份内容，不断的循环滚动。
设置滚动条：
一定要设置高度，否则scrollTop无效

setTimeout(表达式，延迟时间)
在执行时，是在载入后延迟指定的时间后，去执行一次表达式，仅执行一次
setInterval（表达式，交互时间）
在执行时，它从载入后，每隔制定的时间就执行一次表达式
