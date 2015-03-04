//
// Model
//
Friend = Backbone.Model.extend({});

//
// Collection
//
Friends = Backbone.Collection.extend({
    // Repare que estamos fazendo uso do segundo parâmetro "options"
    initialize: function (models, options) {
        // Para cada modelo adicionado nesta coleção
        // executamos a função callback "view.render()"
        this.on('add',  options.view.render, this);
    }
});

//
// View
//
AppView = Backbone.View.extend({
    el: $('body'),
    initialize: function () {
        // Criamos a coleção e criamos um referência a esta visão
        // passando como segundo parâmetro as opções (options).
        this.friends = new Friends(null, {view: this});
    },
    events: {
        'click #add-friend': 'showPrompt',
    },
    showPrompt: function () {
        // Que coisa mais ultrapassada é essa ?
        var friend_name  = prompt('Who is your friend?');
        // Criamos um objeto com o nome fornecido pelo usuário
        var friend_model = new Friend({name: friend_name});
        // Adicionamos e modelo a coleção e, consequentemente,
        // disparamos o callback definido na collection.
        this.friends.add(friend_model);
    },
    render: function (model) {
        $('#friends-list').append('<li>' + model.get('name') + '</li>');
    }
});

// Aqui é o ponto inicial
var appview = new AppView;