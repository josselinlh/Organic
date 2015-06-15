(function(){

var textMenu = ["Bannière Organic Truck",
				"L'organic Truck",
				"Richesse Locale",
				"Partage des Recettes",
				"Qui sommes nous?"];

$(document).ready(function(){
  TweenLite.to($("#caption"),0,{css:{top:0},delay:0, ease:Power2.easeOut});
  $("#backbutton").hide();
  //TweenLite.to($("#btn1"),2,{css:{left:0},delay:0, ease:Power2.easeOut});
  //TweenLite.to($("#btn2"),2,{css:{left:20},delay:0, ease:Power2.easeOut});
  //TweenLite.to($("#btn3"),2,{css:{left:40},delay:0, ease:Power2.easeOut});
  //TweenLite.to($("#btn4"),2,{css:{left:0},delay:0.5, ease:Power2.easeOut});

  });

function clickToButton(i, show)
{
   show = typeof show !== 'undefined' ? show : 0;

	if(show==0){$("#backbutton").show("slow");}
	else{$("#backbutton").hide("slow");}

	toggleContentAndButtons();
	$("#caption").fadeTo("slow",0, function(){
		$(this).text(textMenu[i]);
		$(this).fadeTo("slow",1);

	});
	TweenLite.to($("#content"),0.5,{css:{top:show}, ease:Power2.easeOut});

}

function toggleContentAndButtons()
{
	$("#content, #buttonsToContent").slideToggle("slow");
}
  $("#btn1").click(function(){
	clickToButton(1);
  });

  $("#btn2").click(function(){
	clickToButton(2);
  });

  $("#btn3").click(function(){
 	clickToButton(3);
  });

  $("#btn4").click(function(){
	clickToButton(4);

  });


   $("#backbutton").click(function(){
		clickToButton(0,500);
	});

})();
