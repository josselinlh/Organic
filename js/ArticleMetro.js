function ArticleMetro(title, content, id)
{
	this.title = title;
	this.id = id;
	this.idColor = Math.floor((Math.random() * 4) + 1);


	this.setContent();
	this.setContentArticle(content);
}

ArticleMetro.prototype.getContent = function()
{
	return this.content;
}

ArticleMetro.prototype.getArticleContent = function()
{
	return this.contentArticle;
}

ArticleMetro.prototype.setContent = function(content)
{
	var str = '<div id="'+this.id+'" class="btnMetro btn'+this.idColor+' col-xs-12 col-sm-6 col-md-2 col-md-offset-1">';
	var endStr = '</div>';

	this.content = str+this.title+endStr;
}

ArticleMetro.prototype.setContentArticle = function(content)
{
	var str = '<div class="articleMetro btn'+this.idColor+' col-xs-12 col-sm-12 col-md-10 col-md-offset-1">';
	var endStr = '</div>';

	this.contentArticle = str+this.title+content+endStr;
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
	return this.color;
}

ArticleMetro.prototype.setColor = function(color)
{
	this.color = color;
}
