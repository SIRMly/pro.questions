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
    $("#submit2").on("click", function (){
        nextPage(2,3,function (){
            myWaterfall();
        });
        $(window).resize(function (){
            myWaterfall();
        });
    });
    $("#submit3").on("click", function (){
        nextPage(3,4);
    });
    /*下一页*/
    function nextPage(presentPage,nextPage,callback){
        $(".page").eq(presentPage).stop().fadeOut(300, function (){
            $(".page").eq(nextPage).stop().fadeIn(300, function (){
                if(callback){
                    callback();
                }
            });
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
    function myWaterfall(){
        var fatherDom = $(".addressLi .disBlock");
        var listDom = fatherDom.find(".item-input");
        var heightArr = [];
        heightArr[0] = listDom.eq(0).height();
        heightArr[1] = listDom.eq(1).height();
        heightArr[2] = listDom.eq(2).height();
        listDom.each(function(index, item) {
           if (index > 2){
               var minHeight = Math.min.apply( null, heightArr);
               var minHIndex = $.inArray( minHeight, heightArr );
               var maxHeight = Math.max.apply( null, heightArr);
               $(item).css({
                   "position" : "absolute",
                   "left" : listDom.eq( minHIndex ).position().left,
                   "top" : minHeight + 30
               });
               heightArr[minHIndex]+=$(item).height()+30;
               fatherDom.css("height",maxHeight+100);
           }
        });

    }
    /*==签字==*/
    var WritingPad = function () {
        $(function () {
            //initHtml();
            initSignature();
            /*==保存==*/
            $(document).on("click", "#signSave", null, function () {
                var myImg = $('#signImg').stop().show().empty();
                var dataUrl = $('.js-signature').jqSignature('getDataURL');
                var img = $('<img>').attr('src', dataUrl);
                $(myImg).append(img);
                $("#mySignature,#signEmpty,#signSave").addClass("hide");
                $('#signImg,#signRewrite').removeClass("hide");
            });
            $(document).on("click", "#signEmpty", null, function () {
                $('.js-signature').jqSignature('clearCanvas');
            });
            $(document).on("click", "#signRewrite", null, function () {
                $('.js-signature').jqSignature('clearCanvas');
                $("#mySignature,#signEmpty,#signSave").removeClass("hide");
                $('#signImg,#signRewrite').addClass("hide");
            });

        });
        /*==设定面板及大小==*/
        function initSignature() {
            var canvasW = $(window).width()*0.6;
            var canvasH = $(window).width()*0.35;
            if (window.requestAnimFrame) {
                var signature = $("#mySignature");
                signature.jqSignature({ width: canvasW, height: canvasH, border: '1px solid #c2c5ca', background: 'transparent', lineColor: '#6d6d72', lineWidth: 2, autoFit: false });
            } else {
                return;
            }
        }
    };
    var wp = new WritingPad();
    /*==获取日期==*/
    $("#sign-date").val(getDate());
    function getDate(){
        var newDate = new Date();
        var year = newDate.getFullYear(),
            month = newDate.getMonth()+ 1,
            month = month < 10 ? "0"+month : month,
            day = newDate.getDate(),
            day = day < 10 ? "0"+day : day;
        return(year+" 年"+month+" 月" +day+" 日");
    }
































})(jQuery);

