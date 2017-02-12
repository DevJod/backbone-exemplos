//
// O elemento padrão é uma `div`
//
var ViewExemplo = Backbone.View.extend({ });
var view = new ViewExemplo();


//
// Aproveite para ver a diferênça entre `$el` e `el:
//
console.log(view.el);
// <div>

console.log(view.$el);
// Object[div]


//
// $el possui uma semelhança com o objeto jquery abaixo
//
console.log($('div'));
// Object[]