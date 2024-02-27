$('document').ready(main);

function main () {

    // var valueToCheck = "value1"; // The value you want to check
    // if ($('#').is(':checked')) {
    //     $("#input4").css('background-color','#4590c4')
    //     console.log("Checkbox with value " + valueToCheck + " is checked");
    // } else {
    //     $(this).css('background-color','#60a2ae')
    //     console.log("Checkbox with value " + valueToCheck + " is not checked");
    // }


    $('#div3').click(function(){        
        if ($('#input3').is(':checked')) {     
            $(this).css('background-color','#4590c4') 
            $('#div4').css('background-color','#60a2ae')           
        } else {
            $(this).css('background-color','#60a2ae')
        }
    })
    $('#div4').click(function(){        
        if ($('#input4').is(':checked')) {     
            $(this).css('background-color','#4590c4')
            $('#div3').css('background-color','#60a2ae')           
        } else {
            $(this).css('background-color','#60a2ae');
        }
    })

    $('#div3').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
    $('#div4').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
}