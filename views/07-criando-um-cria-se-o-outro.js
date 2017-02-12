//
//
//
var ViewExemplo = Backbone.View.extend({
    el: $("body"),
});
var view1 = new ViewExemplo();
view1.$el.html(Math.random());


var ViewExemplo = Backbone.View.extend({
    el: 'body',
});
var view1 = new ViewExemplo();
view1.$el.html(Math.random());