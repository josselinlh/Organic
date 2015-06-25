(function(){

var appName = "Organic Truck";

var organicMap = ['<div id="mapMetro"></div><script type="text/javascript" src="js/map.js"></script>',
				  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.782023537872!2d3.0601460000000005!3d50.63116600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58508b740c1%3A0x5e9f0f5d8d3b698c!2sParking+R%C3%A9publique!5e0!3m2!1sfr!2sfr!4v1434720817969" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.628702041975!2d3.021058!3d50.634014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d55c0d84d577%3A0x8b10cbcee7717a6b!2sEuraTechnologies!5e0!3m2!1sfr!2sfr!4v1434721044176" width="800" height="600" frameborder="0" style="border:0"></iframe>',
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6932507231572!2d3.046525999999992!3d50.632815000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x941ce6543ee12a17!2sUniversit%C3%A9+Catholique+de+Lille!5e0!3m2!1sfr!2sfr!4v1434721204835" width="800" height="600" frameborder="0" style="border:0"></iframe>'];

var product ="<div name='9443' class='productGallery'><img class='img-circle img-responsive' src='img/carrots.jpg' /><div class='productGalleryToggleButton'><p class='prixProduct'>1,20 € / kg</p><i name='9443' class='fa fa-cart-arrow-down fa-lg'></i><i title='1 kilo de carottes cultivé à Erquinghem.' class='fa fa-info-circle fa-lg'></i></div></div><div name='5990' class='productGallery'><img class='img-circle img-responsive' src='img/potatoes.jpg' /><div class='productGalleryToggleButton'><p class='prixProduct'>1,30 € / kg</p><i name='5990' class='fa fa-cart-arrow-down fa-lg'></i><i title='Pommes de terre au kilo issus de de nos méthodes de cultures raisonnées.' class='fa fa-info-circle fa-lg'></i></div></div><div name='6903' class='productGallery'><img class='img-circle img-responsive' src='img/soup.jpg' /><div class='productGalleryToggleButton'><p class='prixProduct'>3,00 € / L</p><i name='6903' class='fa fa-cart-arrow-down fa-lg'></i><i title='Potage de tomate vendu au littre dans des contenant en plastique.' class='fa fa-info-circle fa-lg'></i></div></div><div name='8554' class='productGallery'><img class='img-circle img-responsive' src='img/betterave.jpg' /><div class='productGalleryToggleButton'><p class='prixProduct'>1,50 € / kg</p><i name='8554' class='fa fa-cart-arrow-down fa-lg'></i><i title='Betterave biologiques.' class='fa fa-info-circle fa-lg'></i></div></div><div name='6417' class='productGallery'><img class='img-circle img-responsive' src='img/chou.jpg' /><div class='productGalleryToggleButton'><p class='prixProduct'>1,50 € / pièce</p><i name='6417' class='fa fa-cart-arrow-down fa-lg'></i><i title='Chou de monsieur Soiton (Fournes-en-weppes).' class='fa fa-info-circle fa-lg'></i></div><script type='text/javascript' src='js/products.js'></script>";

var recette ="<div class='partagedenosrecettes'><h1>Tarte poireau maroille</h1><img class='img-circle img-responsive' src='img/tarte poireau maroielle.jpg' /><p>Ingrédients : 5 poireaux de taille moyenne Un quart maroilles 10g de beurre 2 cuillères à soupe de crème fraiche épaisse 1 pâte brisée Sel, poivre 1 noix de muscade et 200g de lardon</p><p> Préparation : </p><p> Emincez les poireaux en fines rondelles.</p><p> Coupez le maroilles en fines tranches dans le sens de la longueur.</p><p> Dans une casserole, faites fondre la motié du beurre à feux doux puis versez les poireaux.</p><p> Couvrez et laissez cuire 10 minutes en remuant.</p><p> Une fois que les poireaux sont cuits, incorporez la crème fraiche, salez et poivrez. </p><p> Etalez la pâte dans un plat à tarte que vous aurez beurré.</p><p> Piquez la pâte puis versez-y les poireaux.</p><p> Répartissez les morceaux de maroilles.</p><p> Faites cuire à 180°C (th6) pendant 25 à 30 minutes. Servez chaud :) <3 <3 <3 </p></div>";

var about = "<div class='aboutMetro'><p>L’Organic Truck est un concept inventé par des étudiants de l’ISEN.</p><img class='img-responsive' src='img/truck.png' /><p>L’Organic Truck est représenté par une SARL dont le but principal est de rapprocher les agriculteurs de la région des citadins. Nous employons Bernard Duteil et Yves Mabille afin d’assurer le bon fonctionnement du camion.</p><p> Notre société est gérée par un jeune diplômé de l’ISEN qui a décidé de concrétiser ce projet pensée par des élèves-ingénieurs. Il a reçu le soutien de la région du Nord Pas-De-Calais ainsi que de la chambre d’agriculture du Nord Pas-De-Calais</p><p>Si vous avez des questions n'hésitez pas à nous contacter à l'adresse : josselin.lhopitallier@isen-lille.fr</p></div>"

var fermier = "<img class='img-responsive' src='img/fermier1.jpg' /><p>Bernard Lefevre, Frelinghien 12 produits</p><img class='img-responsive' src='img/fermier2.jpg' /><p>Jean Yves, Erquinghem 30 produits</p><img class='img-responsive' src='img/fermier3.jpg' /><p>Austave Soiton, Fournes-en-weppes 5 produits</p>";

var partenaires = "<div class='partenairesMetro'><p>Ils nous soutiennent dans nos actions.</p><img class='img-responsive' src='img/part1.jpg' /><img class='img-responsive' src='img/part2.jpg' /><img class='img-responsive' src='img/part3.jpg' /><img class='img-responsive' src='img/part4.jpg' /><img class='img-responsive' src='img/part5.png' /></div>";

var Articles = [new ArticleMetro("Où trouver l'organic Truck?", organicMap[0],0),
				new ArticleMetro("Nos produits", product,1),
				new ArticleMetro("Nos producteurs", "<p>Nos producteurs</p>"+fermier,2),
				new ArticleMetro("Partage de nos recettes", recette,3),
				new ArticleMetro("Qui sommes nous?", about,4),
				new ArticleMetro("Partenaires", partenaires,5)];

    orderArticles(Articles);

    //globale basket
panier = new BasketProducts();

function orderArticles(tab)
    {
        for(var count = 0; count < tab.length; count++)
            {
                {switch(count) {
                case 0:
                        tab[count].setColor(1);
                        break;
                case 1:
                        tab[count].setColor(3);
                        break;
                case 2:
                        tab[count].setColor(2);
                        break;
                case 3:
                        tab[count].setColor(4);
                        break;
                case 4:
                        tab[count].setColor(2);
                        break;
                case 5:
                         tab[count].setColor(1);
                        break;
                case 6:
                case 7:
                case 8:
                        break;
                default:
                }}

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
    $("#buttonsToContent").show("slow")
    .delay("slow")
    .queue(function(next)
     {
        ratioButton();
        next();
    });

	changeTopTitle(appName);

}

function clickToCompteButton()
{
    $("#contentApp, #buttonsToContent").hide();
    $("#contentCompte").show();
   	$("#backbutton").show("slow");
    $("#contentCompte .articleMetro").html(panier.print());
    $(".basketClear").click(function(){panier.clear();
                                       $("#contentCompte .articleMetro").html(panier.print()); $(".compte").html("<p>Panier</p>");});
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


function ratioButton()
    {

        if($("body").width()>750)
            $(".btnMetro").height($(".btnMetro").width());
        else
            $(".btnMetro").height($(".btnMetro").width()/2);

    }

$(document).ready(function(){
  $("#backbutton").hide();

  if(panier.getPrix()!==0)
      $(".compte").html("<p>Panier ("+panier.getPrix()+"€)</p>")

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
