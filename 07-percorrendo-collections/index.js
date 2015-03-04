// Um modelo simples
var Beatle = Backbone.Model.extend({
    defaults: {
        job: 'musician'
    }
});

// Instanciando cada modelo
var john   = new Beatle({id: 1, firstName: 'john',   lastName: 'Lennon'});
var paul   = new Beatle({id: 2, firstName: 'paul',   lastName: 'McCartney'});
var george = new Beatle({id: 3, firstName: 'george', lastName: 'Harrison'});
var ringo  = new Beatle({id: 4, firstName: 'ringo',  lastName: 'Starr'});

// Criando nossa collection a partir de um array de modelos
var theBeatles = new Backbone.Collection([john, paul, george, ringo]);

//
// forEach()
//
theBeatles.forEach(function(model, index){
    console.log(index + " - " + model.get('lastName'));
});

//
// each()
//
theBeatles.each(function (model, index) {
    console.log(index + " - " + model.get('lastName'));
});

//
// each() - forma diferente
//
_(theBeatles.models).each(function(model, index){
    console.log(index + " - " + model.get('lastName'));
});

//
// for
//
for (var i = 0; i < theBeatles.length; ++i) {
    console.log(i + ' - ' + theBeatles.at(i).get('lastName'));
}

/*

	Os exemplos acima chegam no mesmo resultado, veja:

	"0 - Lennon"
	"1 - McCartney"
	"2 - Harrison"
	"3 - Starr"

*/