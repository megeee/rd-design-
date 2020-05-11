;(function($){
	
    //导航
    $("#nav a").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")
        var router =  $(this).attr("data-router"),
            targer = $("." + router).offset().top;
        $("html,body").animate({
            scrollTop: targer - 60 + "px"
        }, 500);
    })

})(jQuery)