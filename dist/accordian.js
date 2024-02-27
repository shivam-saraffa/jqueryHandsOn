$('document').ready(main);

let opened=0
function main(){
    function hide1(){$("#hidden_div1").hide();}
    function hide2(){$("#hidden_div2").hide();}
    function hide3(){$("#hidden_div3").hide();}
    function hide4(){$("#hidden_div4").hide();}
    function hide5(){$("#hidden_div5").hide();}
    function hide6(){$("#hidden_div6").hide();}
    function hide7(){$("#hidden_div7").hide();}
    function hide7(){$("#hidden_div7").hide();}
    function show1(){$("#hidden_div1").show();}
    function show2(){$("#hidden_div2").show();}
    function show3(){$("#hidden_div3").show();}
    function show4(){$("#hidden_div4").show();}
    function show5(){$("#hidden_div5").show();}
    function show6(){$("#hidden_div6").show();}
    function show7(){$("#hidden_div7").show();}

    $("#accordian1").click(()=>{
        hide6();hide2();hide3();hide4();hide5();hide7();
        show1();
    })
    $("#accordian2").click(()=>{
        hide6();hide1();hide3();hide4();hide5();hide7();
        show2();
    })
    $("#accordian3").click(()=>{
        hide6();hide2();hide1();hide4();hide5();hide7();
        show3();
    })
    $("#accordian4").click(()=>{
        hide6();hide2();hide3();hide4();hide5();hide7();
        show4();
    })
    $("#accordian5").click(()=>{
        hide6();hide2();hide3();hide4();hide5();hide7();
        show5();
    })
    $("#accordian6").click(()=>{
        hide1();hide2();hide3();hide4();hide5();hide7();
        show6();
    })
    $("#accordian7").click(()=>{
        hide6();hide2();hide3();hide4();hide5();hide1();
        show7();
    })
}