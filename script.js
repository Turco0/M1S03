let marcasDeCarro = [{ marca: "Audi" }, { marca: "BMW" }];

function adicionarMarcaCarro() {
  const valor = document.querySelector('#marca').value;
  let itemNovo = new Array
  itemNovo.marca = valor;
  marcasDeCarro.push(itemNovo);
  window.alert("Marca adicionada com sucesso");
  for (let marca of marcasDeCarro) {
    console.log(marca.marca);
  }
}
