//
// Um modelo simples
//
var Beatle = Backbone.Model.extend({
    defaults: {
        job: 'musician'
    }
});

//
// Instanciando cada modelo
//
var john   = new Beatle({id: 1, firstName: 'john',   lastName: 'Lennon'});
var paul   = new Beatle({id: 2, firstName: 'paul',   lastName: 'McCartney'});
var george = new Beatle({id: 3, firstName: 'george', lastName: 'Harrison'});
var ringo  = new Beatle({id: 4, firstName: 'ringo',  lastName: 'Starr'});

//
// Criando nossa collection
// a partir de um array de modelos
//
var theBeatles = new Backbone.Collection([john, paul, george, ringo]);