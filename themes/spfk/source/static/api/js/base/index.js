//引入jquery
/// <reference path="jquery-1.10.2.min.js" />

//准备工作

//判断手机 雪花产生变少
var startToEndTime;
if($(window).width()<=800){
    startToEndTime = 200;
}else{
    startToEndTime = 80;
}

//判断手机 雪花大小变笑
var flakesizeFromSJ;
if($(window).width()<=800){
    flakesizeFromSJ = 10;
}else{
    flakesizeFromSJ = 30;
}
//创建雪片
var flake = $("<div></div>").css("position","absolute").html("❄");

$(function () {
    setInterval(function () {
	//获取浏览器的高度
        var Bheight = $(window).height()+$(document).scrollTop();
        //获取浏览器的宽度
        var Bwidth = $(window).width();
        //雪片开始随机大小
        var flakesize = 1+Math.random() * flakesizeFromSJ;

        //产生后距离浏览器的left值
        var startleft = Math.random()* Bwidth;
        //落下时距离浏览器的left值
        var Endleft = Math.random()* Bwidth;

        //开始透明度
        var startOp = 0.9+ Math.random()*0.1;
        //结束透明度
        var endOp = 0.1+ Math.random()*0.9;

        flake.clone().appendTo($("body")).css({
            "left": startleft,
            "top": "-55px",
            "font-size": flakesize,
            "color": "#FFFFFF",
            "opacity":startOp
        }).animate({
            "left": Endleft,
            "top": Bheight,
            "opacity":endOp
        },15000,function(){
            $(this).remove();
        });
    },startToEndTime);
    
});