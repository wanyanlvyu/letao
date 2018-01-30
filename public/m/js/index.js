
window.addEventListener('load', function(){
    // 创建主页js对象
    var letaoindex = new LetaoIndex();
    letaoindex.sliderInit();
    letaoindex.scrollInit();

});
// 创建构造函数
var LetaoIndex = function(){

}
// 给构造函数的原型添加方法
LetaoIndex.prototype ={
    // 定义首页轮播图初始化方法
    sliderInit: function(){
        var gallery = mui('.mui-slider');
        gallery.slider({
          interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    },
    // 定义区域滚动方法
    scrollInit: function(){
        mui('.mui-scroll-wrapper').scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        });
    }
}

