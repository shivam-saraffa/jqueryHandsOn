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


    $('#div4').click(function(){        
        if ($('#input4').is(':checked')) {     
            $(this).css('background-color','#4590c4')
            $('#div3').css('background-color','#60a2ae')           
            $('#div5').css('background-color','#60a2ae')           
            $('#div6').css('background-color','#60a2ae')           
            $('#div7').css('background-color','#60a2ae')            
        } 
    })
    $('#div5').click(function(){        
        if ($('#input5').is(':checked')) {     
            $(this).css('background-color','#4590c4')
            $('#div3').css('background-color','#60a2ae')           
            $('#div4').css('background-color','#60a2ae')           
            $('#div6').css('background-color','#60a2ae')           
            $('#div7').css('background-color','#60a2ae')           
        } 
    })
    $('#div6').click(function(){        
        if ($('#input6').is(':checked')) {     
            $(this).css('background-color','#4590c4')
            $('#div3').css('background-color','#60a2ae')           
            $('#div4').css('background-color','#60a2ae')           
            $('#div5').css('background-color','#60a2ae')           
            $('#div7').css('background-color','#60a2ae')           
        } 
    })
    $('#div7').click(function(){        
        if ($('#input7').is(':checked')) {     
            $(this).css('background-color','#4590c4')
            $('#div3').css('background-color','#60a2ae')           
            $('#div4').css('background-color','#60a2ae')           
            $('#div5').css('background-color','#60a2ae')           
            $('#div6').css('background-color','#60a2ae')           
        } 
    })

    
    $('#div4').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
    $('#div5').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
    $('#div6').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
    $('#div7').hover(function(){
        $(this).css('position','relative');
        $(this).css('left','2px');
        $(this).css('top','2px');
    },function(){
        $(this).css('position','relative');
        $(this).css('left','0');
        $(this).css('top','0');

    });
}