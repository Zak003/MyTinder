$(function(){

    var $activeSlide = $('#slides .slide:first-child');

    $(".match-tile").on("click", function(){
        var account_id = $(this).data("id");

        $.ajax({
            url: "/get/conversation/"+account_id,
            method: "post",
            dataType: "script"
        })
    });

    $(".profile-info").on("click", function(){
        var $details = $(this).closest(".slide").find(".more-details");

        $details.toggle();

        //move controls down
        $("#slide-controls").toggleClass("open");
    });

    $(".open-conversation").on("click", function(){
        var account_id = $(this).data("id");

        $.ajax({
            url: "/get/conversation/"+account_id,
            method: "post",
            dataType: "script"
        })
    });

    $("#close-conversation").on("click", function(){
        $("#conversation").hide();
    });

    $("#close-alert").on("click", function(){
        $("#alert").hide();
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

    $(".profile_picture").on("click", function(){
        var account_id = $(this).data("id");

        $.ajax({
            url: "/get/profile_show/"+account_id,
            method: "post",
            dataType: "script"
        })

        $("#profile_show").show();
    });

    $("#close-profile-show").on("click", function(){
        $("#profile_show").hide();
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