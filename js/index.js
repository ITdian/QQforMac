$(function () {
        /*定义索引*/
        var index = 0,timer = null;
    /*调用隐藏和显示部件的方法*/
    showAndHideEle();
    /*
    * 监听GPS点击
    * */
    $('.gps li').on('click',function () {
        //获取点击的索引
        index = $(this).index();
         //切换选中和页面
        $(this).addClass('current').siblings().removeClass('current');
        $('section').eq(index).show().siblings("section").hide();
        /*调用隐藏和显示部件的方法*/
        showAndHideEle();
        /*移除架空类*/
        setTimeout(function () {
            $('section').eq(index).removeClass('curr').siblings('section').addClass('curr');
        },10);

    });

    /*监听鼠标的滚动*/
    // $(window).on('scroll',function () {
    //
    // })
    $(window).mousewheel(function(event,delta) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            /*求出我们当前的索引*/
            index -= delta;
            //判断
/*            if(index>$('.gps li').length-1){
                    index = 0;
            }else if(index<0){
                index = $('.gps li').length-1;
            }
            console.log(index);*/
            if(index>$('.gps li').length-1){
                index = $('.gps li').length-1;
            }else if(index<0){
                index = 0;
            }
            // console.log(index)
            //切换选中和页面
            $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
            $('section').eq(index).show().siblings("section").hide();
            showAndHideEle();
            /*移除架空类*/
            setTimeout(function () {
                $('section').eq(index).removeClass('curr').siblings('section').addClass('curr');
            },10);
        },400);


    });
    
    /*控制部件的显示和隐藏*/
    function showAndHideEle() {
        if(index == 0){
            $('.top_left_logo').hide();
            $('.scroll').show();
        }else {
            $('.top_left_logo').show();
            $('.scroll').hide();
        }

    }
});