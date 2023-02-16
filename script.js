let marcasDeCarro = [{ marca: "Audi" }, { marca: "BMW" }];

let modelosDeCarro = [{ modelo: "A4" }, { modelo: "A5" }];

let veiculos = [{ modelo: "A4", marca: "Audi", km: 0, valor: 5000 , cor: 'Verde'}, { modelo: "A5", marca: "BMW", km: 1555, valor: 10000, cor: 'Azul'}]

for (modelo of modelosDeCarro) {
let opcaomodelo = document.querySelector("#modelo-veiculo");
let option = document.createElement("option");
option.innerHTML = modelo.modelo;
option.value = modelo.modelo;
opcaomodelo.appendChild(option);
}
for (marca of marcasDeCarro) {
let opcaomarca = document.querySelector("#marca-veiculo");
let option = document.createElement("option");
option.innerHTML = marca.marca;
option.value = marca.marca;
opcaomarca.appendChild(option);
}

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

function adicionarVeiculo(){
let modelo = document.getElementById("modelo-veiculo").value;
let marca = document.getElementById("marca-veiculo").value;
let km = document.getElementById("km-veiculo").value;
let valor = document.getElementById("valor-veiculo").value;
let cor = document.getElementById("cor-veiculo").value;
let veiculo = { modelo: modelo, marca: marca, km: km, valor:valor, cor: cor};
veiculos.push(veiculo);
window.alert("Veiculo adicionado com sucesso");
console.log(veiculos);
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

function listarVeiculos() {
for (let veiculo of veiculos) {
console.log(`${veiculo.modelo} - ${veiculo.marca} - ${veiculo.km}KM - Valor: R$${veiculo.valor} - Cor: ${veiculo.cor}`);
}
}