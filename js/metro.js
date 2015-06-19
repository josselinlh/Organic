(function(){

var appName = "Organic Truck";

var Articles = [new ArticleMetro("Où nous trouver?", "<p>Hello world</p>",0),
				new ArticleMetro("Nos produits", "<p>Nos produits</p>",1),
				new ArticleMetro("Nos producteurs", "<p>Nos producteurs</p>",2),
				new ArticleMetro("Partage de nos recettes", "<p>Hello world</p>",3),
				new ArticleMetro("Qui sommes nous?", "<p>Nos produits</p>",4),
				new ArticleMetro("Partenaires", "<p>Nos partenaires</p>",5)];

    orderArticles(Articles);

function orderArticles(tab)
    {
        console.log("changeColor");
    }

function clickToButton(i)
{

	$("#backbutton").show("slow");
	$("#contentApp").html(Articles[i].getArticleContent());
	toggleContentAndButtons();
	changeTopTitle(Articles[i].getTitle());
}

function clickToBackButton(i)
{
	$("#backbutton").hide();
	toggleContentAndButtons();
	changeTopTitle(appName);
}

function changeTopTitle(str)
{
	$("#caption").fadeTo("slow",0, function(){
		$(this).text(str);
		$(this).fadeTo("slow",1);

	});
}

function toggleContentAndButtons()
{
	$("#contentApp, #buttonsToContent").slideToggle("slow");
}

$(document).ready(function(){
  $("#backbutton").hide();

  var tmpStr = "";
  for(var count =0; count<Articles.length; count++)
  {
	tmpStr = tmpStr + Articles[count].getContent();
  }

  $("#buttonsToContent").html(tmpStr);
  $(".btnMetro").click(function(){clickToButton(this.id);})
  $("#backbutton").click(function(){clickToBackButton();})


  });

})();
