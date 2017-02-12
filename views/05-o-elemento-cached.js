//
// O elemento $el é um cach da jQueyr
//
var ViewExemplo = Backbone.View.extend({ });
var view = new ViewExemplo();
console.log(view.$el);
// Object[div]


// $el possui uma semelhança com o objeto jquery abaixo
console.log($('div'));
// Object[]