function ArticleMetro(title, contentArgument, id)
{
	this.title = title;
	this.id = id;
	this.idColor = id%4+1;
    this.contentArgument=contentArgument;

	this.refreshView();
}

ArticleMetro.prototype.refreshView = function()
{
	this.setContent();
	this.setContentArticle(this.contentArgument);
}

ArticleMetro.prototype.getContent = function()
{
	return this.content;
}

ArticleMetro.prototype.getArticleContent = function()
{
	return this.contentArticle;
}

ArticleMetro.prototype.setContent = function(offset)
{
    offset = typeof offset !== 'undefined' ? offset : 1;

	var str = '<div id="'+this.id+'" class="btnMetro btn'+this.idColor+' col-xs-12 col-sm-6 col-md-2 col-md-offset-'+offset+'">';
	var endStr = '</div>';

	this.content = str+"<p>"+this.title+"</p>"+endStr;
}

ArticleMetro.prototype.setContentArticle = function(content)
{
	var str = '<div class="articleMetro btn'+this.idColor+' col-xs-12 col-sm-12 col-md-10 col-md-offset-1">';
	var endStr = '</div>';

	this.contentArticle = str+"<h1>"+this.title+"</h1>"+content+endStr;
}

ArticleMetro.prototype.getTitle = function()
{
	return this.title;
}

ArticleMetro.prototype.setTitle = function(title)
{
	this.title = title;
}

ArticleMetro.prototype.getColor = function()
{
	return this.idColor;
}

ArticleMetro.prototype.setColor = function(color)
{
    if(color<1 || color>5)
        this.idColor=1;
    else
        this.idColor = color;
    this.refreshView();

}
