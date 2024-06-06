let nome = document.getElementById("nome");
let Resposta = document.getElementById("Resposta");

function Aperta()
{
    Resposta.innerHTML = "olá, " +  nome.value +" , tudo bem?"
}

function converterMetrosParaCentimetros() {
    var metrosInput = document.getElementById("metrosInput");
    var resultadoElement = document.getElementById("resultado");
    
    var metros = parseFloat(metrosInput.value);

    if (!isNaN(metros)) {
        var centimetros = metros * 100;
        resultadoElement.textContent = metros + " metros é igual a " + centimetros + " centímetros.";
    } else {
        resultadoElement.textContent = "Por favor, insira um valor válido.";
    }
}

let pegarNumero = document.getElementById("valor")
let n1MaisUm = document.getElementById("sucessor")
let n1MenosUm = document.getElementById("antecessor")

function descobrir()
{
    n1MaisUm.innerHTML = parseInt(pegarNumero.value) + 1;
    n1MenosUm.innerHTML = parseInt(pegarNumero.value) - 1;
}

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let Resultado = document.getElementById("Resultado");

function somar()
{
    Resultado.innerHTML = parseFloat (numero1.value) -
    parseFloat (numero2.value)
}

let salario = document.getElementById("salario")
let aumento = document.getElementById("aumento")

function total()
{
    if (salario.value <=1250)
        {
            aumento.innerHTML = "aumento de " + parseFloat(salario.value* 15)/100+ "reais "
        }
        else
        {
            aumento.innerHTML = "aumento de " + parseFloat(salario.value* 10)/100+ "reais "
        }
        
}

a = 0
while (a <=100){
    console.log(a)
    a = a + 1
}






