/**
 * Created by zhaoyp on 2015/8/26.
 */

var mask = mask || {};

mask.functions = {

     creatMask : function(){
         if(!window.localStorage.isMask){
            var that=this;
             var _mask = $("<div id='maskDiv' class='mask'></div>");
             var _tipsImg = $("<div class='tipsImg' ></div>");
             var _tips = $("<div class='tips'>点击此按钮进入报名页面</div>");
             var _btn = $("<div id='closeBtn' class='closeBtn'><div>我知道了</div></div>");
             _mask.append(_tipsImg).append(_tips).append(_btn);
             $("body").append(_mask).css("overflow","hidden");
             $("#closeBtn").click(function(){that.closeMask();});
             window.localStorage.isMask = 1111;
         }
         else{$(".class_month li").removeClass("hou");}
         this.addMask();
     },
    closeMask : function(){
        $("#maskDiv").remove();
        $("body").css("overflow","auto");
    },

    addMask : function(){
        $(".class_month li").each(function(index){
            var index1=index+1
            $(this).delay(index1*1000).queue(function (){
                $(this).addClass("hou");

            });

        });
    }

};