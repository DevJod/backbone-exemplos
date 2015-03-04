Outros exemplos de rotas
===


### ''

	http://localhost/foo/


### '*default'

	http://localhost/foo/#
	http://localhost/foo/#qualquer-coisa
	http://localhost/foo/#paginas-nao-encontradas


### 'search/:query':


	http://localhost/foo/#search/abc
	http://localhost/foo/#search/def
	http://localhost/foo/#search/ghi


### 'search/:n/:n/:n'

	http://localhost/foo/#search/1/2/3
	http://localhost/foo/#search/4/5/6
	http://localhost/foo/#search/7/8/9


### 'book/pagina:number'

	http://localhost/foo/#book/pagina01
	http://localhost/foo/#book/pagina02
	http://localhost/foo/#book/pagina03
