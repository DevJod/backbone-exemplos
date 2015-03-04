//
// Collection
//
var theBeatles = new Backbone.Collection();

//
// Models
//
theBeatles.add([{id: 1, firstName: 'john',   lastName: 'Lennon'}]);
theBeatles.add([{id: 2, firstName: 'paul',   lastName: 'McCartney'}]);
theBeatles.add([{id: 3, firstName: 'george', lastName: 'Harrison'}]);
theBeatles.add([{id: 4, firstName: 'ringo',  lastName: 'Starr'}]);

//
// View
//
var AppView = Backbone.View.extend({
    el: $("#app-container"),
    initialize: function () {
        this.$lista = $('#lista-container');
        this.render();
    },
    render: function() {
        var that = this;
        theBeatles.forEach(function(model, index){
            that.$lista.append('<li>' + model.get('id') +
                               ' - ' + model.get('firstName') +
                               ' ' + model.get('lastName') + '</li>');
        });
    }
});

//
// Instanciando a visão (view)
//
var app_view = new AppView();