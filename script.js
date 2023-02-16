let marcasDeCarro = [{ marca: "Audi" }, { marca: "BMW" }];

let modelosDeCarro = [{ modelo: "A4" }, { modelo: "A5" }];

function adicionarModeloCarro(){
const valor = document.querySelector('#modelo').value;
let itemNovo = new Array
itemNovo.modelo = valor;
modelosDeCarro.push(itemNovo);
window.alert("Modelo adicionado com sucesso");
for (let modelo of modelosDeCarro) {
console.log(modelo.modelo);
}
}

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
