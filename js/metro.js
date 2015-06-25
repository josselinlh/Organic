(function(){

var appName = "Organic Truck";

var organicMap = ['<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.782023537872!2d3.0601460000000005!3d50.63116600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58508b740c1%3A0x5e9f0f5d8d3b698c!2sParking+R%C3%A9publique!5e0!3m2!1sfr!2sfr!4v1434720817969" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.628702041975!2d3.021058!3d50.634014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d55c0d84d577%3A0x8b10cbcee7717a6b!2sEuraTechnologies!5e0!3m2!1sfr!2sfr!4v1434721044176" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6932507231572!2d3.046525999999992!3d50.632815000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x941ce6543ee12a17!2sUniversit%C3%A9+Catholique+de+Lille!5e0!3m2!1sfr!2sfr!4v1434721204835" width="800" height="600" frameborder="0" style="border:0"></iframe>'];

var product ="\
<div name='9443' class='productGallery'><img class='img-circle img-responsive' src='img/carrots.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>1,20 € / kg</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='5990' class='productGallery'><img class='img-circle img-responsive' src='img/potatoes.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>1,30 € / kg</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='6903' class='productGallery'><img class='img-circle img-responsive' src='img/soup.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>3,00 € / kg</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='8554' class='productGallery'><img class='img-circle img-responsive' src='img/betterave.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>1,50 € / kg</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='6417' class='productGallery'><img class='img-circle img-responsive' src='img/chou.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>1,50 € / kg</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='9887' class='productGallery'><img class='img-circle img-responsive' src='img/oignons.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>Indisponnible</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='9887' class='productGallery'><img class='img-circle img-responsive' src='img/endives.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>Indisponnible</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div>\n\
<div name='4586' class='productGallery'><img class='img-circle img-responsive' src='img/cucumbers.jpg' />\n\
<div class='productGalleryToggleButton'><p class='prixProduct'>Indisponnible</p><i class='fa fa-cart-arrow-down fa-lg'></i><i class='fa fa-info-circle fa-lg'></i></div></div><script type='text/javascript' src='js/products.js'></script>";

var recette ="<div class='partagedenosrecettes'><h1>Tarte poireau maroille</h1><img class='img-circle img-responsive' src='img/tarte poireau maroielle.jpg' /><p>Ingrédients : 5 poireaux de taille moyenne Un quart maroilles 10g de beurre 2 cuillères à soupe de crème fraiche épaisse 1 pâte brisée Sel, poivre 1 noix de muscade et 200g de lardon</p><p> Préparation : </p><p> Emincez les poireaux en fines rondelles.</p><p> Coupez le maroilles en fines tranches dans le sens de la longueur.</p><p> Dans une casserole, faites fondre la motié du beurre à feux doux puis versez les poireaux.</p><p> Couvrez et laissez cuire 10 minutes en remuant.</p><p> Une fois que les poireaux sont cuits, incorporez la crème fraiche, salez et poivrez. </p><p> Etalez la pâte dans un plat à tarte que vous aurez beurré.</p><p> Piquez la pâte puis versez-y les poireaux.</p><p> Répartissez les morceaux de maroilles.</p><p> Faites cuire à 180°C (th6) pendant 25 à 30 minutes. Servez chaud :) <3 <3 <3 </p></div>";

var about = "<p>L’Organic Truck est un concept inventé par des étudiants de l’ISEN.</p><p>L’Organic Truck est représenté par une SARL dont le but principal est de rapprocher les agriculteurs de la région des citadins. Nous employons Bernard et Yves afin d’assurer le bon fonctionnement du camion. Notre société est gérée par un jeune diplômé de l’ISEN qui a décidé de concrétiser ce projet pensée par des élèves-ingénieurs. Il a reçu le soutien de la région du Nord Pas-De-Calais ainsi que de la chambre d’agriculture du Nord Pas-De-Calais</p>"

var Articles = [new ArticleMetro("Où trouver l'organic Truck?", organicMap[1],0),
				new ArticleMetro("Nos produits", product,1),
				new ArticleMetro("Nos producteurs", "<p>Nos producteurs</p>",2),
				new ArticleMetro("Partage de nos recettes", recette,3),
				new ArticleMetro("Qui sommes nous?", about,4),
				new ArticleMetro("Partenaires", "<p>Nos partenaires</p>",5)];

    orderArticles(Articles);

    //globale basket
pannier = new BasketProducts();

function orderArticles(tab)
    {
        var lastColor = 0;
        for(var count = 0; count < tab.length; count++)
            {
                if(tab[count].getColor()==lastColor)
                    {
                        tab[count].setColor(lastColor%4+1);


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
    $("#contentCompte, #contentApp").hide("slow");
    $("#buttonsToContent").show("slow");

	changeTopTitle(appName);
}

function clickToCompteButton()
{
    $("#contentApp, #buttonsToContent").hide();
    $("#contentCompte").show();
   	$("#backbutton").show("slow");
    $("#contentCompte .articleMetro").html(pannier.print());//pannier.print()
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

function refreshCompte()
    {
        $("#caption").append("<p>"+pannier.getNbProducts()+"</p>")
    }

function ratioButton()
    {
        if($("body").width()>750)
            $(".btnMetro").height($(".btnMetro").width());
        else
            $(".btnMetro").height($(".btnMetro").width()/2);

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
  $(".compte").click(function(){clickToCompteButton();})

  ratioButton();

 window.onresize=function(){ratioButton()};
  });

})();
