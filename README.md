# Backend-GeoApp-Terralab2022-2
Usuários de um determinado nicho, para descrever locais de interesse em uma área geográfica, tem a necessidade de armazenar pontos geográficos (latitude e longitude) com uma descrição (Ex. escola, farmácia). Para tal aplicação um backend é necessário. Desenvolva um backend em Node.JS que permita o cadastro, visualização, alteração e remoção de usuários e pontos geográficos. O código deverá incluir testes unitários automatizados utilizando o framework Jest e adicionado em seu repositório pessoal público no Github. 

routes.post("/locations", geoController.create)
```
{
	"latitude": "14.4548",
	"longitude": "96.4343",
	"desc": "Escola"
}
```

post method returns a json response if post is successful:
```
{
	"id": "feecd450-f127-4be5-ab72-d52d5b3a5680",
	"latitude": "14.4548",
	"longitude": "96.4343",
	"desc": "Escola",
	"created_at": "2022-05-22T23:13:07.000Z"
}
```

routes.post("/users", usersController.create);
```
{
	"email": "test2@gmail.com",
	"username": "test"
}
```

post method returns a json response if post is successful:
```
{
	"id": "77de93ba-ac30-46b3-a7ca-68b00bf2c676",
	"email": "test2@gmail.com",
	"username": "test",
	"created_at": "2022-05-22T23:15:34.000Z"
}
```

routes.delete("/users/:email", usersController.delete) => ```http://localhost:3333/users/test2@gmail.com```:
```
{
	"username": "test"
}
```

delete method return a status code with code 200 if successful:
```
return 200; // status code OK.
```

routes.delete("/locations/:desc", geoController.delete) +> ```http://localhost:3333/locations/Escola```:
```
{
	"latitude": "14.4548",
	"longitude": "96.4343"
}
```

delete method return a status code with code 200 if successful:
```
return 200; // status code OK.
```
