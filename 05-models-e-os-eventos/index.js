var Person = Backbone.Model.extend({

    // Valores padrão que são atribuídos ao instanciarmos o objeto
    defaults: {
        name: '',
        age: 0
    },

    initialize: function(){

        // Escutando as alterações na propriedade `name`
        this.on("change:name", function(model){
            console.log("Alterando name para: " + model.get('name'));
        });

        // Escutando as alterações na propriedade `age`
        this.on("change:age", function(model){
            console.log("Alterando age para: " + model.get('age'));
        });

    }
});

// Instanciando
//
// Repare que no construtor o evento NÂO é disparado.
var person = new Person({ name: "Micheletti", age: 20});

// Ao alterar o modelo...
person.set({ name: "Flavio"});
person.set({ name: "Alexandre", age: 40});

// ...percebemos (no console do navegador) os
// eventos sendo disparados:
//
// "Alterando name para: Flavio"
// "Alterando name para: Alexandre"
// "Alterando age para: 40"