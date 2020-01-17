$("document").ready(function(){
//    마우스
    var prefix = function() {
                var a = window.getComputedStyle(document.documentElement, ""),
                    b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
                return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
            }();
            $(document).mousemove(function(e) {
                mouseX = e.pageX + 15;
                mouseY = e.pageY - $(window).scrollTop() + 15;
                $('.pointer-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
            });

            $(document).on('mouseenter', 'a', function() {
                $('.pointer').addClass('zooming red');
            }).on('mouseleave', 'a', function() {
                $(".pointer").removeClass("zooming red")
            });
//    풀페이지
    var Fullpage = new fullpage(".fullpage",{
        scrollBar: true,
        sectionsColor : ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
        anchors: ["home", "info", "work_web", "work_design", "contact"],
        afterLoad : function(origin, destination){
         if(destination.index == 2){
             $(".content-left").eq(0).find("*").addClass("animate");
             $(".content-right").eq(0).find("*").addClass("animate");
         }   
        },
        
        afterSlideLoad : function(section, origin, destination){
        var params = {
            section : section,
            origin : origin,
            destination : destination
        }
        $(".content-box *").removeClass("animate");
        $(".content-left").eq(destination.index).find("*").addClass("animate");
        $(".content-right").eq(destination.index).find("*").addClass("animate");}
    })
    
    var $view = $("#design .design .view"),
        $detail = $("#design .design .detail");
        
    
     
    $view.hover(function(){
        $(this).siblings(".detail").find("p").css("background-color", "#fff").css("color", "#000");
        $(this).css("background-color", "black").find("p").css("color", "#fff");
    }, function(){
       $(this).siblings(".detail").find("p").css("background-color", "").find("p").css("color", "");
        $(this).css("background-color", "").find("p").css("color", "");
    })
    
    $detail.hover(function(){
        $(this).siblings(".view").find("p").css("background-color", "black").css("color", "#fff");
        $(this).find("p").css("background-color", "#fff").css("color", "black");
    }, function(){
       $(this).siblings(".view").find("p").css("background-color", "").css("color", "");
        $(this).find("p").css("background-color", "").css("color", "");
    })
    
    })