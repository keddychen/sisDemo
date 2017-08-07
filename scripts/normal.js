$(function(){
    $('.pre-btn').on('click',function(){
        window.location.href='createJianyi.html';
    });
    $('.sure-btn').on('click',function(){
        window.location.href='../pages/product_descript.html';
    });
    $('.pic-btn').on('click',function(){
        $('.pages1').hide();
        $('.pages2').show();
    });
    $('.client-pic').on('click',function(){
        $('.pages1').show();
        $('.pages2').hide();
    });
    $(".product-menu li").on("click",function(){
        $('.product-content2').hide();
        $('.product-content1').show();
        $(this).addClass("current").siblings().removeClass("current");
        $('.product-content div').eq($(this).index()).show().siblings().hide();
    });
    $('.product-content div').on('click',function(){
        $('.product-content2').show();
        $('.product-content1').hide();
    });
    $('.product-article-nav li').on('click',function(){
        $(this).addClass("current").siblings().removeClass("current");
        $('.product-ar-content div').eq($(this).index()).show().siblings().hide();
        $('.pr-ar-button ul').eq($(this).index()).show().siblings().hide();
    });

    $('.liyi-inwrap button').on('click',function(){
        $(this).addClass("current").siblings().removeClass("current");
        if($(this).hasClass('manqi')){
            $('.product-ar-liyi').css('background-image','url(../styles/images/b3.jpg)');
        }else if($(this).hasClass('shengu')){
            $('.product-ar-liyi').css('background-image','url(../styles/images/b2.jpg)');
        }else if($(this).hasClass('fenhong')){
            $('.product-ar-liyi').css('background-image','url(../styles/images/b4.jpg)');
        }
    });

    $('.product-content2').on('click',function(){
        window.location.href='../pages/product_article.html';
    });
    $('.pd-ar-pre').on('click',function(){
        $(".product-article-nav li").eq(0).click();
    });

    $('.p-a-next').on('click',function(){
        $(".product-article-nav li").eq(1).click();
    });
    $('.pic-btn-1').on('click',function(){
        $(".product-article-nav li").eq(2).click();
    });
    $('.wrapper3 li,.wrapper4 li,.pd-ar-sh').on('click',function(){
        $(".pop").show();
    });
    $(".pop_can_hide").on("click",function(){
    	$(this).hide();
    });
    $(".share_go").on("click",function(){
    	location.href="product_share.html";
    });
    $('.share-box div').on('click',function () {
        $(this).addClass('share-chat');
    });

});