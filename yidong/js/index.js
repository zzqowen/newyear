window.onload =function () {
    var music =document.getElementById('music');
    var page1 =document.getElementById('page1');
    var page2 =document.getElementById('page2');
    var page3 =document.getElementById('page3');
    var p3_second =document.getElementById('p3_second');
    var p3_first =document.getElementById('p3_first');
    var audio =document.getElementsByTagName('audio')[0];
    //创建一个监听事件addEventListener，监听ended事件（当前播放结束），当音乐播放完停止，自动停止光盘旋转效果
    audio.addEventListener("ended",function () {
        music.setAttribute("class","")
    },false);
    // music.onclick=function () {
    //     //判断音频是否开启，如果媒体文件被暂停，那么paused属性返回true，反之则返回false
    //     if (audio.paused){
    //         //音频开启
    //         audio.play();
    //         //光盘开启转动
    //         // this.setAttribute("class","play");
    //         this.style.animationPlayState="running"; //兼容Android4.4、iphone6 plus以上版本
    //         this.style.webkitAnimationPlayState="running"; //兼容Android4.4、iphone6 以上版本
    //     }else{
    //         //音频暂停
    //     audio.pause();
    //         //光盘停止转动
    //     // this.setAttribute("class","");
    //         this.style.animationPlayState="paused";  //兼容Android4.4、iphone6 plus以上版本
    //         this.style.webkitAnimationPlayState="paused";// 兼容Android4.4、iphone6 以上版本
    //     }
    // };

    //为了避免click事件产生的300毫秒延迟，因此使用addEventListener来代替click事件。
    
    //创建一个监听事件addEventListener，监听touchstart事件（手指放在一个DOM元素上。通俗讲:触摸）
    music.addEventListener("touchstart",function () {
        if (audio.paused){
            //音频开启
            audio.play();
            //光盘开启转动
            // this.setAttribute("class","play");
            this.style.animationPlayState="running"; //兼容Android4.4、iphone6 plus以上版本
            this.style.webkitAnimationPlayState="running"; //兼容Android4.4、iphone6 以上版本
        }else{
            //音频暂停
            audio.pause();
            //光盘停止转动
            // this.setAttribute("class","");
            this.style.animationPlayState="paused";  //兼容Android4.4、iphone6 plus以上版本
            this.style.webkitAnimationPlayState="paused";// 兼容Android4.4、iphone6 以上版本
        }
    },false);
    page1.addEventListener("touchstart", function() {
        this.style.display = "none";
        page2.style.display = "block";
        //设定一个时间，时间到了执行下列代码
        setTimeout(function() {
            //给某个类名增加一个指定名称和值的新属性。
            page2.setAttribute("class","page fadeOut");
            page2.setAttribute("className","page fadeOut");//兼容IE
            page3.setAttribute("class","page fadeIn");
            page3.setAttribute("className","page fadeIn");
            p3_second.setAttribute("class","p3_second couplet");
            p3_second.setAttribute("className","p3_second couplet");
            p3_first.setAttribute("class","p3_first couplet");
            p3_first.setAttribute("className","p3_first couplet");
        }, 5500);
    }, false);
};
