var colecao = new Backbone.Collection();

// Adicionando os modelos
colecao.add([{id: 1, firstName: 'john',   lastName: 'Lennon'}])
colecao.add([{id: 2, firstName: 'paul',   lastName: 'McCartney'}])
colecao.add([{id: 3, firstName: 'george', lastName: 'Harrison'}])
colecao.add([{id: 4, firstName: 'ringo',  lastName: 'Starr'}])

// Estado original
console.log(JSON.stringify(colecao));

/*

	"[{"id":1,"firstName":"john","lastName":"Lennon"},
      {"id":2,"firstName":"paul","lastName":"McCartney"},
	  {"id":3,"firstName":"george","lastName":"Harrison"},
	  {"id":4,"firstName":"ringo","lastName":"Starr"}]"

*/


// ordenado por `firstName`
colecao.comparator = "firstName";
colecao.sort();


// Estado alterado
console.log(JSON.stringify(colecao));

/*

"[{"id":3,"firstName":"george","lastName":"Harrison"},
  {"id":1,"firstName":"john","lastName":"Lennon"},
  {"id":2,"firstName":"paul","lastName":"McCartney"},
  {"id":4,"firstName":"ringo","lastName":"Starr"}]"

*/