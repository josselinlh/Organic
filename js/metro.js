(function(){

var appName = "Organic Truck";

var organicMap = ['<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.782023537872!2d3.0601460000000005!3d50.63116600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58508b740c1%3A0x5e9f0f5d8d3b698c!2sParking+R%C3%A9publique!5e0!3m2!1sfr!2sfr!4v1434720817969" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.628702041975!2d3.021058!3d50.634014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d55c0d84d577%3A0x8b10cbcee7717a6b!2sEuraTechnologies!5e0!3m2!1sfr!2sfr!4v1434721044176" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6932507231572!2d3.046525999999992!3d50.632815000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x941ce6543ee12a17!2sUniversit%C3%A9+Catholique+de+Lille!5e0!3m2!1sfr!2sfr!4v1434721204835" width="800" height="600" frameborder="0" style="border:0"></iframe>'];

var product ="\
<div class='productGallery'><img class='img-circle img-responsive' src='img/carrots.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/potatoes.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/soup.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/betterave.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/chou.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/oignons.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/endives.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div class='productGallery'><img class='img-circle img-responsive' src='img/cucumbers.jpg' />\n\
<div class='productGalleryToggleButton'><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>";

var Articles = [new ArticleMetro("Où trouver l'organic Truck?", organicMap[1],0),
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
