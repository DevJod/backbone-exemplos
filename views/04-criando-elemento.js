//
// criando o elemento padrão (no caso é uma `div`)
//
var ViewExemplo = Backbone.View.extend({ });
var view = new ViewExemplo();
console.log(view.el); // <div>


//
// criando o elemento através da propripedade `tagname`
//
var ItemView = Backbone.View.extend({
  tagName: 'li'
});

//
// criando o elemento através da propripedade `el`
//
var BodyView = Backbone.View.extend({
  el: 'body'
});

var item = new ItemView();
var body = new BodyView();

console.log(item.el, body.el);
// <li>
// <body>