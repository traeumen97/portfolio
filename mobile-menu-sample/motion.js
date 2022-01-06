$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});
