var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")


for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 200){
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
    paciente.classList.add("erro__paciente")
    }

    if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"
    paciente.classList.add("erro__paciente")
    }   

    if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;    
    }
}

function calculaImc (peso, altura){

    var imc = 0;
    imc = peso /(altura * altura);

    return imc.toFixed(2);
}








