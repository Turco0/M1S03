let marcaDeCarro = [{ marca: "Audi" }, { marca: "BMW" }];

for (let marca of marcaDeCarro) {
  console.log(marca.marca);
}

function adicionarMarcaCarro() {
  const valor = document.querySelector('#marca').value;
  let itemNovo = {
  }
  itemNovo.marca = valor;
  marcaDeCarro.push(itemNovo);
  window.alert("Marca adicionada com sucesso");
  for (let marca of marcaDeCarro) {
    console.log(marca.marca);
  }
}
