
function sssdj(dom,classs,clas){
    var top = 0;
    var gettop = $('.'+dom).offset().top;
    if(gettop+top-$(window).height()<sec){
        $('.'+clas).addClass(classs);
    }
    if(gettop+top+ $('.'+dom).height() < sec || gettop + top - $(window).height() > sec){
        $('.'+clas).removeClass(classs);
    }
}
$(window).scroll(function(e){
    sec = $(window).scrollTop();
    sssdj('shou4-main',"shou4-lun0","shou4-Dlun0");
    sssdj('shou4-main',"shou4-lun1","shou4-Dlun1");
    sssdj('shou4-main',"shou4-lun2","shou4-Dlun2");
    sssdj('shou4-main',"shou4-lun3","shou4-Dlun3");
    sssdj('shou4-xp2',"shou4-x1","shou4-Dx1");
    sssdj('shou4-xp2',"shou4-x2","shou4-Dx2");
    sssdj('shou4-xp2',"shou4-x3","shou4-Dx3");
    sssdj('shou4-xp2',"shou4-x4","shou4-Dx4");
    sssdj('shou4-p',"shou4-op1","shou4-Dop1");
    sssdj('shou4-p',"shou4-op2","shou4-Dop2");
    sssdj('shou4-p',"shou4-op3","shou4-Dop3");
    sssdj('shou4-p',"shou4-op4","shou4-Dop4");
    // .........shou3............

    sssdj('s1',"shou3-Dl1","oli0");
    sssdj('s2',"shou3-Dl1","oli1");
    sssdj('s3',"shou3-Dl1","oli2");
    sssdj('s4',"shou3-Dl1","oli3");
    sssdj('s5',"shou3-Dl1","oli4");
    sssdj('s6',"shou3-Dl1","oli5");


    // .........shou2............
    sssdj('shou2-dong',"shou2-ol1","shou2-d1");
    sssdj('shou2-dong',"shou2-ol1","shou2-d2");
    // ..............banner.............
    sssdj('banner-p',"ban-left0","ban-d1");
    sssdj('banner-p',"ban-left0","ban-p2");
    sssdj('banner-p',"ban-left1","ban-d2");
    sssdj('banner-p',"ban-left2","ban-d3");

    // ..............shou8.............
    sssdj('s8-1',"shou8-D","span0");
    sssdj('s8-2',"shou8-D","span1");
    sssdj('s8-3',"shou8-D","span2");
    sssdj('s8-1',"shou8-2","sh8-p1");
    sssdj('s8-2',"shou8-2","sh8-p2");
    sssdj('s8-3',"shou8-2","sh8-p3");
    // ...........第二页。。oLi0.。。。
    sssdj('oxin1',"xinxin","xin1");
});