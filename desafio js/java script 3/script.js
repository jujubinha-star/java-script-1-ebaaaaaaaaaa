// EXEMPLO 1
let nome = "Júlia"
saudacao1(nome)
saudacao1(nome)
function saudacao1(nome) {
    console.log ("Olá " + nome)
}

// EXEMPLO 2
let numero1 = 2
let numero2 = 3
let resultado = somar(numero1, numero2)
console.log ( resultado)

function somar (numero1,numero2 ){
    return numero1 + numero2
}


// EXEMPLO 3
saudacao()
function saudacao(){
    console.log("Seja bem-vindo!")
}

// EXEMPLO 4
let numero4 = 4
let resultado2 = gerarTabuada(numero4)


function gerarTabuada(numero4){

for( let i=0; i <=20; i++){
    console.log(numero4 * i);
}
}


// CALCULAR IMC

    //  peso e altura

        let peso = parseFloat(prompt("Digite o seu peso (Kg): "))
        let altura = parseFloat(prompt("Digite a sua altura(m): "))
        gerarRelatorio(peso,altura)

        function calcularIMC(peso, altura){
           return  peso / (altura * altura)
        }

        



    // classificar imc
        
      function clasificarIMC(imc){
        if( imc >=40) {
            alert("obesidade grau 3 " + imc)
        }
        else if( imc >=35) {
            alert("obesidade grau 2 " + imc)
        }
         else if( imc >=30) {
            alert("obesidade grau 1 " + imc)
        }
         else if ( imc >=25) {
            alert("sobrepeso " + imc)
        }
        else if( imc >=18.5) {
            alert("peso normal " + imc)
        }
        else if( imc <18.5) {
            alert("baixo peso " + imc)
        }
      }

      function gerarRelatorio(peso, altura){
        let imc = calcularIMC(peso, altura)
        clasificarIMC(imc)
      }


,
