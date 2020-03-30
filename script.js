const portoflioItems = $('#portfolio .item');

$(portoflioItems).hover(function(){
    $('.overlay', this).css('display', 'flex');
}, function(){
    $('.overlay', this).css('display', 'none');
});

changeQuote();

function changeQuote(){
    const quotes = [{
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: 'Albert Einstein'
    },
    {
        quote: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
        author: 'michael hopkins'
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        author: 'martin luther king jr.'
    }];
    const buttons = $('#quotes button');
    buttons.click(function(){
        const id = $(this).attr('id');
        $('#quotes q').text(quotes[id].quote);
        $('#quotes p').text(quotes[id].author);
    });
}