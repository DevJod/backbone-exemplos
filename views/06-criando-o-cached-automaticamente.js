//
// Ao criarmos o elemento el o chach $el é automaticamente criado
//


//
// exemplo div
//
var ViewExemplo = Backbone.View.extend({ });
var view = new ViewExemplo();
console.log(view.el);  // <div>
console.log(view.$el); // Object[div]


//
// exemplo p
//
var ViewExemplo = Backbone.View.extend({
  tagName: 'p'
});
var view = new ViewExemplo();
console.log(view.el);  // <p>
console.log(view.$el); // Object[p]


//
// exemplo a
//
var ViewExemplo = Backbone.View.extend({
  tagName: 'a'
});
var view = new ViewExemplo();
console.log(view.el);  // <p>
console.log(view.$el); // Object[p]