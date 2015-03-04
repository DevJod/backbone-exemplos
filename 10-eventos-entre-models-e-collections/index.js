var colecao = new Backbone.Collection();

colecao.add([{id: 1, firstName: 'john',   lastName: 'Lennon'}]);
colecao.add([{id: 2, firstName: 'paul',   lastName: 'McCartney'}]);
colecao.add([{id: 3, firstName: 'george', lastName: 'Harrison'}]);
colecao.add([{id: 4, firstName: 'ringo',  lastName: 'Starr'}]);

colecao.on("change:firstName", function(model) {
    console.log("Alterado: " + model.get('firstName') + " " + model.get('lastName'));
});

var john, paul, george, ringo;

john = colecao.get(1);
john.set('firstName', 'John');
// "Alterado: John Lennon"

paul = colecao.get(2);
paul.set('firstName', 'Paul');
// "Alterado: Paul McCartney"

george = colecao.get(3);
george.set('firstName', 'George ');
// "Alterado: George  Harrison"

ringo = colecao.get(4);
ringo.set('firstName', 'Ringo');
// "Alterado: Ringo Starr"