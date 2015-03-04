var AppRouter = Backbone.Router.extend({

    //
    // Definindo rotas
    //
    routes: {
        'lish':  'callbackToLish',
        'bar':   'callbackToBar',
        'proof': 'callbackToProof'
    },

    //
    // Callbacks..
    //
    callbackToLish: function () {
        console.log('callback to lish');
    },
    callbackToBar: function () {
        console.log('callback to bar');
    },
    callbackToProof: function () {
        console.log('callback to proof');
    }
});

// Inicializar o Router
var app_router = new AppRouter();

// Após definirmos as rotas, devemos sempre
// inicializar o Backbone.history
Backbone.history.start();