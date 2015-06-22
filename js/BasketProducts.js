function BasketProducts()
{
	this.prix = 0;
    this.products = {};
    this.nbProducts = 0;

    this.getInfoFromLocalStorage();
}

BasketProducts.prototype.getInfoFromLocalStorage = function()
{
    for(var prop in localStorage)
    {
        if(localStorage.hasOwnProperty(prop))
        {
            this.products.prop = localStorage.getItem(prop);

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
