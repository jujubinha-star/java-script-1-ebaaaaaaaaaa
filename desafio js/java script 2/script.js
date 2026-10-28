//  ou é duas barras

let numero_pontos = 594 
let tempo_de_casa = 2

if(numero_pontos<=99){console.log("Você é cliente Bronze!")}
else if(numero_pontos <= 499){console.log("Você é cliente Prata!")}
else if(numero_pontos <=999){console.log("Você é cliente Ouro!")}
else if(numero_pontos>=1000 && tempo_de_casa>1){console.log("Você é cliente Diamante!")}


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
for (let i = 1; i<=5; i++){
    console.log(i)
}

let tentativas = 29
while(tentativas > 0){
    console.log(`Restam ${tentativas}`);
    tentativas--;
}

// ----------------------TABUADA----------------------------------------
// for (let a=0; a<10; a++) {
//     console.log(a)
// }

let numero = 5
for(let a=0; a<=10; a++) {
    console.log(`${numero}`* `${a} `)
}

// PROMPT

let numero1 = Number(prompt("Digite o seu primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let operacao = prompt("Informe a operação: \n[+]\n[-]")





 if (operacao == "+"){
 alert( `${numero1+numero2}`)
 } else if(operacao == "-"){
     alert(`${numero1-numero2}`)
}


