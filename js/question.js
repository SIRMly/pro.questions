/**
 * Created by Administrator on 2017/6/5.
 */
;(function ($){
    var clickEvent = "ontouchstart" in document ? "touchend" : "click";
    $("#enter").on("click", function (){
        nextPage(0,1);
    });
    $("#submit1").on("click", function (){
        nextPage(1,2);
    });
    /*下一页*/
    function nextPage(presentPage,nextPage){
        $(".page").eq(presentPage).stop().fadeOut(300, function (){
            $(".page").eq(nextPage).stop().fadeIn(500);
        });
    }
    /*出生日期的日历*/
    $("#birthDate").calendar();
    /*职业选择*/
    $("#career").picker({
        toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">确定</button></header>',
        cols: [
            {
                textAlign: 'center',
                values: ['服务业','金融业','零售业','互联网','传播媒体','教育','医疗','军人','学生','其他']
            }
        ]
    });

})(jQuery);

