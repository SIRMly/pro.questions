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
    /*��һҳ*/
    function nextPage(presentPage,nextPage){
        $(".page").eq(presentPage).stop().fadeOut(300, function (){
            $(".page").eq(nextPage).stop().fadeIn(500);
        });
    }
    /*�������ڵ�����*/
    $("#birthDate").calendar();
    /*ְҵѡ��*/
    $("#career").picker({
        toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">ȷ��</button></header>',
        cols: [
            {
                textAlign: 'center',
                values: ['����ҵ','����ҵ','����ҵ','������','����ý��','����','ҽ��','����','ѧ��','����']
            }
        ]
    });



})(jQuery);
