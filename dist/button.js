$('document').ready(main);

function main () {
    $('#btn1').hover(function(){
        $(this).css('background-color','#cecace')
    },function(){
        $(this).css('background-color','transparent')
    })
    $('#btn1').click(function(){
        $(this).css('background-color','#acb0c5')
        $(this).css('position','relative')
        $(this).css('left','2px')
        $(this).css('top','2px')
        setTimeout(() => {
            $(this).css('background-color','transparent')
            $(this).css('position','relative')
            $(this).css('left','0')
            $(this).css('top','0')
        }, 200);
    })


    $('#btn2').hover(function(){
        $(this).css('background-color','#cecace')
    },function(){
        $(this).css('background-color','transparent')
    })
    $('#btn2').click(function(){
        $(this).css('background-color','#acb0c5')
        $(this).css('position','relative')
        $(this).css('left','2px')
        $(this).css('top','2px')
        setTimeout(() => {
            $(this).css('background-color','transparent')
            $(this).css('position','relative')
            $(this).css('left','0')
            $(this).css('top','0')
        }, 200);
    })
}