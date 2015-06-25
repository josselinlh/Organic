(function(){
$(".productGallery .fa-cart-arrow-down").click(function(){

    var attr = $(this).attr("name");
    panier.addProducts(attr);
    $(".compte")
        .html("<p>Panier ("+panier.getPrix()+"€)</p>")
        .css("background-color", "#f2b30e")
        .delay(400)
        .queue(function(next)
        {
            $(this).css({background: "transparent",
                         transition: "background 1s"});
            next();
        });

    /*animate({
        backgroundColor: "#f2b30e"
    }, 1000);*/
    //css("background-color", "#f2b30e");
    //carrotes --> 9443
    //patate --> 5990
    //soupe tomate --> 6903
    //betterave --> 8554
    //chou --> 6417
    //poireaux --> 6587
    //endive --> 4586
    //concombre --> 7675

});
})();
