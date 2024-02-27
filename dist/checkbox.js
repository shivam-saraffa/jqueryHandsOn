$('document').ready(main);

function main () {

    $('#div1').click(function(){
        if($('#input1').is(":checked")){
            $(this).css('background-color','#4590c4')
        }else{
            $(this).css('background-color','#60a2ae')
        }
    });
    $('#div2').click(function(){
        if($('#input2').is(":checked")){
            $(this).css('background-color','#4590c4')
        }else{
            $(this).css('background-color','#60a2ae')

        }
    });
    $('#div1').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
    $('#div2').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
}