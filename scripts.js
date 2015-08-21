$(document).ready(function(){

var Person = {
	firstName: 'Ben',
	lastName: 'Hunt',
	parents: ['Doug','Sharon'],
	siblings: {
		Type: 'Brother',
		Name: 'Dylan'
	},
	currentReadingList: [new book('The Short Stories','Ernest Hemingway','Fiction','http://www.amazon.com/Short-Stories-Forty-nine-Preface-Author/dp/0684803348','http://ecx.images-amazon.com/images/I/51BTFFQ4X7L._SX306_BO1,204,203,200_.jpg'),
	new book('Thinking Fast and Slow','Daniel Kahneman','Nonfiction','http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555','http://ecx.images-amazon.com/images/I/41RtytNpsfL._SX332_BO1,204,203,200_.jpg'),
	new book('A Supposedly Fun Thing I"ll Never Do Again','David Foster Wallace','Essays','http://www.amazon.com/Supposedly-Fun-Thing-Never-Again/dp/0316925284/','http://ecx.images-amazon.com/images/I/51P8MZzESJL._SX316_BO1,204,203,200_.jpg')]
	
};

function book(title,author,type,link,img){
	this.Title = title;
	this.Author = author;
	this.Type = type;
	this.link = link;
	this.img = img;
};

Handlebars.registerHelper("test",function(obj){
	if (this != 'link'){
		console.log(this);
		return this;
	}
	
})

Handlebars.registerHelper('link', function(text, url) {
  text = 'Link';
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + url + '">' + text + '</a>';

  return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('img', function(url) {
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<img src="' + url + '" >' + '</img>';

  return new Handlebars.SafeString(result);
});

var source = $('#entry-template').html();
var template = Handlebars.compile(source);

$('.person').html(template(Person));

});