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


    var showingData = [
        {
            id: 1,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 2,
            title: "电动滑板车",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            id: 3,
            title: "便携式智能消毒笔",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 4,
            title: "美容仪",
            desc: "产品设计",
            pics: "01.jpg"
        },
        {
            id: 5,
            title: "紫外空气净化器",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 6,
            title: "唱片无线充电器",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg"
        },
        {
            id: 7,
            title: "智能机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },
        {
            id: 8,
            title: "智能机器狗",
            desc: "产品设计",
            pics: "01.jpg,02.jpg"
        },
        // 9
        {
            id: 9,
            title: "火牛充电器",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg"
        },
        {
            id: 10,
            title: "蓝牙麦克风音响",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg"
        },
        {
            id: 11,
            title: "智能蓝牙音响",
            desc: "产品设计",
            pics: "01.jpg"
        },
        // 12
        {
            id: 12,
            title: "小型军用发电机",
            desc: "产品设计",
            pics: "01.jpg"
        },
        {
            id: 13,
            title: "智能早教机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg"
        },
        {
            id: 14,
            title: "智能蓝牙音响",
            desc: "产品设计",
            pics: "01.jpg"
        },
        // 15
        {
            id: 15,
            title: "智能平衡机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },
        {
            id: 16,
            title: "智能早教机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 17,
            title: "电子烟",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 18,
            title: "可爱移动电源",
            desc: "产品设计",
            pics: "01.jpg,02.jpg"
        },
        // 19
        {
            id: 19,
            title: "无人机遥控手柄",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 20,
            title: "游戏充电器",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 21,
            title: "智能插座",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg"
        },
        {
            id: 22,
            title: "英式插座",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        },
        {
            id: 23,
            title: "蓝牙键盘",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg"
        },
        {
            id: 24,
            title: "蓝牙键盘",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg"
        },
    ]

    var otherData = [
        {
            id: 1,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg"
        },{
            id: 2,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },{
            id: 3,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },{
            id: 4,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },{
            id: 5,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg"
        },{
            id: 6,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg"
        },{
            id: 7,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg"
        },{
            id: 8,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg,04.jpg"
        },{
            id: 9,
            title: "绘本阅读机器人",
            desc: "产品设计",
            pics: "01.jpg,02.jpg,03.jpg"
        }
    ]

    var zeroize = function(num) {
        return num < 10 ? '0' + num : num;
    }

    var render = function(ele, catalog, data, showText, callback){
        var html = '';
        for(var i = 0; i < data.length; i++) {
            html += i % 3 === 0 ? (i === 0 ? '' : '</ul>') + '<ul>' : '';
            html += '<li class="pic-wrap" data-bigimages="' + data[i].pics + '" data-direct="' + (i+1) + '">';
            html +=    '<div class="pic-body">';
            html +=        '<img src="./case/' + catalog +'/' + (i+1) + '.jpg" alt="">';
            html +=        showText ? '<div class="description">' : '<div class="description" style="display: none">';
            html +=            '<h3>' + data[i].title + '-' +(i+1)+ '</h3>';
            html +=            '<p>' + data[i].desc + '</p>';
            html +=         '</div>';
            html +=     '</div>';
            html += '</li>';
        }
        html += '</ul>';
        ele.html(html);
        callback();
    }
    render($('.showing') ,'1', showingData, true, function(){
        var show1 = new Zoom({
            direct: "./case/1/",
            element: ".showing"
        })
    })
    render($('.other') ,'2', otherData, false, function(){
        var show2 = new Zoom({
            direct: "./case/2/",
            element: ".other"
        })
    })
})(jQuery)