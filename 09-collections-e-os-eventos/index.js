var Colecao = Backbone.Collection.extend({
    initialize: function () {

        // ao adicionar um model
        this.on('add', function () {
            console.log('added')
        });

        // ao remover um modelo
        this.on('remove', function () {
            console.log('removed')
        });

        // ao ordenar a coleção
        this.on('sort', function () {
            console.log('sorted')
        });

        // ao 'resetar' a coleção
        this.on('reset', function () {
            console.log('was-reset')
        });
    }
})

var colecao = new Colecao();

colecao.add({id: 0});               // "added"
colecao.add({id: 1});               // "added"
colecao.add({id: 2});               // "added"

colecao.remove(0);                  // "removed"

colecao.comparator = "firstName";
colecao.sort();                     // "sorted"

colecao.reset();                    // "was-reset"