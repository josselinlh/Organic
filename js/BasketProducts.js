function BasketProducts()
{
	this.prix = 0;
    this.products = {};
    this.nbProducts = 0;

    this.getInfoFromLocalStorage();
}


    //carrotes --> 9443, 1.2
    //patate --> 5990, 1.3
    //soupe tomate --> 6903, 3
    //betterave --> 8554, 1.5
    //chou --> 6417, 1.5
    //poireaux --> 6587
    //oignons --> 9887
    //endive --> 4586
    //concombre --> 7675
    //

BasketProducts.prototype.getPrix = function()
{
    return this.prix;
}
BasketProducts.prototype.getNameFromId = function(id)
{
    var curentId = parseInt(id);
    var tmpName;

    switch(curentId) {
    case 9443:
        tmpName="Kilo de carrotes";
        break;
    case 5990:
        tmpName="Kilo de pommes de terre";
        break;
    case 6903:
        tmpName="1L de soupe de tomate";
        break;
    case 8554:
        tmpName="Kilo de betterave";
        break;
    case 6417:
        tmpName="Kilo de chou";
        break;
    default:
        tmpName="Indisponible";
    }

    return tmpName;
}

BasketProducts.prototype.getPriceFromId = function(id)
{
    var curentId = parseInt(id);
    var tmpPrix;

    switch(curentId) {
    case 9443:
        tmpPrix=1.2;
        break;
    case 5990:
        tmpPrix=1.3;
        break;
    case 6903:
        tmpPrix=3;
        break;
    case 8554:
        tmpPrix=1.5;
        break;
    case 6417:
        tmpPrix=1.5;
        break;
    default:
        tmpPrix=0;
    }

    return tmpPrix;
}

BasketProducts.prototype.setPrix = function(newPrice)
{
    this.prix=newPrice;
    this.addInLocalStorage("prix",this.prix);
}

BasketProducts.prototype.addPrix = function(newPrice)
{
    this.prix=this.prix+newPrice;
    this.addInLocalStorage("prix",this.prix);

}


BasketProducts.prototype.getInfoFromLocalStorage = function()
{
    for(var prop in localStorage)
    {
        if(prop=="prix")
        {
            this.prix=localStorage[prop];
        }
        else if(localStorage.hasOwnProperty(prop))
        {
            this.products[prop] = parseInt(localStorage.getItem(prop));

        }

    }

    this.refreshNbProducts();
}

BasketProducts.prototype.refreshNbProducts = function()
{
    var count = 0;
    for(var tmpObj in this.products)
    {
        count++;
    }

    this.nbProducts = count;
}

BasketProducts.prototype.getNbProducts = function()
{
    return this.nbProducts;
}

BasketProducts.prototype.clear = function()
{
    localStorage.clear();
	this.prix = 0;
    this.products = {};
    this.nbProducts = 0;
}

BasketProducts.prototype.addProducts = function(attr)
{
    if(this.products[attr]===undefined)
        this.products[attr]=1;
    else
        this.products[attr]=this.products[attr]+1;

    this.addInLocalStorage(attr);
    this.addPrix(this.getPriceFromId(attr));
    this.nbProducts=this.nbProducts+1;

}

BasketProducts.prototype.addInLocalStorage = function(attr, value)
{
    value = typeof value !== 'undefined' ? value : 1;
    if(localStorage.getItem(attr) !== null && value === 1)
    {
        localStorage.setItem(attr,parseInt(localStorage.getItem(attr))+value);
    }
    else
    {
        localStorage.setItem(attr,value);
    }
}

BasketProducts.prototype.print = function()
{
    var tmpStr = "<h1>Bienvenue sur votre compte</h1><ul>Votre Panier contient "+this.getNbProducts()+" Produits : ";
    var clear = "<p class='basketClear'>Vider le panier</p>";
    if(this.getNbProducts()==0)
    {
        tmpStr="<h1>Bienvenue sur votre compte</h1><p>Votre panier est vide.</p>";
        clear = "";
     }


     for(var tmpObj in this.products)
    {

            tmpStr=tmpStr+"<li>"+this.products[tmpObj]+" X "+this.getNameFromId(tmpObj)+" : "+Math.round(this.products[tmpObj]*this.getPriceFromId(tmpObj)*100)/100+" €</li>";


    }

    tmpStr=tmpStr+"</ul><p>Total "+this.getPrix()+" €</p>"+clear;

    return tmpStr;

}


