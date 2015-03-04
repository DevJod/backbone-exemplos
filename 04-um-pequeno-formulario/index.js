//
// Definindo um modelo (model)
//
var Person = Backbone.Model.extend({
    defaults: {
        name: '',
        age: 0
    }
});

//
// Definindo uma visão (view)
//
var AppView = Backbone.View.extend({
    // este é o elemento principal
    el: $('#app-container'),
    // executado ao instanciarmos a visão
    initialize: function () {

        // armazenado campos de textos
        this.$txtNome  = this.$el.find('#txtNome');
        this.$txtIdade = this.$el.find('#txtAge');

        // armazenando modelo
        this.model = new Person({});

        // Fazendo o modelo escutar o evento `change`, forma 2:
        this.model.on('change', this.render, this);
    },
    // lógica de renderização
    render: function () {
        this.$txtNome.val(this.model.get('name'));
        this.$txtIdade.val(this.model.get('age'));
    }
});

//
// Iniciamos a aplicação
//
var view = new AppView();