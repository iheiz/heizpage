

$(function() {
    Holder.run({
        domain: "holder.canvas",
        renderer: "canvas"
    });



    $('div .close').click(function(e){
        e.preventDefault();
        $(this).parent().hide();
    });




    $('.scrollbar-macosx').scrollbar();

    $('.clk_home').click(function(e){setActive(""); e.preventDefault(); $('.menuTop').slideUp( "fast" ); gotoScreen(0); });
    $('.clk_bio').click(function(e){setActive(".clk_bio");    e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(1); });
    $('.clk_galeria').click(function(e){setActive(".clk_galeria"); e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(2); });
    $('.clk_investigacion').click(function(e){setActive(".clk_investigacion"); e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(3); });
    $('.clk_estrategia').click(function(e){setActive(".clk_estrategia"); e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(4); });

    function setActive(label){
        $('.clk_bio').removeClass("active");
        $('.clk_galeria').removeClass("active");
        $('.clk_investigacion').removeClass("active");
        $('.clk_estrategia').removeClass("active");

        $(label).addClass("active");
    }


    $('.clk_instagram').click(function(e){ e.preventDefault(); window.open('https://instagr.am/iheiz/', '_blank'); });
    $('.clk_be').click(function(e){ e.preventDefault(); window.open('https://behance.net/Heiz', '_blank'); });
    $('.clk_mail,.email').click(function(e){
        e.preventDefault();
        var email = 'iheiz@icloud.com';
        var subject = 'Contacto desde Página Web de Heiz';
        var emailBody = "Hey Heiz:" + escape('\r\n');
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        //window.open('', '_blank');
    });

    /*var photoBio=1;
    $(".esimg1").click(function(e){
        e.preventDefault();
        photoBio++;
        $(this).attr( "src", "images/bio"+photoBio+".jpg" );
        photoBio = (photoBio==3)?0:photoBio;
    });*/


    $("a").click(function(){
        $(this).css("color","gray");

    });

    $("a").hover(function(){
        $(this).css("color","#696969");
    },function(){
        $(this).css("color","black");
    });





    var winWidth  = 0;
    var winHeight = 0;
    var indexPage = 0;
    sizeChanges();
    $(window).resize(function() { sizeChanges(); });
    function sizeChanges(){
        winWidth  = $(window).outerWidth();
        winHeight = $(window).height();
        var pages = $(".page-container").length;


        $(".contentFloat")
            .width( winWidth-50 )
            //.height( winHeight-50 )
            .css({'margin-top': -((winHeight-50)/2), 'margin-left': -((winWidth-50)/2)  });


        $(".page-container")
            //.width( winWidth );
            //.height( winHeight );

        $(".pages-container")
            //.width( winWidth * pages )
            //.height( winHeight );
            .css({left: -winWidth * indexPage});


    }// sizeChanges
    function gotoScreen (page) {
        indexPage = page;
        if(page === 1) {
            winWidth = $(".page-main").width();
        }
        if(page === 2) {
            winWidth = $(".page-galeria").width();
        }
        if(page === 3) {
            winWidth = $(".page-investigacion").width();
        }
        if(page === 4) {
            winWidth = $(".page-estrategia").width();
        }
        $('.pages-container').animate({left: -winWidth * page}, "slow", function() {  });
    }// gotoScreen


    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });



});









/* new Script Page*/
$('.click').on("click",function(){
    var pageOld = $('.click.active').attr('data-page');
    var pageNew = $(this).attr('data-page'); 
    if(pageOld == undefined){
        pageOld = 'page-menu'
    }
    animate(pageOld,pageNew)
});
$('.gaimg').on("click",function(){
    var slide = $(this).attr('data-slide');
    slideGallery(slide)
});
function slideGallery(number){
    $('.page-gallery-content').addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.page-gallery-content').css('display','none').removeClass('fadeOutLeft animated');
        $('.page-gallery-content .carousel-inner').html('');
    });
    setTimeout(function(){
        for (i = 0; i < dataSlider.length; i++) { 
            if(dataSlider[i].id = number){
                $('.page-gallery-content .title').html(dataSlider[i].title);
                $('.page-gallery-content .description').html(dataSlider[i].description);
                for (j = 0; j < dataSlider[i].images.length; j++) { 
                    $('.page-gallery-content .carousel-inner').append('<div class="item active"><img alt="'+dataSlider[i].images[j].title+'" src="'+dataSlider[i].images[j].image+'"><div class="carousel-caption"><h3>'+dataSlider[i].images[j].title+'</h3></div></div>');
                }
                break
            }
        }
        $(".page-gallery-content").css('display','block').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(".page-gallery-content").css('display','block').removeClass('fadeInRight animated');
        });
    }, 1100);
};
function animate(pageOld,pageNew){
    $('.'+pageOld).addClass('fadeOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.'+pageOld).css('display','none').removeClass('fadeOutLeft animated');
    });
    setTimeout(function(){
        $('.'+pageNew).css('display','table-cell').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.'+pageNew).css('display','table-cell').removeClass('fadeInRight animated');
        });
    }, 1100);
}
var dataSlider = [
     {
        id:1,
        title:'The Becatles poster 1',
        description:'Duis sit amet bibendum magna. Donec eget diam nisi. Cras auctor, sem et tempus aliquet, lorem metus porttitor nulla, vitae fermentum nisi arcu id mi. Nullam sit amet tellus et eros varius vulputate. Fusce ac tortor semper, sagittis massa vel, mattis risus. Cras ac neque ut tellus tristique facilisis sit amet vitae magna. Donec laoreet nulla in tortor bibendum, quis ullamcorper nulla vulputate.',
        images:[
             {
                 image:'uno.jpg',
                 title: 'interior'
             },{
                 image:'uno.jpg',
                 title: 'interior'
             },{
                 image:'uno.jpg',
                 title: 'interior'
             }
         ]
     }
]