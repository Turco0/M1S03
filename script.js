

let modelosDeCarroJSON = localStorage.getItem('modelosDeCarro');
let modelosDeCarro = modelosDeCarroJSON? JSON.parse(modelosDeCarroJSON) : [];
let marcasDeCarroJSON = localStorage.getItem('marcasDeCarro');
let marcasDeCarro = marcasDeCarroJSON? JSON.parse(marcasDeCarroJSON) : [];
let veiculosJSON = localStorage.getItem('veiculos');
let veiculos = veiculosJSON? JSON.parse(veiculosJSON) : [];
salvarVeiculos(veiculos);
salvarModelosDeCarro(modelosDeCarro);
salvarMarcasDeCarro(marcasDeCarro);

function adicionarModeloCarro() {
  let modelosDeCarro = pegarModelosDeCarro();
  const valor = document.querySelector("#modelo").value;
  let itemNovo = "";
  itemNovo = valor;
  modelosDeCarro.push(itemNovo);
  salvarModelosDeCarro(modelosDeCarro);
  window.alert("Modelo adicionado com sucesso");
}

function adicionarVeiculo() {
  let veiculos = pegarVeiculos();
  let imagem = document.getElementById("imagem-veiculo").value;
  let modelo = document.getElementById("modelo-veiculo").value;
  let marca = document.getElementById("marca-veiculo").value;
  let km = document.getElementById("km-veiculo").value;
  let valor = document.getElementById("valor-veiculo").value;
  let cor = document.getElementById("cor-veiculo").value;
  let veiculo = {
    modelo: modelo,
    marca: marca,
    km: km,
    valor: valor,
    cor: cor,
    imagem: imagem,
  };
  veiculos.push(veiculo);
  salvarVeiculos(veiculos);
  window.alert("Veiculo adicionado com sucesso");
}

function adicionarMarcaCarro() {
  let marcasDeCarro = pegarMarcasDeCarro();
  const valor = document.querySelector("#marca").value;
  let itemNovo = "";
  itemNovo = valor;
  marcasDeCarro.push(itemNovo);
  salvarMarcasDeCarro(marcasDeCarro);
  window.alert("Marca adicionada com sucesso");
}

function listarVeiculos() {
  let veiculos = pegarVeiculos();
  for (let veiculo of veiculos) {
    let comando = `
    <div class="carro">
      <img src="${veiculo.imagem}" alt="">
      <ul>
        <li>${veiculo.modelo}</li>
        <li>${veiculo.marca}</li>
        <li>${veiculo.valor}</li>
        <li>${veiculo.km}</li>
        <li>${veiculo.cor}</li>
      </ul>
    </div>    
    `;
    document.querySelector("#patio").innerHTML += comando;
  }
}

function salvarMarcasDeCarro(marcasDeCarro) {
  localStorage.setItem("marcasDeCarro", JSON.stringify(marcasDeCarro));
}

function salvarModelosDeCarro(modelosDeCarro) {
  localStorage.setItem("modelosDeCarro", JSON.stringify(modelosDeCarro));
}

function salvarVeiculos(veiculos) {
  localStorage.setItem("veiculos", JSON.stringify(veiculos));
}

function pegarModelosDeCarro() {
  return JSON.parse(localStorage.getItem("modelosDeCarro"));
}

function pegarMarcasDeCarro() {
  return JSON.parse(localStorage.getItem("marcasDeCarro"));
}

function pegarVeiculos() {
  return JSON.parse(localStorage.getItem("veiculos"));
}
