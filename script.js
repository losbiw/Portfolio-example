window.onload = function(){
    var buttons = document.querySelectorAll('.quotes .buttons button');
    console.log(buttons[3]);
    var portfolio = document.querySelectorAll('.portfolio .container div');
    $('.top .navbar .links a').hover(
        function(){
            $(this).css('color', '#10c9c3');
            $(this).css('font-size', '16px');
            $(this).css('transition', '800ms');
        },
        function(){
            $(this).css('color', 'black');
            $(this).css('font-size', '15px');
            $(this).css('transition', '800ms');
        }
    );

    $(portfolio).hover(
        function(){
            var link = jQuery('a', this);
            var overlay = jQuery('.overlay', this);
            $(this).css('transition', '600ms');
            $(link).css('display', 'block');
            $(overlay).css('opacity', '1');
        },
        function(){
            var link = jQuery('a', this);
            var overlay = jQuery('.overlay', this);
            $(link).css('display', 'none');
            $(overlay).css('opacity', '0');
        }
    );

    $(buttons).click(function(){
        $(buttons).css('width', '8px');
        $(buttons).css('height', '12px');
        $(buttons).css('border-radius', '6px');
        $(buttons).css('background', '#d8d8d8');
        $(this).css('width', '20px');
        $(this).css('height', '20px');
        $(this).css('border-radius', '10px');
        $(this).css('background', 'white');
        $(this).css('transition', '500ms');
    });

    $(buttons[0]).click(function(){
        $('.quotes .container q').text('Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program');
        $('.quotes .container p').text('linus torvalds');
    });
    $(buttons[1]).click(function(){
        $('.quotes .container q').text('Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.');
        $('.quotes .container p').text('michael hopkins');
    });
    $(buttons[2]).click(function(){
        $('.quotes .container q').text('Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves.');
        $('.quotes .container p').text('steve jobs');
    });

    $('.input .container button').click(function(){
        $('#name').val("");
        $('#email').val("");
        $('#title').val("");
        $('#com').val("");
    });
    AOS.init();
}