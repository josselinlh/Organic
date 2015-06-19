(function(){

var appName = "Organic Truck";

var organicMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.782023537872!2d3.0601460000000005!3d50.63116600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58508b740c1%3A0x5e9f0f5d8d3b698c!2sParking+R%C3%A9publique!5e0!3m2!1sfr!2sfr!4v1434718484013" width="600" height="450" frameborder="0" style="border:0"></iframe>';

var product ="<p>Nos produits</p><p>Nos produits</p><p>1</p><p>Nos produits</p><p>Nos produits</p><p>2</p><p>Nos produits</p><p>3</p><p>Nos produits</p><p>4</p><p>Nos produits</p><p>Nos produits5</p><p>Nos produits</p><p>Nos produits6</p><p>Nos produits</p><p>Nos produits7</p>"

var Articles = [new ArticleMetro("Où nous trouver?", organicMap,0),
				new ArticleMetro("Nos produits", product,1),
				new ArticleMetro("Nos producteurs", "<p>Nos producteurs</p>",2),
				new ArticleMetro("Partage de nos recettes", "<p>Hello world</p>",3),
				new ArticleMetro("Qui sommes nous?", "<p>Nos produits</p>",4),
				new ArticleMetro("Partenaires", "<p>Nos partenaires</p>",5)];

    orderArticles(Articles);

function orderArticles(tab)
    {
        var lastColor = 0;
        for(var count = 0; count < tab.length; count++)
            {
                if(tab[count].getColor()==lastColor)
                    {
                        tab[count].setColor(lastColor%4+1);
                                console.log("changeColor count = "+count);
                                console.log("lastColor : "+lastColor);
                        console.log("getColor : "+tab[count].getColor());


                    }
                lastColor = tab[count].getColor();

                 if(count%3==0)
                {
                    tab[count].setContent(2);
                }
            }

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
