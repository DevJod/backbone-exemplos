Sincronizando models com o servidor
===

A partir deste modelo...

```javascript
Person = Backbone.Model.extend({
    urlRoot: 'person/'
});
```

### Read - fetch()

```javascript
var p1 = new Person({id: 1});

p1.fetch({
    success: function (modeloResposta) {
        console.log("OK", modeloResposta);
    },
    error: function (model, xhr, options) {
        console.log("Erro");
    }
});
```

    url: http://localhost/person/1
    method: GET


### Create - save()

```javascript
var p1 = new Person({name: 'flavio'});

p1.save({}, {
    success: function() {
        console.log('OK');
    }
});
```

    url:    http://localhost/person/
    method: POST


### Update - save()


```javascript
var p1 = new Person({id: 1, name: 'flavio'});

p1.save({}, {
    success: function() {
        console.log('OK');
    }
});
```

    url:    http://localhost/person/1
    method: PUT



### Delete - destroy()

```javascript
var p1 = new Person({id: 1, name: 'flavio'});
p1.destroy();
```

    url:    http://localhost/person/1
    method: DELETE
