;(function($){

    $(window).bind('scroll',function(){
        var scrollTop = parseInt($(window).scrollTop());
        //改变头部
        scrollTop >= 80 ? 
        $(".nav-wrap").addClass('active') : $(".nav-wrap").removeClass('active');
    })

    //导航
    $(".nav a").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")
        var router =  $(this).attr("data-router"),
            targer = $("." + router).offset().top;
        $("html,body").animate({
            scrollTop: targer - 60 + "px"
        }, 500);
    })


    var data = [
        {
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "02.jpg,03.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            title: "电动滑板车",
            desc: "产品设计",
            pics: "02.jpg,03.jpg,04.jpg,05.jpg"
        }
    ]

    var zeroize = function(num) {
        return num < 10 ? '0' + num : num;
    }

    var render = function(ele, catalog, data){

        var html = '';
        for(var i = 0; i < data.length; i++) {
            console.log(i,i % 3 === 0 ? '<ul>' : '')
            html += i % 3 === 0 ? '<ul>' : '';
            html += '<li class="pic-wrap" data-bigimages="' + data[i].pics + '" data-direct="' + (zeroize(i+1)) + '">';
            html +=    '<div class="pic-body">';
            html +=        '<img src="./case/' + (zeroize(i+1)) + '/01.jpg" alt="">';
            html +=        '<div class="description">';
            html +=            '<h3>' + data[i].title + '</h3>';
            html +=            '<p>' + data[i].desc + '</p>';
            html +=         '</div>';
            html +=     '</div>';
            html += '</li>';
            html += i % 3 === 0 ? '</ul>' : '';
            console.log(i,i % 3 === 0 ? '</ul>' : '')
        }

        console.log(html)

    }
    render(1,1,data)
})(jQuery)