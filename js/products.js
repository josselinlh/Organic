(function(){
$(".productGallery").click(function(){

    var attr = $(this).attr("name");
    if(localStorage.getItem(attr) !== null)
    {
        localStorage.setItem(attr,parseInt(localStorage.getItem(attr))+1);
        console.log("if : "+attr);
        console.log(localStorage);
    }
    else
    {
        localStorage.setItem(attr,1);
        console.log("else : "+attr);
        console.log(localStorage);


    }

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
