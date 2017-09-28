

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


    $('.ga01').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj1.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });


    $('.ga02').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj2.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga03').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj3.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga04').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj4.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga05').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj5.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga06').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj6.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga07').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj7.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga08').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj8.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga09').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj9.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga10').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj10.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga11').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj11.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga12').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj12.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga13').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj13.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga14').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj14.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });
    $('.ga15').click(function(e){ 
        e.preventDefault();
        console.log("entra a click");

        $.get( "pagegallery/proj15.html", function( data ) {
            console.log("entra a get");
            $( ".contentload" ).html( data );
            $(".contentFloat").show();
        });

    });







    var winWidth  = 0;
    var winHeight = 0;
    var indexPage = 0;
    sizeChanges();
    $(window).resize(function() { sizeChanges(); });
    function sizeChanges(){
        winWidth  = $(window).width();
        winHeight = $(window).height();
        var pages = $(".page-container").length;


        $(".contentFloat")
            .width( winWidth-50 )
            .height( winHeight-50 )
            .css({'margin-top': -((winHeight-50)/2), 'margin-left': -((winWidth-50)/2)  });


        $(".page-container")
            .width( winWidth )
            .height( winHeight );

        $(".pages-container")
            .width( winWidth * pages )
            .height( winHeight )
            .css({left: -winWidth * indexPage});


    }// sizeChanges
    function gotoScreen (page) {
        indexPage = page;
        if(page == 1) {
            winWidth = $(".page-main").width();
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






