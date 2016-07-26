$(document).ready(function(){
  // Good job using $(document).ready!

    $("a").click(event.preventDefault());

    // Nice job using event.preventDefault() across all the links at once! This definitely can help to make your code cleaner and stops you from having to repeat yourself. My one note is that this could cause problems if you wanted to add a link on your page that you want to work normally--if you tried to link off your page, this would prevent it from working.

    $(".readmore").click(function(){
        $("#show-this-on-click").slideDown("slow", function() {
            $(".readless").fadeIn("slow");
        });
        $(".readmore").fadeOut("slow");
    });

    // Great job using .fadeOut and .fadeIn for the readmore and readless elements! It looks awesome, and it's great that you're exploring other jQuery methods.

    $(".readless").click(function(){
        $("#show-this-on-click").slideUp("slow", function() {
          $(".readmore").fadeIn("slow");
        });
        // You don't necessarily need to put this code inside of the slideUp method, but it totally works if you want to!
        $(".readless").fadeOut("slow");
    });

    $(".learnmore").click(function(){
        $("#learnmoretext").slideDown("slow");
        $(".learnmore").hide();
    });

    // Next time, maybe give named functions and callback a shot! I personally prefer them; I think it keeps your code a bit cleaner and gives you the ability to reuse functions in other places on your page.

});
