var BooksCollection = Backbone.Collection.extend({
    url: './books/'
});

var books = new BooksCollection();

books.fetch({
    success: function (collection, response) {
        console.log('OK');
        console.log(JSON.stringify(books.toJSON()));
    },
    error: function (collection, response) {
        console.log('NEG');
    },
});

