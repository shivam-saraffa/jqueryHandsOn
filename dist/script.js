//only runs after the html document has loaded to avoid any bugs.
$('document').ready(main); 


function main () {
    $("#btn1").click(func1);
    // $("#btn2").click(func2);
    $("#btn2").click(function(){
        $(this).hide();
        console.log("shivam")
    });
    function func1(){
        $("img").fadeToggle(); 
    }
    // function func2(){
    //     $("#container").fadeToggle();
    // }
    
}