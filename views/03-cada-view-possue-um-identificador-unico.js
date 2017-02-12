// classe
var ViewExemplo = Backbone.View.extend({});

// vários objetos
var view1 = new ViewExemplo();
var view2 = new ViewExemplo();
var view3 = new ViewExemplo();

//
// Identificador único `cid`
//
console.log(view1.cid);
// "view1"

console.log(view2.cid);
// "view2"

console.log(view3.cid);
// "view3"