$(function(){

    var $activeSlide = $('#slides .slide:first-child');

    //show first slide
    //$activeSlide.addClass("showing");

    $("#decline").on("click", function(){
        goToSlide('decline');
    });

    $("#approve").on("click", function(){
        goToSlide('approve');
    });

    function goToSlide(action) {
        $activeSlide.removeClass("showing");
        $activeSlide = $activeSlide.next(".slide");

        //send data to controller
        if(action == "approve"){
            console.log(action);    //izpiše v konzoli approve 
        }else{
            console.log(action);    //izpiše v konzoli decline 
        }

        $activeSlide.addClass("showing");
    }
});