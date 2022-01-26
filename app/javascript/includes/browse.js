$(function(){

    var $activeSlide = $('#slides .slide:first-child');

    $(".match-tile").on("click", function(){
        var account_id = $(this).data("id");

        $.ajax({
            url: "/get/conversation/"+account_id,
            method: "post",
            dataType: "script"
        })
    })

    $(".open-conversation").on("click", function(){
        var account_id = $(this).data("id");

        $.ajax({
            url: "/get/conversation/"+account_id,
            method: "post",
            dataType: "script"
        })
    })

    $("#close-conversation").on("click", function(){
        $("#conversation").hide();
    });

    $("#decline").on("click", function(){
        var user_id = $activeSlide.data("id");

        $.ajax({
            url: "/decline/" + user_id,
            method: "post",
            dataType: "ajax"
        });

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