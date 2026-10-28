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
        let resultado3 = calcularIMC(peso, altura)
        alert(resultado3)

        function calcularIMC(peso, altura){
           return  peso / (altura * altura)
        }

        



    // classificar imc
        
         
        
         function classificarIMC(imc){
            if(imc<18,5){ alert('baixo peso')}
            else if (imc >= 18,5){alert('Peso normal')}
            else if (imc >=25,0) {alert('Sobrepeso')}
            else if (imc >=30,0) {alert('Obesidade grau 1')}
            else if (imc >=35,0) {alert('Obesidade grau 2')}
            else if (imc >=40,0) {alert('Obesidade grau 3')}
        }



    // gerar relatorio
        
