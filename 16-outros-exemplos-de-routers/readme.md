Outros exemplos de rotas
===


A rota `''` casa com as url's:

	http://localhost/foo/


A rota `'*default'` casa com as url's:

	http://localhost/foo/#
	http://localhost/foo/#qualquer-coisa
	http://localhost/foo/#paginas-nao-encontradas

A rota `'search/:query'` casa com as url's:

	http://localhost/foo/#search/abc
	http://localhost/foo/#search/def
	http://localhost/foo/#search/ghi

A rota `'search/:n/:n/:n'` casa com as url's:

	http://localhost/foo/#search/1/2/3
	http://localhost/foo/#search/4/5/6
	http://localhost/foo/#search/7/8/9

A rota `'book/pagina:number'` casa com as url's:

	http://localhost/foo/#book/pagina01
	http://localhost/foo/#book/pagina02
	http://localhost/foo/#book/pagina03
