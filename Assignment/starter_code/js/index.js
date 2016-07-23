
//
$(document).ready(function(){

    $("a").click(event.preventDefault());

    $(".readmore").click(function(){
        $("#show-this-on-click").slideDown("slow", function() {
            $(".readless").fadeIn("slow");
        });
        $(".readmore").fadeOut("slow");

    });

    $(".readless").click(function(){
        $("#show-this-on-click").slideUp("slow", function () {
        	$(".readmore").fadeIn("slow");
        });
        $(".readless").fadeOut("slow");

    });

    $(".learnmore").click(function(){
        $("#learnmoretext").slideDown("slow");
        $(".learnmore").hide();

    });

});