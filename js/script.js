jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $('.submenu').stop().slideDown(300);
        $('#menu_bg').stop().slideDown(300);
    }).mouseout(function(){
        $('.submenu').stop().slideUp(300);
        $('#menu_bg').stop().slideUp(300);
    });

    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });

});
