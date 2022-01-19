$(function(){

    var $activeSlide = $('#slides .slide:first-child');

    //show first slide
    //$activeSlide.addClass("showing");

    $("#decline").on("click", function(){
        console.log("decline");
        goToSlide('decline');
    });

    $("#approve").on("click", function(){
        var user_id = $activeSlide.data("id");

        //beleženje id-ja od userja, ki lajka
        console.log(user_id);
        $.ajax({
            url: "/approve/" + user_id,
            method: "post",
            dataType: "ajax"
        });
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