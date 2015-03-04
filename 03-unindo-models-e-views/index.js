//
// Model
//
Person = Backbone.Model.extend({
    initialize: function () {
        console.log('model inicializado');
    }
});

//
// View
//
var ViewFormulario = Backbone.View.extend({

    initialize: function () {
        // instanciando um novo modelo
        this.model = new Person();

        // Escutando o evento `change`.
        // A cada alteração no modelo a função
        // de callback `render()` será executada
        this.model.on('change', this.render, this);
    },

    render: function () {
        console.log('renderizou!');
    }
});

//
// Instanciamos a View
//
var view = new ViewFormulario();