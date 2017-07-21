$("#all").hide();

$("h1").click(function(){
    alert("You have found a secret fun fact! Annie's birthday is on October 30th!");
});

$("img").click(function(){
    alert("You have found a secret fun fact! Annie has two siblings!"); });

$("#guess_button").click(function() {
    var input = $("#inputbox").val();
    var magicnumber = "seal";
    
    if (input === magicnumber){$("#all").show();
    $("p").html("Congrats!");
    $("#login").hide();
    }
    
    else if (input !== magicnumber){
        $("p").html("Nope! My favorite animals are seals! Try again! :)");
    }
});
