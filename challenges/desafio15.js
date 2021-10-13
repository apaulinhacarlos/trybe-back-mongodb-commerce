db.produtos.count(
  { nome: { $regex: /mc/gmi } },
);