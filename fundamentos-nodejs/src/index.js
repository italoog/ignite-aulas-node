const express = require("express");

const app = express();

app.use(express.json());

// tipos de parametros

// Router Params => Identifacar um recurso editar/deletar/buscar
// Query Params => paginação / filtro
// Body Params => os objetos inserção / alteração

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curse 1", "Curse 2", "Curse 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curse 1", "Curse 2", "Curse 3", "Curse 4"]);
});

app.put("/courses/:id", (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(["Curse 6", "Curse 2", "Curse 3", "Curse 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curse 6", "Curse 7", "Curse 3", "Curse 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curse 6", "Curse 7", "Curse 4"]);
});

// localhost:3333
app.listen(3333);
